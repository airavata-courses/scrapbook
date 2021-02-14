package com.iu.scrapbook.service;

import com.iu.scrapbook.document.Album;
import com.iu.scrapbook.document.Image;

import java.util.List;

/**
 * @author jbhushan
 */
public interface AlbumService {

    Album save(Album album);

    List<Album> retrieveALl(String userId);

    void deleteAll(String userId);

    void deleteByGoogleDriveId(String id);

    Album addImageToAlbum(Album album,Image image);

}
