package org.zerohunger.backend.request;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodRequestRepository extends JpaRepository<FoodRequest, Long> {
}
