package com.iu.scrapbook.service;

import com.iu.scrapbook.document.Album;
import com.iu.scrapbook.document.Image;
import com.iu.scrapbook.dto.ImageRequest;
import com.iu.scrapbook.dto.SearchImageRequest;
import com.iu.scrapbook.repository.AlbumRepository;
import com.iu.scrapbook.repository.ImageRepository;
import com.iu.scrapbook.template.GoogleDriveServiceRestTemplate;
import com.iu.scrapbook.util.DateUtil;
import com.mongodb.client.result.UpdateResult;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.time.Instant;
import java.util.List;
import java.util.MissingResourceException;

import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;
import static org.springframework.data.mongodb.core.query.Update.update;

/**
 * This service is responsible for communicating for google drive and MongoDB
 *
 * @author jbhushan
 */
@Component
@Slf4j
public class ImageServiceImpl implements ImageService{

    @Autowired
    private ImageRepository imageRepository;

    @Autowired
    private AlbumRepository albumRepository;

    @Autowired
    private AlbumService albumService;

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private GoogleDriveServiceRestTemplate googleDriveServiceRestTemplate;

    @Value("${scrapbook.googledrive.service.baseurl}")
    private String baseUrl;

    @Override
    public Image create(Image image) {
        image.setActive(true);
        return imageRepository.insert(image);
    }

    @Override
    public Image create(Image image, String albumId) throws MissingResourceException{
        Album album = albumRepository.findByGoogleDriveId(albumId);
        if(album == null){
            throw new MissingResourceException("Album with Id: "+albumId+" is missing", Album.class.getName(),albumId);
        }
        image.setActive(true);
        image.setAlbumGoogleId(album.getGoogleDriveId());
        image = imageRepository.insert(image);
        // update album
        List<Image> images = imageRepository.findByAlbumGoogleIdAndActive(albumId,true);
        Long size = images.stream().mapToLong(i->i.getSize()).sum();
        //album.setSize(size);
        mongoTemplate.updateFirst(query(where("googleDriveId").is(albumId)),
                update("size", size), Album.class);

//        mongoTemplate.updateFirst(query(where("googleDriveId").is(image.getGoogleDriveId())),
//                update("albumGoogleId", album.getGoogleDriveId()), Image.class);
       // albumRepository.save(album);
        return image;
    }

    @Override
    public List<Image> retrieveAll(String albumGDriveId, String userId) {
        return imageRepository.findByAlbumGoogleIdAndCreatedByAndActive(albumGDriveId,userId,true);
    }

    @Override
    public List<Image> retrieveAllImages(String albumGDriveId) {
        return imageRepository.findByAlbumGoogleIdAndActive(albumGDriveId,true);
    }

    @Override
    public List<Image> retrieveInactiveImages(String albumGDriveId, Boolean active) {
        return imageRepository.findByAlbumGoogleIdAndActive(albumGDriveId,false);
    }

    @Override
    public List<Image> retrieveAll(String userId) {
        return imageRepository.findByCreatedByAndActive(userId,true);
    }

    @Override
    public List<Image> retrieveAll() {
        return imageRepository.findByActive(true);
    }

    @Override
    public Image retrieveImageDetails(String googleId) throws Exception{
        Image image = imageRepository.findByGoogleDriveId(googleId);
        if(image == null){
            throw new Exception("Image not found");
        }
        return image;
    }

    @Override
    public void delete(String googleDriveId, String userId) {
        mongoTemplate.updateFirst(query(where("googleDriveId").is(googleDriveId)),
                update("active", false), Image.class);
        // TODO: Jyoti Call google drive API to delete from there too
    }

    @Override
    public Long deleteAlbumImages(String albumGoogleId, String userId) {

        Query query = new Query().addCriteria(new Criteria("albumGoogleId").is(albumGoogleId));
        query.addCriteria(new Criteria("active").is(true));
        Update update = new Update().set("active", false);
        update.set("modifiedBy",userId);
        update.set("modifiedDate", Instant.now());
        UpdateResult result = mongoTemplate.updateMulti(query,update, Image.class);

        log.info(" Deleted image count "+result.getModifiedCount());

        // TODO: Jyoti Call google drive API to delete from there too
        return result.getModifiedCount();
    }

    @Override
    public Image updateImage(ImageRequest request, String googleDriveId, String userId) {

        Query query = new Query().addCriteria(new Criteria("googleDriveId").is(googleDriveId));
        Update update = new Update().set("name", request.getName());
        update.set("modifiedBy",userId);
        update.set("modifiedDate", Instant.now());
        mongoTemplate.updateFirst(query, update, Image.class);

        Image a = imageRepository.findByGoogleDriveId(googleDriveId);

        ResponseEntity<Image> responseEntity = googleDriveServiceRestTemplate.put(baseUrl+"/image",a,Image.class);
        return responseEntity.getBody();
    }

    @Override
    public List<Image> search(SearchImageRequest request, String albumId, String userId) throws ParseException {
        String name = request.getName();
        String startCreatedDate = request.getStartCreatedDate();
        String startModifiedDate = request.getStartModifiedDate();
        Query query = new Query();
        query.addCriteria(Criteria.where("active").is(true));
        query.addCriteria(Criteria.where("createdBy").is(userId));
        query.addCriteria(Criteria.where("albumGoogleId").is(albumId));

        if(name!=null){
            query.addCriteria(Criteria.where("name").regex(".*"+name+".*"));
        }

        if(startCreatedDate != null){
            query.addCriteria(Criteria.where("createdDate").gte(DateUtil.convert(startCreatedDate))
                    .lte(request.getEndCreatedDate() != null ?
                            DateUtil.convert(request.getEndCreatedDate()) : Instant.now()));
        }

        if(startModifiedDate != null){
            query.addCriteria(Criteria.where("modifiedDate").gte(DateUtil.convert(startModifiedDate))
                    .lte(request.getEndModifiedDate() != null ?
                            DateUtil.convert(request.getEndModifiedDate()) : Instant.now()));
        }
        List<Image>  images = mongoTemplate.find(query,Image.class);
        return images;
    }

}
