package com.iu.scrapbook.service;

import com.iu.scrapbook.document.Album;
import com.iu.scrapbook.document.Image;
import com.iu.scrapbook.dto.CreateAlbumRequest;
import com.iu.scrapbook.dto.SearchAlbumRequest;
import com.iu.scrapbook.exception.GoogleDriveException;
import com.iu.scrapbook.repository.AlbumRepository;
import com.iu.scrapbook.template.GoogleDriveServiceRestTemplate;
import com.iu.scrapbook.util.DateUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import java.text.ParseException;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

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
public class AlbumServiceImpl implements AlbumService{

    @Autowired
    private AlbumRepository albumRepository;

    @Autowired
    private ImageService imageService;

    @Autowired
    private GoogleDriveServiceRestTemplate googleDriveServiceRestTemplate;

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private MongoOperations mongoOperations;

    @Value("${scrapbook.googledrive.service.baseurl}")
    private String baseUrl;

    @Override
    public Album save(Album album) {
        album.setActive(true);
        if(album.getId() == null){
            return albumRepository.save(album);
        } else {
            Optional<Album> a = albumRepository.findById(album.getId());
            // Todo: jyoti <Edit>
        }
      return null;
    }

    @Override
    public Album updateAlbum(Album album, String googleDriveId, String userId) {

        Query query = new Query().addCriteria(new Criteria("googleDriveId").is(googleDriveId));
        Update update = new Update().set("name", album.getName());
        update.set("description",album.getDescription());
        update.set("modifiedBy",userId);
        update.set("modifiedDate", Instant.now());
        mongoOperations.updateFirst(query, update, Album.class);

        Album a = albumRepository.findByGoogleDriveId(googleDriveId);

        ResponseEntity<Album> responseEntity = googleDriveServiceRestTemplate.put(baseUrl+"/album",a,Album.class);
        return responseEntity.getBody();
    }

    @Override
    public Album createAlbum(CreateAlbumRequest request, String userId) throws GoogleDriveException {
        List<Album> albums = albumRepository.findByNameAndCreatedBy(request.getName(),userId);
        String albumName = null;
        if(albums.size() > 0){
            albumName = request.getName() +"("+albums.size()+")";
        }

        Album album = Album.builder().name(albumName == null?request.getName():albumName).active(true)
                .size(0).description(request.getDescription()).createdBy(userId).modifiedBy(userId).build();

        //adding the query params to the URL
        UriComponentsBuilder uriBuilder = UriComponentsBuilder.fromHttpUrl(baseUrl+"/album")
                .queryParam("userid", userId);
        ResponseEntity<Album> response = googleDriveServiceRestTemplate.post(uriBuilder.toUriString(),album,Album.class);

        if(response.getStatusCode().equals(HttpStatus.CREATED)){
            album = mongoTemplate.insert(response.getBody());
        } else {
            log.error(" Exception from google drive service. Album not created");
            throw new GoogleDriveException();
        }
        return album;
    }

    @Override
    public List<Album> retrieveALl(String userId) {
        return albumRepository.findByCreatedByAndActive(userId,true);
    }

    @Override
    public Album retrieveAlbum(String googleDriveId) {
        return albumRepository.findByGoogleDriveId(googleDriveId);
    }

    @Override
    public List<Album> retrieveALl() {
        return albumRepository.findByActive(true);
    }

    @Override
    public List<Album> retrieveSharedAlbum(String userId) {
        return albumRepository.findByActiveAndCollaboratorsIn(true,userId);
    }

    @Override
    public void deleteAll(String userId) {
        mongoTemplate.updateMulti(query(where("createdBy").is(userId)),
                update("active", false), Album.class);
    }

    @Override
    public Long deleteByGoogleDriveId(String googleDriveId, String userId) {
        mongoTemplate.updateFirst(query(where("googleDriveId").is(googleDriveId)),
                update("active", false), Album.class);

       return imageService.deleteAlbumImages(googleDriveId,userId);
    }

    @Override
    public Album addImageToAlbum(Album album, Image image) {
       // album= albumRepository.findByGoogleDriveId(googleDriveId);
        List<Image> images = null;
        if(images == null){
            images = new ArrayList<Image>();
        }
        images.add(image);
        mongoTemplate.updateFirst(query(where("googleDriveId").is(album.getGoogleDriveId())),
                update("images", images), Album.class);
        return album;
    }

    @Override
    public Album addCollaborators(String googleDriveId, Set<String> collaboratorIds, String userId) {
       Album album = albumRepository.findByGoogleDriveId(googleDriveId);
        Set<String> collaborators = album.getCollaborators();
        collaborators.addAll(collaboratorIds);

        return updateCollaborator(googleDriveId, userId, album, collaborators);
    }

    @Override
    public Album addCollaborator(String googleDriveId, String collaboratorId, String userId) {

        Album album = albumRepository.findByGoogleDriveId(googleDriveId);
        Set<String> collaborators = album.getCollaborators();
        collaborators.add(collaboratorId);
        return updateCollaborator(googleDriveId, userId, album, collaborators);
    }

    @Override
    public Album removeCollaborators(String googleDriveId, Set<String> collaboratorIds, String userId) {
        Album album = albumRepository.findByGoogleDriveId(googleDriveId);
        Set<String> collaborators = album.getCollaborators();
        collaborators.removeAll(collaboratorIds);

        return updateCollaborator(googleDriveId, userId, album, collaborators);
    }

    @Override
    public List<Album> retrieveDeletedAlbum(String userId) {
        return albumRepository.findByCreatedByAndActive(userId,false);
    }

    @Override
    public List<Album> search(SearchAlbumRequest request, String userId) throws ParseException {
        String name = request.getName();
        String startCreatedDate = request.getStartCreatedDate();
        String startModifiedDate = request.getStartModifiedDate();
        Query query = new Query();
        query.addCriteria(Criteria.where("active").is(true));
        query.addCriteria(Criteria.where("createdBy").is(userId));

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
        List<Album>  albums = mongoTemplate.find(query,Album.class);
        return albums;
    }

    @Override
    public Album removeCollaborator(String googleDriveId, String collaboratorId, String userId) {
        Album album = albumRepository.findByGoogleDriveId(googleDriveId);
        Set<String> collaborators = album.getCollaborators();
        collaborators.remove(collaboratorId);
        return updateCollaborator(googleDriveId, userId, album, collaborators);
    }

    private Album updateCollaborator(String googleDriveId, String userId, Album album, Set<String> collaborators) {
        Query query = new Query().addCriteria(new Criteria("googleDriveId").is(googleDriveId));
        Update update = new Update();
        update.set("modifiedBy", userId);
        update.set("modifiedDate", Instant.now());
        update.set("collaborators", collaborators);
        mongoOperations.updateFirst(query, update, Album.class);
         return albumRepository.findByGoogleDriveId(googleDriveId);
    }

}
