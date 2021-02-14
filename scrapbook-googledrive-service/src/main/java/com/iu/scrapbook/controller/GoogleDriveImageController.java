package com.iu.scrapbook.controller;

import com.iu.scrapbook.dto.Image;
import com.iu.scrapbook.service.GoogleDriveImageService;
import io.swagger.v3.oas.annotations.Operation;
import org.apache.http.client.HttpResponseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.OutputStream;

/**
 * This controller contains all APIs related to image
 *
 * @author jbhushan
 */
@RestController
@RequestMapping("/image")
@CrossOrigin(origins = "*",allowedHeaders = "*", allowCredentials = "true")
public class GoogleDriveImageController {

    @Autowired
    private GoogleDriveImageService googleDriveImageService;

    @Operation(summary = "Upload image to google drive", description = "This API is responsible for uploading image " +
            "to google drive.")
    @PostMapping(path ="/upload",consumes = "multipart/form-data")
    public ResponseEntity<Image> create(@RequestParam("file") MultipartFile file,
                                        @RequestParam("userid") String userId){

       ResponseEntity<Image> responseEntity = null;
        Image image = null;
        try {
            image = googleDriveImageService.uploadImage(file,userId, null);
            responseEntity = new ResponseEntity<Image>(image,HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
          return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return responseEntity;
    }

    /**
     * @param file
     *          image to upload
     * @param userId
     *          logged in user id
     * @return Image object containing all required information
     */
    @Operation(summary = "Upload image to album", description = "This API is responsible for uploading image " +
            "to given album name on the google drive. It also communicates with image-service to update database i.e. MongoDB")
    @PostMapping(path ="/upload/{albumname}",consumes = "multipart/form-data")
    public ResponseEntity<Image> uploadImageToAlbum(@RequestParam("file") MultipartFile file,
                                                    @RequestParam("userid") String userId, @PathVariable("albumname") String album){

        ResponseEntity<Image> responseEntity = null;
        Image image = null;
        try {
            image = googleDriveImageService.uploadImage(file,userId, album);
            responseEntity = new ResponseEntity<Image>(image,HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return responseEntity;
    }

    @Operation(summary = "Download image from google drive", description = "This API is responsible for downloading image " +
            "for given googleDriveId from google drive.")
    @GetMapping(path="/{googledriveid}")
    public ResponseEntity<OutputStream> downloadImage(@PathVariable("googledriveid") String googleId, @RequestParam("user") String userId){
        ResponseEntity<OutputStream> responseEntity = null;
        try {
            responseEntity = ResponseEntity.ok(googleDriveImageService
                    .downloadImage(googleId,userId));
        }catch(Exception e){
            e.printStackTrace();
            responseEntity = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return responseEntity;
    }

    @Operation(summary = "Delete image from google drive", description = "This API is responsible for deleting image " +
            "for given googleDriveId from google drive. It communicates with image-service to set this image as inactive in database")
    @DeleteMapping(path="/{googledriveid}")
    public ResponseEntity<Boolean> deleteImage(@PathVariable("googledriveid") String googleId, @RequestParam("user") String userId){
        ResponseEntity<Boolean> responseEntity = null;
        try {
            responseEntity = ResponseEntity.ok(googleDriveImageService
                    .deleteImage(googleId,userId));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return responseEntity;
    }
    
}
