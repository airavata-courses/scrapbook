package com.iu.scrapbook.service;

import com.iu.scrapbook.document.Album;
import com.iu.scrapbook.document.Image;
import com.iu.scrapbook.dto.CreateAlbumRequest;
import com.iu.scrapbook.exception.GoogleDriveException;

import java.util.List;

/**
 * @author jbhushan
 */
public interface AlbumService {

    Album save(Album album);

    Album updateAlbum(Album album, String googleDriveId, String userId);

    Album createAlbum(CreateAlbumRequest CreateAlbumRequest, String userId) throws GoogleDriveException;

    List<Album> retrieveALl(String userId);

    Album retrieveAlbum(String googleDriveId);

    List<Album> retrieveALl();

    void deleteAll(String userId);

    void deleteByGoogleDriveId(String id);

    Album addImageToAlbum(Album album,Image image);

}
