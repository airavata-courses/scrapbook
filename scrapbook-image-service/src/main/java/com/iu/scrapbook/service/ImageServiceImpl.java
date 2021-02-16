package com.iu.scrapbook.service;

import com.iu.scrapbook.document.Album;
import com.iu.scrapbook.document.Image;
import com.iu.scrapbook.repository.AlbumRepository;
import com.iu.scrapbook.repository.ImageRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

import java.rmi.NoSuchObjectException;
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
        image.setAlbum(album);
        image = imageRepository.insert(image);
        // update album
        album = albumService.addImageToAlbum(album,image);
        return image;
    }

    @Override
    public List<Image> retrieveAll(String albumGDriveId, String userId) {
        //imageRepository.
        return imageRepository.findByAlbumGoogleDriveIdAndCreatedByAndActive(albumGDriveId,userId,true);
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
    public Image retrieveImageDetails(String googleId, String userId) throws Exception{
        Image image = imageRepository.findByGoogleDriveIdAndCreatedBy(googleId,userId);
        if(image == null){
            throw new Exception("Image not found");
        }
        return image;
    }

    @Override
    public void delete(String googleDriveId, String userId) {
        mongoTemplate.updateFirst(query(where("googleDriveId").is(googleDriveId)),
                update("active", false), Image.class);
    }

}
