package com.iu.scrapbook.service;

import com.iu.scrapbook.dto.Image;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author jbhushan
 */
public interface GoogleDriveService {

    public Image uploadImage(MultipartFile image, String userId, String albumName) throws Exception;
}
