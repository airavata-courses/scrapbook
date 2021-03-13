package com.iu.scrapbook.dto;

import lombok.*;

/**
 * @author jyotibhushan
 */
@Getter
@Setter
@ToString
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
public class SearchImageRequest {

    private String name;
    private String startCreatedDate;
    private String endCreatedDate;
    private String startModifiedDate;
    private String endModifiedDate;
    private MetaDataFilter metadata;
}
