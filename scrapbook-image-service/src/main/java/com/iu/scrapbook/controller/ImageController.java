package com.iu.scrapbook.controller;

import com.iu.scrapbook.document.Image;
import com.iu.scrapbook.repository.ImageRepository;
import com.iu.scrapbook.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


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

    @PostMapping(path ="/save")
    public ResponseEntity<Image> create(@RequestBody Image image){

       ResponseEntity<Image> responseEntity = null;
//        Image image = null;
//        try {
//            image = imageService.uploadImage(file,userId, null);
//            responseEntity = new ResponseEntity<Image>(image,HttpStatus.CREATED);
//        } catch (Exception e) {
//            e.printStackTrace();
//          return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//        }
        return responseEntity;
    }
    
//    @GetMapping
//    public ResponseEntity<List<Image>> create(){
//        return ResponseEntity.ok(imageRepository.findAll());
//    }
    
}
