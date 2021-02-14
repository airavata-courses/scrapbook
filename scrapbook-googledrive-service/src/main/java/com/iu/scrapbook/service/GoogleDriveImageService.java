package com.iu.scrapbook.service;

import com.iu.scrapbook.dto.Image;
import org.springframework.web.multipart.MultipartFile;

import java.io.OutputStream;

/**
 * @author jbhushan
 */
public interface GoogleDriveImageService {

    Image uploadImage(MultipartFile image, String userId, String albumName) throws Exception;

    OutputStream downloadImage(String googleId, String userId) throws Exception;

}