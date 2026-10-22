package org.zerohunger.backend.request;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "food_requests")
public class FoodRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 80)
    private String cityId;

    @Column(nullable = false)
    private int familySize;

    @Column(nullable = false, length = 1000)
    private String requirement;

    protected FoodRequest() {
    }

    public FoodRequest(String cityId, int familySize, String requirement) {
        this.cityId = cityId;
        this.familySize = familySize;
        this.requirement = requirement;
    }

    public Long getId() {
        return id;
    }

    public String getCityId() {
        return cityId;
    }

    public int getFamilySize() {
        return familySize;
    }

    public String getRequirement() {
        return requirement;
    }

    public void update(String cityId, int familySize, String requirement) {
        this.cityId = cityId;
        this.familySize = familySize;
        this.requirement = requirement;
    }
}
