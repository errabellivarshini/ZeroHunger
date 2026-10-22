package org.zerohunger.backend.donation;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record DonationRequest(
        @NotNull FoodType foodType,
        @Min(1) @Max(5000) int quantityMeals,
        @NotBlank @Size(max = 80) String cityId,
        @NotBlank @Size(min = 6, max = 500) String pickupAddress,
        @Min(1) @Max(72) int expiryHours) {
}
