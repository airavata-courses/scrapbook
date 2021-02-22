package com.iu.scrapbook.service;

import com.google.api.client.http.FileContent;
import com.google.api.services.drive.model.File;
import com.iu.scrapbook.config.GoogleDriveConfig;
import com.iu.scrapbook.dto.Image;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.time.Instant;

/**
 * This service is responsible for communicating for google drive
 *
 * @author jbhushan
 */
@Component
public class GoogleDriveImageServiceImpl implements GoogleDriveImageService {

    @Autowired
    private GoogleDriveConfig googleDriveConfig;

    @Autowired
    private ImageServiceRestTemplate imageServiceRestTemplate;

    @Override
    public Image uploadImage(MultipartFile image, String userId, String albumGoogleId) throws Exception {

        // Normalize file name
        String fileName = StringUtils.cleanPath(image.getOriginalFilename());

        File file = new File();
        file.setName(fileName);
        java.io.File f = new java.io.File("targetFile.tmp");
        try (OutputStream os = new FileOutputStream(f)) {
            os.write(image.getBytes());
        }
        FileContent content = new FileContent("image/jpeg", f);
        // call google drive api to upload
        File uploadedFile = googleDriveConfig.getDrive().files().create(file, content)
                .setFields("id,name,mimeType,createdTime,modifiedTime,size,fileExtension").execute();

        // store image into MongoDB
        Image i =  Image.builder().googleDriveId(uploadedFile.getId()).mimeType(uploadedFile.getMimeType()).size(uploadedFile.getSize())
                .createdDate(Instant.ofEpochMilli(uploadedFile.getCreatedTime().getValue())).name(uploadedFile.getName())
                        .modifiedDate(Instant.ofEpochMilli(uploadedFile.getModifiedTime().getValue())).extension(uploadedFile.getFileExtension())
                .createdBy(userId).modifiedBy(userId)
                .build();

        // call image-service to store image information into mongoDB
        ResponseEntity<Image> response = null;
        if(albumGoogleId != null){
            response = imageServiceRestTemplate.post("/image/"+albumGoogleId,i, Image.class);
        } else {
            response = imageServiceRestTemplate.post("/image",i, Image.class);
        }

        f.delete();
        return response.getBody();
    }

    @Override
    public byte[] downloadImage(String googleId) throws Exception {

      //  ResponseEntity<Image> responseEntity = imageServiceRestTemplate.get("/image/"+googleId+"?user="+userId, Image.class);
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        googleDriveConfig.getDrive().files().get(googleId).executeMediaAndDownloadTo(outputStream);
        //byte[] data = new byte[];
        //return IOUtils.serialize(outputStream);
        return outputStream.toByteArray();
    }

    @Override
    public Boolean deleteImage(String googleId, String userId) throws Exception {

        // Mark inactive in google drive
        imageServiceRestTemplate.delete("/image/"+googleId+"?user="+userId);
        // delete from drive
        googleDriveConfig.getDrive().files().delete(googleId).execute();
        return true;
    }

    @Override
    public Image updateImage(Image image) throws Exception {

//       File file =  googleDriveConfig.getDrive().files().get(image.getGoogleDriveId()).execute();
//        file.setName(image.getName());

        File fileMetadata = new File();
        fileMetadata.setName(image.getName());
        // call google drive api to update name
         googleDriveConfig.getDrive().files().
                update(image.getGoogleDriveId(), fileMetadata).execute();

        return image;
    }
}
