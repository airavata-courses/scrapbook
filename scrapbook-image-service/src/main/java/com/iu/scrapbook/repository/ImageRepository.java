package com.iu.scrapbook.repository;

import com.iu.scrapbook.document.Image;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


/**
 * @author jbhushan
 */
@Repository
public interface ImageRepository extends MongoRepository<Image, String> {
}
