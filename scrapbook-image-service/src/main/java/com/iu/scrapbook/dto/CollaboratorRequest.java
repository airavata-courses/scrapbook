package com.iu.scrapbook.dto;

import lombok.*;

import java.util.Set;

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
public class CollaboratorRequest {

    private Set<String> ids;
}
