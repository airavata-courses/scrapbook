package com.iu.scrapbook.controller;

import com.iu.scrapbook.document.Image;
import com.iu.scrapbook.service.ImageService;
import io.swagger.v3.oas.annotations.Operation;
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
@CrossOrigin(origins = "*",allowedHeaders = "*")
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

    @Operation(summary = "Save image against given album into database", description = "This API is responsible for saving image " +
            "into database against given album. It stores all information related to image ")
    @PostMapping("/{albumgoogleid}")
    public ResponseEntity<Image> uploadInAlbum(@RequestBody Image image, @PathVariable("albumgoogleid") String albumGoogleId){
        ResponseEntity<Image> responseEntity = null;
        try {
            image = imageService.create(image,albumGoogleId);
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
    @Operation(summary = "Retrieve all images for given user", description = "This API is responsible for retrieving" +
            "all images from database for given user.")
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Image>> retrieve(@RequestParam("userid") String userId){
        return ResponseEntity.ok(imageService.retrieveAll(userId));
    }

    /**
     * @return list of images
     */
    @Operation(summary = "Retrieve all active images", description = "This API is responsible for retrieving" +
            "all active images from database.")
    @GetMapping(path="/all", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Image>> retrieveAll(){
        return ResponseEntity.ok(imageService.retrieveAll());
    }

    /**
     * @return image
     */
    @Operation(summary = "Retrieve image for given user and googleDriveId", description = "This API is responsible for retrieving" +
            "image from database for given user and googleDriveId.")
    @GetMapping(path="/{googleid}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Image> retrieveImage(@PathVariable("googleid") String googleId){
        ResponseEntity<Image> responseEntity = null;
        try {
            Image image = imageService.retrieveImageDetails(googleId);
            responseEntity = ResponseEntity.ok(image);
        }catch(Exception e){
            responseEntity = ResponseEntity.notFound().build();
        }return responseEntity;
    }

    @Operation(summary = "Delete image for given user and google id", description = "This API is responsible for deleting" +
            "image from database for given user and googleDriveId.")
    @DeleteMapping(path="/{googleid}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Boolean> delete(@PathVariable("googleid") String googleId, @RequestParam("userid") String userId){
        imageService.delete(googleId, userId);
        return ResponseEntity.ok(true);
    }
    
}
