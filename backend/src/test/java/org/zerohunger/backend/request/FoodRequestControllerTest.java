package org.zerohunger.backend.request;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(FoodRequestController.class)
class FoodRequestControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private FoodRequestService service;

    @Test
    void createsFoodRequestFromUiFields() throws Exception {
        when(service.create(any())).thenReturn(new FoodRequestResponse(
                2L, "nyc", 4, "Staples and fresh vegetables"));

        mockMvc.perform(post("/api/requests")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"cityId":"nyc","familySize":4,
                                 "requirement":"Staples and fresh vegetables"}
                                """))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").value(2))
                .andExpect(jsonPath("$.familySize").value(4))
                .andExpect(jsonPath("$.requirement").value("Staples and fresh vegetables"));
    }

    @Test
    void rejectsInvalidFamilySize() throws Exception {
        mockMvc.perform(post("/api/requests")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"cityId":"nyc","familySize":21,"requirement":"Need food"}
                                """))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.errors.familySize").exists());
    }
}
