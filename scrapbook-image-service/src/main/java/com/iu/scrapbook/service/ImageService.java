package com.iu.scrapbook.service;

import com.iu.scrapbook.document.Image;

import java.util.List;
import java.util.MissingResourceException;

/**
 * @author jbhushan
 */
public interface ImageService {

    Image create(Image image);

    Image create(Image image, String albumId) throws MissingResourceException;

    List<Image> retrieveAll(String albumGDriveId, String userId);

    List<Image> retrieveAll(String userId);

    List<Image> retrieveAll();

    Image retrieveImageDetails(String googleId, String userId) throws Exception;

    void delete(String googleId, String userId);


}
