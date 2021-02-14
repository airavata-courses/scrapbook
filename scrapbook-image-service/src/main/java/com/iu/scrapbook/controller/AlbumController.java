package com.iu.scrapbook.controller;

import com.iu.scrapbook.document.Album;
import com.iu.scrapbook.service.AlbumService;
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
@RequestMapping("/album")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class AlbumController {

    @Autowired
    private AlbumService albumService;

    /**
     *
     * @param album
     * @return album created
     */
    @Operation(summary = "Create album to database", description = "This API is responsible for creating album " +
            "into database. It stores all information related to album ")
    @PostMapping
    public ResponseEntity<Album> create(@RequestBody Album album){
        return ResponseEntity.status(HttpStatus.CREATED).body(albumService.save(album));
    }

    /**
     *
     * @param album
     * @return album updated
     */
    @Operation(summary = "update album information to database", description = "This API is responsible for updating album details" +
            "into database. It stores all information related to album ")
    @PutMapping
    public ResponseEntity<Album> update(@RequestBody Album album){
        return ResponseEntity.ok(albumService.save(album));
    }

    /**
     *
     * @return album created
     */
    @Operation(summary = "Retrieve all active albums from database for given userId", description = "This API is responsible for " +
            "retrieving all active albums for given user from the database.")
    @GetMapping
    public ResponseEntity<List<Album>> retrieveAll(@RequestParam("userid") String userId){
        return ResponseEntity.status(HttpStatus.CREATED).body(albumService.retrieveALl(userId));
    }

    @Operation(summary = "Delete all albums from database for given userId", description = "This API is responsible for " +
            "deleting all albums for given user from the database. It is soft. It sets all albums as inactive")
    @DeleteMapping
    public ResponseEntity<List<Album>> delete(@RequestParam("userid") String userId){
        albumService.deleteAll(userId);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "Delete album from database for given googleDriveId", description = "This API is responsible for " +
            "deleting album for given googleDriveId from the database. It is soft. It sets all albums as inactive")
    @DeleteMapping(value = "/{googleDriveId}")
    public ResponseEntity<List<Album>> deleteById(@PathVariable("googleDriveId") String googleDriveId){
        albumService.deleteByGoogleDriveId(googleDriveId);
        return ResponseEntity.ok().build();
    }
    
}
