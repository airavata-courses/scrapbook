package com.iu.scrapbook.producer;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

/**
 * @author jyotibhushan
 */
@Service
@Slf4j
public class Producer {

    @Value("${topic}")
    private String topic;

    @Autowired
    private KafkaTemplate<String, Message> kafkaTemplate;
//    private KafkaTemplate<String, String> kafkaTemplate;

//    public void sendMessage(String message) {
//        log.info(String.format("#### -> Producing message -> %s", message));
//        this.kafkaTemplate.send(TOPIC, message);
//    }

    public void sendMessage(Message message) {
        log.info(String.format("#### -> Producing message -> %s", message));
        this.kafkaTemplate.send(topic, message);
    }
}
