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
public class Image {

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
    private Boolean active;
    private String albumGoogleId;
}
