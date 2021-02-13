package com.iu.scrapbook.document;

import com.google.api.client.util.DateTime;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;
import java.util.UUID;

/**
 * @author jbhushan
 */
@Document
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Image {

    @Id
    private String id;
    private String googleDriveId;
    private String name;
    private Long size;
    private String mimeType;
    private Instant createdDate;
    private Instant modifiedDate;
    private String extension;
}
