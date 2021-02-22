package com.iu.scrapbook.document;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

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
public class Album {

    @MongoId
    private String id;
    private String googleDriveId;
    private String description;
    private String name;
    private long size;
    private Instant createdDate;
    private Instant modifiedDate;
    private String createdBy;
    private String modifiedBy;
    private boolean active;
    private Set<String> collaborators = new HashSet<String>();
}
