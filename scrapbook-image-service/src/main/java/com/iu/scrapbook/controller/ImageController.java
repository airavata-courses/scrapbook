package com.iu.scrapbook.controller;

import com.google.api.services.drive.model.File;
import com.iu.scrapbook.document.Image;
import com.iu.scrapbook.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

/**
 * This controller contains all APIs related to image
 *
 * @author jbhushan
 */
@RestController
@RequestMapping("/image")
public class ImageController {

    @Autowired
    private ImageService imageService;

    @PostMapping(path ="/upload",consumes = "multipart/form-data")
    public ResponseEntity<Image> create(@RequestParam("file") MultipartFile file){
        Image image = null;
        try {
            image = imageService.uploadImage(file);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntity.ok(image);
    }
}
