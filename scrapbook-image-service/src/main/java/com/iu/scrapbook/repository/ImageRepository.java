package com.iu.scrapbook.repository;

import com.iu.scrapbook.document.Image;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * @author jbhushan
 */
@Repository
public interface ImageRepository extends MongoRepository<Image, String> {

    List<Image> findByCreatedByAndActive(String createdBy,Boolean active);

    List<Image> findByActive(Boolean active);

    Image save(Image image);


    Image findByGoogleDriveIdAndCreatedBy(String id, String userId);

    List<Image> findByAlbumGoogleDriveIdAndCreatedByAndActive(String gId, String createdBy,Boolean active);
}
