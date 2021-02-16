package com.iu.scrapbook.service;

import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Update.update;
import static org.springframework.data.mongodb.core.query.Query.query;

import com.iu.scrapbook.document.Album;
import com.iu.scrapbook.document.Image;
import com.iu.scrapbook.dto.CreateAlbumRequest;
import com.iu.scrapbook.repository.AlbumRepository;
import com.iu.scrapbook.repository.ImageRepository;
import com.iu.scrapbook.service.exception.GoogleDriveException;
import com.iu.scrapbook.template.GoogleDriveServiceRestTemplate;
import com.mongodb.client.result.UpdateResult;
import com.mongodb.internal.bulk.UpdateRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
    private GoogleDriveServiceRestTemplate googleDriveServiceRestTemplate;

    @Autowired
    private MongoTemplate mongoTemplate;

    @Value("${scrapbook.googledrive.service.album.baseurl}")
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
    public Album createAlbum(CreateAlbumRequest request, String userId) throws GoogleDriveException {
        List<Album> albums = albumRepository.findByNameAndCreatedBy(request.getName(),userId);
        String albumName = null;
        if(albums.size() > 0){
            albumName = request.getName() +"("+albums.size()+")";
        }

        Album album = Album.builder().name(albumName == null?request.getName():albumName).active(true)
                .size(0).description(request.getDescription()).createdBy(userId).modifiedBy(userId).build();

        //adding the query params to the URL
        UriComponentsBuilder uriBuilder = UriComponentsBuilder.fromHttpUrl(baseUrl)
                .queryParam("userid", userId);
        ResponseEntity<Album> response = googleDriveServiceRestTemplate.post(uriBuilder.toUriString(),album,Album.class);

        if(response.getStatusCode().equals(HttpStatus.CREATED)){
            album = mongoTemplate.insert(response.getBody());
        } else {
            throw new GoogleDriveException();
        }
        return album;
    }

    @Override
    public List<Album> retrieveALl(String userId) {
        return albumRepository.findByCreatedByAndActive(userId,true);
    }

    @Override
    public Album retrieveAlbum(String googleDriveId, String userId) {
        return albumRepository.findByGoogleDriveIdAndCreatedBy(googleDriveId,userId);
    }

    @Override
    public List<Album> retrieveALl() {
        return albumRepository.findByActive(true);
    }

    @Override
    public void deleteAll(String userId) {
        mongoTemplate.updateMulti(query(where("createdBy").is(userId)),
                update("active", false), Album.class);
    }

    @Override
    public void deleteByGoogleDriveId(String googleDriveId) {
        mongoTemplate.updateFirst(query(where("googleDriveId").is(googleDriveId)),
                update("active", false), Album.class);
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


}
