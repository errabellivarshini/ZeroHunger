package org.zerohunger.backend.donation;

public record DonationResponse(
        Long id,
        FoodType foodType,
        int quantityMeals,
        String cityId,
        String pickupAddress,
        int expiryHours) {
    public static DonationResponse from(Donation donation) {
        return new DonationResponse(
                donation.getId(),
                donation.getFoodType(),
                donation.getQuantityMeals(),
                donation.getCityId(),
                donation.getPickupAddress(),
                donation.getExpiryHours());
    }
}
