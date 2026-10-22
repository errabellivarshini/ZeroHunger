package org.zerohunger.backend.donation;

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

@WebMvcTest(DonationController.class)
class DonationControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private DonationService service;

    @Test
    void createsDonationFromUiFields() throws Exception {
        when(service.create(any())).thenReturn(new DonationResponse(
                1L, FoodType.prepared, 50, "sf", "123 Main Street", 6));

        mockMvc.perform(post("/api/donations")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"foodType":"prepared","quantityMeals":50,"cityId":"sf",
                                 "pickupAddress":"123 Main Street","expiryHours":6}
                                """))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.quantityMeals").value(50))
                .andExpect(jsonPath("$.foodType").value("prepared"));
    }

    @Test
    void rejectsOutOfRangeDonation() throws Exception {
        mockMvc.perform(post("/api/donations")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"foodType":"prepared","quantityMeals":0,"cityId":"sf",
                                 "pickupAddress":"123 Main Street","expiryHours":6}
                                """))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.detail").value("Request validation failed"))
                .andExpect(jsonPath("$.errors.quantityMeals").exists());
    }
}
