package com.iu.scrapbook.service;

import com.iu.scrapbook.dto.Album;

/**
 * @author jbhushan
 */
public interface GoogleDriveAlbumService {

    Album createAlbum(String albumName, String userId) throws Exception;

    Album createAlbum(Album album, String userId) throws Exception;
}
