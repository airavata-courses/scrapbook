package com.iu.scrapbook.service;

import com.iu.scrapbook.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * This service is responsible for communicating for google drive and MongoDB
 *
 * @author jbhushan
 */
@Component
public class ImageServiceImpl implements ImageService{


    @Autowired
    private ImageRepository imageRepository;

//    @Override
//    public Image uploadImage(MultipartFile image, String userId, String albumName) throws Exception {
//
//        // Normalize file name
//        String fileName = StringUtils.cleanPath(image.getOriginalFilename());
//
//        File file = new File();
//        file.setName(fileName);
//        java.io.File f = new java.io.File("src/main/resources/targetFile.tmp");
//        try (OutputStream os = new FileOutputStream(f)) {
//            os.write(image.getBytes());
//        }
//        FileContent content = new FileContent("image/jpeg", f);
//        // call google drive api to upload
//        File uploadedFile = googleDriveService.getDrive().files().create(file, content)
//                .setFields("id,name,mimeType,createdTime,modifiedTime,size,fileExtension").execute();
//
//        // store image into MongoDB
//        Image i =  Image.builder().googleDriveId(uploadedFile.getId()).mimeType(uploadedFile.getMimeType()).size(uploadedFile.getSize())
//                .createdDate(Instant.ofEpochMilli(uploadedFile.getCreatedTime().getValue())).name(uploadedFile.getName())
//                        .modifiedDate(Instant.ofEpochMilli(uploadedFile.getModifiedTime().getValue())).extension(uploadedFile.getFileExtension())
//                .createdBy(userId).modifiedBy(userId)
//                .build();
//        imageRepository.save(i);
//        return i;
//    }
}
