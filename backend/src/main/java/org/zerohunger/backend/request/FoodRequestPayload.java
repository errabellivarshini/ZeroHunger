package org.zerohunger.backend.request;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record FoodRequestPayload(
        @NotBlank @Size(max = 80) String cityId,
        @Min(1) @Max(20) int familySize,
        @NotBlank @Size(min = 4, max = 1000) String requirement) {
}
