package org.zerohunger.backend.request;

public record FoodRequestResponse(Long id, String cityId, int familySize, String requirement) {
    public static FoodRequestResponse from(FoodRequest request) {
        return new FoodRequestResponse(
                request.getId(), request.getCityId(), request.getFamilySize(), request.getRequirement());
    }
}
