package com.iu.scrapbook.service;

import com.google.api.services.drive.model.File;
import com.iu.scrapbook.config.GoogleDriveConfig;
import com.iu.scrapbook.dto.Album;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.time.Instant;

/**
 * @author jbhushan
 */
@Component
public class GoogleDriveAlbumServiceImpl implements GoogleDriveAlbumService {

    @Autowired
    private GoogleDriveConfig googleDriveConfig;

    @Autowired
    private ImageServiceRestTemplate imageServiceRestTemplate;

    @Override
    public Album createAlbum(String albumName, String userId) throws Exception{

        File fileMetadata = new File();
        fileMetadata.setName(albumName);
        fileMetadata.setMimeType("application/vnd.google-apps.folder");
        fileMetadata = googleDriveConfig.getDrive().files().create(fileMetadata).setFields("*").execute();

        Album album = Album.builder().googleDriveId(fileMetadata.getId()).name(fileMetadata.getName()).size(fileMetadata.getSize())
                .createdBy(userId).modifiedBy(userId).modifiedDate(Instant.ofEpochMilli(fileMetadata.getModifiedTime().getValue()))
                .createdDate(Instant.ofEpochMilli(fileMetadata.getCreatedTime().getValue())).build();

        ResponseEntity<Album> response = imageServiceRestTemplate.post("/album",album, Album.class);
        return response.getBody();
    }

    @Override
    public Album createAlbum(Album album, String userId) throws Exception {
        File fileMetadata = new File();
        fileMetadata.setName(album.getName());
        fileMetadata.setMimeType("application/vnd.google-apps.folder");
        fileMetadata = googleDriveConfig.getDrive().files().create(fileMetadata).setFields("*").execute();

        album.setGoogleDriveId(fileMetadata.getId());
        album.setCreatedDate(Instant.ofEpochMilli(fileMetadata.getCreatedTime().getValue()));
        album.setModifiedDate(Instant.ofEpochMilli(fileMetadata.getModifiedTime().getValue()));
        album.setSize(fileMetadata.getSize());
        return album;
    }

    @Override
    public Album updateAlbum(Album album) throws Exception {
        File fileMetadata = new File();
        fileMetadata.setName(album.getName());
        fileMetadata.setDescription(album.getDescription());
        fileMetadata.setMimeType("application/vnd.google-apps.folder");
        googleDriveConfig.getDrive().files().update(album.getGoogleDriveId(), fileMetadata).execute();
        return album;
    }
}
