package com.iu.scrapbook.controller;

import com.iu.scrapbook.document.Album;
import com.iu.scrapbook.document.Image;
import com.iu.scrapbook.dto.CreateAlbumRequest;
import com.iu.scrapbook.service.AlbumService;
import com.iu.scrapbook.service.ImageService;
import com.iu.scrapbook.exception.GoogleDriveException;
import io.swagger.v3.oas.annotations.Operation;
import lombok.extern.slf4j.Slf4j;
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
@RequestMapping("/album")
@CrossOrigin(origins = "*",allowedHeaders = "*")
@Slf4j
public class AlbumController {

    @Autowired
    private AlbumService albumService;

    @Autowired
    private ImageService imageService;

    /**
     *
     * @param album
     * @return album created
     */
    @Operation(summary = "Create album to database", description = "This API is responsible for creating album " +
            "into database. It stores all information related to album ")
  //  @PostMapping
    public ResponseEntity<Album> create(@RequestBody Album album){
        return ResponseEntity.status(HttpStatus.CREATED).body(albumService.save(album));
    }


    @Operation(summary = "Create album to database and in google drive", description = "This API is responsible for creating album " +
            "into database. It stores all information related to album ")
    @PostMapping
    public ResponseEntity<Album> create(@RequestBody CreateAlbumRequest createAlbumRequest,
                                        @RequestParam("userid") String userId){
        log.info("Request for creating album "+createAlbumRequest.getName());
        ResponseEntity<Album> responseEntity = null;
        try {
            Album album = albumService.createAlbum(createAlbumRequest,userId);
            responseEntity = ResponseEntity.status(HttpStatus.CREATED).body(album);
        } catch (GoogleDriveException e) {
            log.error("Exception in google drive service: "+e.getMessage());
            e.printStackTrace();
            responseEntity = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return responseEntity;
    }

    @Operation(summary = "update album name/ description to database", description = "This API is responsible for updating album details" +
            "into database. It stores all information related to album ")
    @PutMapping(path = "/{googleDriveId}")
    public ResponseEntity<Album> update(@RequestBody Album album, @PathVariable String googleDriveId,@RequestParam("userid") String userId){
        return ResponseEntity.ok(albumService.updateAlbum(album,googleDriveId,userId));
    }


    @Operation(summary = "Retrieve all active albums from database", description = "This API is responsible for " +
            "retrieving all active albums from the database.")
    @GetMapping(path="/all")
    public ResponseEntity<List<Album>> retrieveAll(){
        log.info("Request for retrieving all active album ");
        return ResponseEntity.status(HttpStatus.OK).body(albumService.retrieveALl());
    }

    @Operation(summary = "Retrieve all active albums from database for given userId", description = "This API is responsible for " +
            "retrieving all active albums for given user from the database.")
    @GetMapping
    public ResponseEntity<List<Album>> retrieveAll(@RequestParam("userid") String userId){
        log.info("Request for creating album for user "+userId);
        return ResponseEntity.status(HttpStatus.OK).body(albumService.retrieveALl(userId));
    }


    @Operation(summary = "Retrieve album from database for given userId and googleDriveId", description = "This API is responsible for " +
            "retrieving album for given user and and googleDriveId from the database.")
    @GetMapping("/{googledriveid}")
    public ResponseEntity<Album> retrieveAlbum(@PathVariable("googledriveid") String googleDriveId){
        return ResponseEntity.status(HttpStatus.OK).
                body(albumService.retrieveAlbum(googleDriveId));
    }

    /**
     *
     * @return album created
     */
    @Operation(summary = "Retrieve all images from database for given album and userId", description = "This API is responsible for " +
            "retrieving all images for given user and album from the database.")
    @GetMapping("/{googledriveid}/image")
    public ResponseEntity<List<Image>> retrieveAllImages(@PathVariable("googledriveid") String googleDriveId){
        return ResponseEntity.status(HttpStatus.OK).
                body(imageService.retrieveAllImages(googleDriveId));
    }

    @Operation(summary = "Delete all albums from database for given userId", description = "This API is responsible for " +
            "deleting all albums for given user from the database. It is soft. It sets all albums as inactive")
    @DeleteMapping
    public ResponseEntity<List<Album>> delete(@RequestParam("userid") String userId){
        albumService.deleteAll(userId);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "Delete album and its images from database for given googleDriveId", description = "This API is responsible for " +
            "deleting album and its images for given googleDriveId from the database. It is soft. It sets all albums/images as inactive and return total count of image being deleted.")
    @DeleteMapping(value = "/{googledriveid}")
    public ResponseEntity<Long> deleteById(@PathVariable("googledriveid") String googleDriveId, @RequestParam("userid") String userId){
        Long count = albumService.deleteByGoogleDriveId(googleDriveId,userId);
        return ResponseEntity.ok(count);
    }
}
