package org.zerohunger.backend.donation;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

@Service
@Transactional
public class DonationService {
    private final DonationRepository repository;

    public DonationService(DonationRepository repository) {
        this.repository = repository;
    }

    public DonationResponse create(DonationRequest request) {
        return DonationResponse.from(repository.save(toEntity(request)));
    }

    @Transactional(readOnly = true)
    public List<DonationResponse> list() {
        return repository.findAll().stream().map(DonationResponse::from).toList();
    }

    @Transactional(readOnly = true)
    public DonationResponse get(long id) {
        return DonationResponse.from(findById(id));
    }

    public DonationResponse update(long id, DonationRequest request) {
        Donation donation = findById(id);
        donation.update(request.foodType(), request.quantityMeals(), request.cityId(),
                request.pickupAddress(), request.expiryHours());
        return DonationResponse.from(repository.save(donation));
    }

    public void delete(long id) {
        repository.delete(findById(id));
    }

    private Donation findById(long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Donation not found"));
    }

    private Donation toEntity(DonationRequest request) {
        return new Donation(request.foodType(), request.quantityMeals(), request.cityId(),
                request.pickupAddress(), request.expiryHours());
    }
}
