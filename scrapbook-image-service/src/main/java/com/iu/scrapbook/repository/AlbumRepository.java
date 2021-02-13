package com.iu.scrapbook.repository;

import com.iu.scrapbook.document.Album;
import com.iu.scrapbook.document.Image;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * @author jbhushan
 */
@Repository
public interface AlbumRepository extends MongoRepository<Album, String> {

    List<Album> findByCreatedBy(String createdBy);
}
