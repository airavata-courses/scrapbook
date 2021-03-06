package com.iu.scrapbook.repository;

import com.iu.scrapbook.document.Album;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * @author jbhushan
 */
@Repository
public interface AlbumRepository extends MongoRepository<Album, String> {

    List<Album> findByCreatedByAndActive(String createdBy, Boolean active);

    List<Album> findByActive(Boolean active);

    Album findByGoogleDriveId(String id);

    Album findByGoogleDriveIdAndCreatedBy(String googleDriveId, String userId);

    List<Album> findByNameAndCreatedBy(String name, String userId);

    List<Album> findByCollaboratorsIn(String userId);

}
