package com.iu.scrapbook.service;

import com.iu.scrapbook.document.Image;

import java.util.List;

/**
 * @author jbhushan
 */
public interface ImageService {

    Image create(Image image);

    List<Image> retrieveAll(String userId);

}
