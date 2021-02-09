package com.iu.scrapbook;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.mongo.MongoDataAutoConfiguration;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;

/**
 * @author jbhushan
 */
@SpringBootApplication
//@SpringBootApplication(exclude = {MongoAutoConfiguration.class, MongoDataAutoConfiguration.class})
public class ScrapbookImageServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ScrapbookImageServiceApplication.class, args);
	}

}
