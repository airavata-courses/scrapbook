package com.iu.scrapbook.dto;

import lombok.*;

import java.time.Instant;

/**
 * @author jbhushan
 */
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class Album {

    private String id;
    private String googleDriveId;
    private String name;
    private Long size;
    private Instant createdDate;
    private Instant modifiedDate;
    private String extension;
    private Instant createdBy;
    private Instant modifiedBy;
}
