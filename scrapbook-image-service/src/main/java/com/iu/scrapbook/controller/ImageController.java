package com.iu.scrapbook.controller;

import com.iu.scrapbook.document.Image;
import com.iu.scrapbook.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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

    /**
     * @Operation
     *
     * @return flux of images
     */
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Image>> retrieve(@RequestParam("user") String userId){
        return ResponseEntity.ok(imageService.retrieveAll(userId));
    }
    
}
