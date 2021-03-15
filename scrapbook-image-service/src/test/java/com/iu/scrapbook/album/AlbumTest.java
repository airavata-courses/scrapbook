package com.iu.scrapbook.album;

import com.iu.scrapbook.document.Album;
import com.iu.scrapbook.repository.AlbumRepository;
import com.iu.scrapbook.service.AlbumServiceImpl;
import com.iu.scrapbook.template.GoogleDriveServiceRestTemplate;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.data.mongodb.core.MongoTemplate;

import java.util.List;

/**
 * @author jyotibhushan
 */
@RunWith(MockitoJUnitRunner.class)
public class AlbumTest {

    @InjectMocks
//    @Mock
    private AlbumServiceImpl albumServiceImpl;

    @Mock
    private AlbumRepository albumRepository;

    @Mock
    private GoogleDriveServiceRestTemplate googleDriveServiceRestTemplate;

    @Mock
    private MongoTemplate mongoTemplate;

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
       // albumServiceImpl = new AlbumServiceImpl();
    }

//    @Test
//    public void test_albumCreate() throws GoogleDriveException {
//        Album album = Album.builder().googleDriveId("g1").build();
//        Mockito.when(albumRepository.findByNameAndCreatedBy(anyString(), anyString()))
//                .thenReturn(List.of(album));
//
//        Mockito.when(googleDriveServiceRestTemplate.post(anyString(), any(), any()))
//                .thenReturn(ResponseEntity.status(HttpStatus.CREATED).body(album));
//
//        Mockito.when(mongoTemplate.insert(Album.builder().build())).thenReturn(album);
//
//        CreateAlbumRequest createAlbumRequest = CreateAlbumRequest.builder().name("A1").
//                description("des").build();
//        Album a = albumServiceImpl.createAlbum(createAlbumRequest,"abc");
//        Assert.assertEquals(album.getGoogleDriveId(), a.getGoogleDriveId());
//    }

    @Test
    public void retrieve(){
        Album album = Album.builder().googleDriveId("g1").build();
        Mockito.when(albumRepository.findByActive(true))
                .thenReturn(List.of(album));

        List<Album> list = albumServiceImpl.retrieveALl();
        Assert.assertNotNull(list);
        Assert.assertEquals(1,list.size());
    }
}
