package com.iu.scrapbook.service;

import com.iu.scrapbook.document.Album;
import com.iu.scrapbook.document.Image;
import com.iu.scrapbook.repository.AlbumRepository;
import com.iu.scrapbook.repository.ImageRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.MissingResourceException;

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
        albumService.addImageToAlbum(album,image);
        return image;
    }

    @Override
    public List<Image> retrieveAll(String userId) {
        return imageRepository.findByCreatedBy(userId);
    }

}
