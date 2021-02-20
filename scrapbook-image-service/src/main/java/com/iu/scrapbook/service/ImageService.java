package com.iu.scrapbook.service;

import com.iu.scrapbook.document.Album;
import com.iu.scrapbook.document.Image;
import com.iu.scrapbook.dto.ImageRequest;

import java.util.List;
import java.util.MissingResourceException;

/**
 * @author jbhushan
 */
public interface ImageService {

    Image create(Image image);

    Image create(Image image, String albumId) throws MissingResourceException;

    List<Image> retrieveAll(String albumGDriveId, String userId);

    List<Image> retrieveAllImages(String albumGDriveId);

    List<Image> retrieveAll(String userId);

    List<Image> retrieveAll();

    Image retrieveImageDetails(String googleId) throws Exception;

    void delete(String googleId, String userId);

    Image updateImage(ImageRequest album, String googleDriveId, String userId);
}
