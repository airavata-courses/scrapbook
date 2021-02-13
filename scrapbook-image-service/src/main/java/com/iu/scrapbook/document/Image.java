package com.iu.scrapbook.document;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.time.Instant;

/**
 * @author jbhushan
 */
@Document
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class Image {

    @MongoId
    private String id;
    private String googleDriveId;
    private String name;
    private Long size;
    private String mimeType;
    private Instant createdDate;
    private Instant modifiedDate;
    private String extension;
    private String createdBy;
    private String modifiedBy;
    private Album album;
}
