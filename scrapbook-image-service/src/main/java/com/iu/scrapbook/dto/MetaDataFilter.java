package com.iu.scrapbook.dto;

import lombok.*;

import java.util.List;

/**
 * @author jyotibhushan
 */
@Getter
@Setter
@ToString
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
public class MetaDataFilter {

    private String aperture;
    private String camera;
    private String focalLength;
    private String gps;
    private String iso;
    private List<String> imageIds;
}
