package com.iu.scrapbook.service;

import com.iu.scrapbook.document.Image;
import com.iu.scrapbook.repository.ImageRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

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

    @Override
    public Image create(Image image) {
        return imageRepository.save(image);
    }

    @Override
    public List<Image> retrieveAll(String userId) {
        return imageRepository.findByCreatedBy(userId);
    }

}
