package com.iu.scrapbook.dto;

import lombok.*;

/**
 * @author jbhushan
 */
@Builder
@ToString
@Getter
@Setter
@EqualsAndHashCode
@AllArgsConstructor
@RequiredArgsConstructor
public class CreateAlbumRequest {

    private String name;
    private String description;
}
