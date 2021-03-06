package com.iu.scrapbook.dto;

import lombok.*;

import java.time.Instant;

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
    private Instant startCreatedDate;
    private Instant endCreatedDate;
    private Instant startModifiedDate;
    private Instant endModifiedDate;
}
