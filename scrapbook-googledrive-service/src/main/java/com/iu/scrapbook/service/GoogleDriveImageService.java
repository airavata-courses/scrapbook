package com.iu.scrapbook.service;

import com.iu.scrapbook.dto.Album;
import com.iu.scrapbook.dto.Image;
import org.springframework.web.multipart.MultipartFile;

import java.io.OutputStream;

/**
 * @author jbhushan
 */
public interface GoogleDriveImageService {

    Image uploadImage(MultipartFile image, String userId, String albumName) throws Exception;

    byte[] downloadImage(String googleId) throws Exception;

    Boolean deleteImage(String googleId, String userId) throws Exception;

    Image updateImage(Image image) throws Exception;

}