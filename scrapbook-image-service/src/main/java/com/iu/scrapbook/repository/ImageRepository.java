package com.iu.scrapbook.repository;

import com.iu.scrapbook.document.Image;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * @author jbhushan
 */
public interface ImageRepository extends MongoRepository<Image, Long> {
}
