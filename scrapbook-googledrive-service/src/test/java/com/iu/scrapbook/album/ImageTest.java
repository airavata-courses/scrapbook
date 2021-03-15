package com.iu.scrapbook.album;

import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.services.drive.Drive;
import com.google.api.services.drive.model.File;
import com.iu.scrapbook.config.GoogleDriveConfig;
import com.iu.scrapbook.dto.Image;
import com.iu.scrapbook.service.GoogleDriveImageServiceImpl;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;

/**
 * @author jyotibhushan
 */
@RunWith(MockitoJUnitRunner.class)
public class ImageTest {

    @InjectMocks
//    @Mock
    private GoogleDriveImageServiceImpl googleDriveImageServiceImpl;

    @Mock
    private GoogleDriveConfig googleDriveConfig;

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void updateImage() throws Exception {
        Image iam = Image.builder().build();
        File fileMetadata = new File();
        fileMetadata.setName("ok");
        Drive drive = new Drive.Builder( GoogleNetHttpTransport.newTrustedTransport(),
                JacksonFactory.getDefaultInstance(),null).setApplicationName("g").build();
       // Mockito.when(googleDriveConfig.getDrive()).thenReturn(drive);
//        Mockito.when(drive.files().update("",fileMetadata)).thenReturn(Drive.Files.Update);
//        Image i = googleDriveImageServiceImpl.updateImage(iam);
        Assert.assertNotNull(drive);
    }
}
