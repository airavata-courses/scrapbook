package com.iu.scrapbook.controller;

import com.iu.scrapbook.document.Album;
import com.iu.scrapbook.service.AlbumService;
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
public class AlbumController {

    @Autowired
    private AlbumService albumService;

    /**
     *
     * @param album
     * @return album created
     */
    @PostMapping
    public ResponseEntity<Album> create(@RequestBody Album album){
        return ResponseEntity.status(HttpStatus.CREATED).body(albumService.create(album));
    }

    /**
     *
     * @return album created
     */
    @GetMapping
    public ResponseEntity<List<Album>> retrieveAll(@RequestParam("user") String userId){
        return ResponseEntity.status(HttpStatus.CREATED).body(albumService.retrieveALl(userId));
    }
    
}
