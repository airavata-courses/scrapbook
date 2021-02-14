package com.iu.scrapbook.config;

import com.google.api.client.googleapis.auth.oauth2.GoogleCredential;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.googleapis.services.CommonGoogleClientRequestInitializer;
import com.google.api.client.googleapis.services.GoogleClientRequestInitializer;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.services.drive.Drive;
import com.google.api.services.drive.DriveScopes;
import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

/**
 * This config is used to communicate with google drive. It has required configuration to access
 * google drive APIs
 *
 * @author jbhushan
 */
@Component
public class GoogleDriveConfig {

    private static final List<String> SCOPES = Arrays.asList(DriveScopes.DRIVE,
            "https://www.googleapis.com/auth/drive.install");

    @Value("${google.service.account.key}")
    private Resource serviceAccountKey;


    public Drive getDrive() throws Exception {
        HttpTransport httpTransport = GoogleNetHttpTransport.newTrustedTransport();
        JsonFactory jsonFactory = JacksonFactory.getDefaultInstance();

        GoogleCredential cred = GoogleCredential.fromStream(serviceAccountKey.getInputStream())
                .createScoped(Lists.newArrayList("https://www.googleapis.com/auth/drive"));

        GoogleClientRequestInitializer keyInitializer = new CommonGoogleClientRequestInitializer();

        Drive drive = new Drive.Builder(httpTransport, jsonFactory, null)
                .setApplicationName("Scrapbook")
                .setHttpRequestInitializer(cred)
                .setGoogleClientRequestInitializer(keyInitializer).build();
        return drive;
    }
}
