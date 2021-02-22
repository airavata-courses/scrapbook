package com.iu.scrapbook;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.client.RestTemplate;

/**
 * @author jbhushan
 */
@SpringBootApplication
@EnableMongoRepositories(basePackages = "com.iu.scrapbook.repository")
//@SpringBootApplication(exclude = {MongoAutoConfiguration.class, MongoDataAutoConfiguration.class})
public class ScrapbookImageServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ScrapbookImageServiceApplication.class, args);
	}

	@Bean
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}
}
