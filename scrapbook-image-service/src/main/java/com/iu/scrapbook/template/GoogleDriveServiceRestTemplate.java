package com.iu.scrapbook.template;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;

/**
 * This class is responsible for communicating with google drive servicw
 *
 * @author jbhushan
 */
@Component
public class GoogleDriveServiceRestTemplate {

    @Autowired
    private RestTemplate restTemplate;

//    @Value("${scrapbook.googledrive.service.baseurl}")
//    private String baseUrl;

    private HttpEntity<String> getHttpEntity(){
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        HttpEntity<String> entity = new HttpEntity<>(headers);
        return entity;
    }

    /**
     * This method is used for consuming get request from amadeus
     * @param url
     *          Url to consume
     * @param response
     *              response object type
     * @param <T>
     * @return response
     */
    public <T> ResponseEntity<T> get(String url, Class<T> response){
        return restTemplate.exchange(url,
                HttpMethod.GET,getHttpEntity(), response);
    }

    public <T> ResponseEntity<T> post(String url, T body, Class<T> response){
        return restTemplate.postForEntity(url,
                body, response);
    }

    public <T> ResponseEntity<T> put(String url, T body, Class<T> response){
        HttpEntity<T> request = new HttpEntity<T>(body);
        return restTemplate.exchange(url,HttpMethod.PUT, request,response);
    }

//    public <T> ResponseEntity<T> post(String url, T body, Class<T> response){
//        return restTemplate.postForEntity(baseUrl+url,
//                body, response);
//    }

    public void delete(String url){
         restTemplate.delete(url);
    }
}
