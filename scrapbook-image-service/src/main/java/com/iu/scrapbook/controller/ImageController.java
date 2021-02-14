package com.iu.scrapbook.controller;

import com.iu.scrapbook.document.Image;
import com.iu.scrapbook.service.ImageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.MissingResourceException;


/**
 * This controller contains all APIs related to image
 *
 * @author jbhushan
 */
@RestController
@Slf4j
@RequestMapping("/image")
public class ImageController {

    @Autowired
    private  ImageService imageService;

    /**
     *
     * @param image
     * @return
     */
    @PostMapping
    public ResponseEntity<Image> create(@RequestBody Image image){
        return ResponseEntity.status(HttpStatus.CREATED).body(imageService.create(image));
    }

    @PostMapping("/{album}")
    public ResponseEntity<Image> uploadInAlbum(@RequestBody Image image, @PathVariable("album") String albumId){
        ResponseEntity<Image> responseEntity = null;
        try {
            image = imageService.create(image,albumId);
            responseEntity = ResponseEntity.ok(image);
        } catch (MissingResourceException e){
            log.error(e.getMessage());
            responseEntity =  ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(image);
        }
        return responseEntity;
    }

    /**
     * @return list of images
     */
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Image>> retrieve(@RequestParam("user") String userId){
        return ResponseEntity.ok(imageService.retrieveAll(userId));
    }
    
}
