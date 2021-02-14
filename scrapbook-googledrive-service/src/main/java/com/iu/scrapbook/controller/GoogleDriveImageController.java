package com.iu.scrapbook.controller;

import com.iu.scrapbook.dto.Image;
import com.iu.scrapbook.service.GoogleDriveImageService;
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
public class GoogleDriveImageController {

    @Autowired
    private GoogleDriveImageService googleDriveImageService;

    @PostMapping(path ="/upload",consumes = "multipart/form-data")
    public ResponseEntity<Image> create(@RequestParam("file") MultipartFile file,
                                        @RequestParam("user") String userId){

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

    @PostMapping(path ="/upload/{album}",consumes = "multipart/form-data")
    public ResponseEntity<Image> uploadImageToAlbum(@RequestParam("file") MultipartFile file,
                                                    @RequestParam("user") String userId, @PathVariable("album") String album){

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
    
    @GetMapping(path="/{googleid}")
    public ResponseEntity<OutputStream> downloadImage(@PathVariable("googleid") String googleId, @RequestParam("user") String userId){
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

    @DeleteMapping(path="/{googleid}")
    public ResponseEntity<Boolean> deleteImage(@PathVariable("googleid") String googleId, @RequestParam("user") String userId){
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
