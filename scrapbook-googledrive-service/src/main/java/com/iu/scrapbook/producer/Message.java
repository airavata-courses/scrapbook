package com.iu.scrapbook.producer;

import lombok.*;

/**
 * @author jyotibhushan
 */
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class Message {

    private String albumId;
    private String imageName;
    private String imageId;
    //private byte[] image;
}
