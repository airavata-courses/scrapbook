package com.iu.scrapbook.service;

import com.iu.scrapbook.dto.Album;

/**
 * @author jbhushan
 */
public interface GoogleDriveAbumService {

    Album createAlbum(String albumName, String userId) throws Exception;
}
