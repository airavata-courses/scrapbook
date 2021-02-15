package com.iu.scrapbook.controller;

import com.iu.scrapbook.document.Album;
import com.iu.scrapbook.document.Image;
import com.iu.scrapbook.repository.AlbumRepository;
import com.iu.scrapbook.repository.ImageRepository;
import com.iu.scrapbook.service.AlbumService;
import com.iu.scrapbook.service.ImageService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


/**
 * This controller contains all APIs related to image
 *
 * @author jbhushan
 */
@RestController
@RequestMapping("/test/")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class TestController {



    @Autowired
    private AlbumRepository albumRepository;

    @Autowired
    private ImageRepository imageRepository;


    @Operation(summary = "Delete all album from database", description = "This API is responsible for " +
            "deleting all albums. It is soft. It sets all albums as inactive")
    @DeleteMapping("album")
    public ResponseEntity deleteAll(){
        albumRepository.deleteAll();
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "Delete all images from database", description = "This API is responsible for " +
            "deleting all images. It is soft. It sets all albums as inactive")
    @DeleteMapping("image")
    public ResponseEntity deleteAllImages(){
        imageRepository.deleteAll();
        return ResponseEntity.ok().build();
    }
    
}
