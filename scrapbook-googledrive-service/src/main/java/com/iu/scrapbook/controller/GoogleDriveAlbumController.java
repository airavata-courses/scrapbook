package com.iu.scrapbook.controller;

import com.iu.scrapbook.dto.Album;
import com.iu.scrapbook.service.GoogleDriveAbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


/**
 * This controller contains all APIs related to album
 *
 * @author jbhushan
 */
@RestController
@RequestMapping("/album")
public class GoogleDriveAlbumController {

    @Autowired
    private GoogleDriveAbumService googleDriveAbumService;

    @PostMapping(path="/{name}")
    public ResponseEntity<Album> createAlbum(@PathVariable("name") String albumName,
                                        @RequestParam("user") String userId){

       ResponseEntity<Album> responseEntity = null;
        Album album = null;
        try {
            album = googleDriveAbumService.createAlbum(albumName,userId);
            responseEntity = new ResponseEntity<Album>(album,HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
          return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return responseEntity;
    }

//    @PostMapping(path ="/upload/{album}",consumes = "multipart/form-data")
//    public ResponseEntity<Image> uploadImageToAlbum(@RequestParam("file") MultipartFile file,
//                                                    @RequestParam("user") String userId, @PathVariable("album") String album){
//
//        ResponseEntity<Image> responseEntity = null;
//        Image image = null;
//        try {
//            image = googleDriveService.uploadImage(file,userId, album);
//            responseEntity = new ResponseEntity<Image>(image,HttpStatus.CREATED);
//        } catch (Exception e) {
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//        }
//        return responseEntity;
//    }

    
}