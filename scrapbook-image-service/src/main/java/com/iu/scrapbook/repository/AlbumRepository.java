package com.iu.scrapbook.repository;

import com.iu.scrapbook.document.Album;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


/**
 * @author jbhushan
 */
@Repository
public interface AlbumRepository extends MongoRepository<Album, String> {

}
