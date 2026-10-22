package org.zerohunger.backend.donation;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "donations")
public class Donation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private FoodType foodType;

    @Column(nullable = false)
    private int quantityMeals;

    @Column(nullable = false, length = 80)
    private String cityId;

    @Column(nullable = false, length = 500)
    private String pickupAddress;

    @Column(nullable = false)
    private int expiryHours;

    protected Donation() {
    }

    public Donation(FoodType foodType, int quantityMeals, String cityId, String pickupAddress, int expiryHours) {
        this.foodType = foodType;
        this.quantityMeals = quantityMeals;
        this.cityId = cityId;
        this.pickupAddress = pickupAddress;
        this.expiryHours = expiryHours;
    }

    public Long getId() {
        return id;
    }

    public FoodType getFoodType() {
        return foodType;
    }

    public int getQuantityMeals() {
        return quantityMeals;
    }

    public String getCityId() {
        return cityId;
    }

    public String getPickupAddress() {
        return pickupAddress;
    }

    public int getExpiryHours() {
        return expiryHours;
    }

    public void update(FoodType foodType, int quantityMeals, String cityId, String pickupAddress, int expiryHours) {
        this.foodType = foodType;
        this.quantityMeals = quantityMeals;
        this.cityId = cityId;
        this.pickupAddress = pickupAddress;
        this.expiryHours = expiryHours;
    }
}
