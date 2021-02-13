package com.iu.scrapbook.service;

import com.iu.scrapbook.document.Image;
import com.iu.scrapbook.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * This service is responsible for communicating for google drive and MongoDB
 *
 * @author jbhushan
 */
@Component
public class ImageServiceImpl implements ImageService{


    @Autowired
    private ImageRepository imageRepository;

    @Override
    public Image create(Image image) {
        image =   imageRepository.save(image);
        return image;
    }

}
