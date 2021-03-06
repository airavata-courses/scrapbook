package com.iu.scrapbook.service;

import com.iu.scrapbook.document.Album;
import com.iu.scrapbook.document.Image;
import com.iu.scrapbook.dto.CreateAlbumRequest;
import com.iu.scrapbook.exception.GoogleDriveException;

import java.util.List;
import java.util.Set;

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

    List<Album> retrieveSharedAlbum(String userId);

    void deleteAll(String userId);

    Long deleteByGoogleDriveId(String id,  String userId);

    Album addImageToAlbum(Album album,Image image);

    Album addCollaborators(String googleDriveId, Set<String> collaboratorIds, String userid);

    Album addCollaborator(String googleDriveId, String collaboratorId, String userId);

    Album removeCollaborator(String googleDriveId, String collaboratorId, String userId);

    Album removeCollaborators(String googleDriveId, Set<String> collaboratorIds, String userId);
    List<Album> retrieveDeletedAlbum(String userId);

}
