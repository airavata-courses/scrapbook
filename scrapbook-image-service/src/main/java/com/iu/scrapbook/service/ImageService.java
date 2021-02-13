package com.iu.scrapbook.service;

import com.google.api.services.drive.model.File;
import com.iu.scrapbook.document.Image;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author jbhushan
 */
public interface ImageService {

    public Image uploadImage(MultipartFile image, String userId, String albumName) throws Exception;
}
