package com.iu.scrapbook.controller;

import com.iu.scrapbook.document.Image;
import com.iu.scrapbook.repository.ImageRepository;
import com.iu.scrapbook.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping
    public ResponseEntity<Image> create(@RequestBody Image image){
        return ResponseEntity.ok(imageService.create(image));
    }
    
//    @GetMapping
//    public ResponseEntity<List<Image>> retrieve(){
//        return ResponseEntity.ok(imageRepository.findAll());
//    }
    
}
