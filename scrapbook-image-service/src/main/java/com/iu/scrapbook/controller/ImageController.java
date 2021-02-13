package com.iu.scrapbook.controller;

import com.google.api.services.drive.model.File;
import com.iu.scrapbook.document.Image;
import com.iu.scrapbook.repository.ImageRepository;
import com.iu.scrapbook.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;


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

    @Autowired
    private ImageRepository imageRepository;

    @PostMapping(path ="/upload",consumes = "multipart/form-data")
    public ResponseEntity<Image> create(@RequestParam("file") MultipartFile file,
                                        @RequestParam("user") String userId){

       ResponseEntity<Image> responseEntity = null;
        Image image = null;
        try {
            image = imageService.uploadImage(file,userId, null);
            responseEntity = new ResponseEntity<Image>(image,HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
          return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return responseEntity;
    }
    
//    @GetMapping
//    public ResponseEntity<List<Image>> create(){
//        return ResponseEntity.ok(imageRepository.findAll());
//    }
    
}
