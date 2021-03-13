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
public class ImageIdList {

    private List<String> imageIds;
}
