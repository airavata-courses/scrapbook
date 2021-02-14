package com.iu.scrapbook.service;

import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Update.update;
import static org.springframework.data.mongodb.core.query.Query.query;

import com.iu.scrapbook.document.Album;
import com.iu.scrapbook.document.Image;
import com.iu.scrapbook.repository.AlbumRepository;
import com.iu.scrapbook.repository.ImageRepository;
import com.mongodb.client.result.UpdateResult;
import com.mongodb.internal.bulk.UpdateRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

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
    private MongoTemplate mongoTemplate;

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
    public List<Album> retrieveALl(String userId) {
        return albumRepository.findByCreatedByAndActive(userId,true);
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
        List<Image> images = album.getImages();
        if(images == null){
            images = new ArrayList<Image>();
        }
        images.add(image);
        mongoTemplate.updateFirst(query(where("googleDriveId").is(album.getGoogleDriveId())),
                update("images", images), Album.class);
        return album;
    }


}
