package com.iu.scrapbook.dto;

import lombok.*;

import java.time.Instant;
import java.util.List;

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
    private String createdBy;
    private String modifiedBy;
    private boolean active;
    private List<Image> images;
}
