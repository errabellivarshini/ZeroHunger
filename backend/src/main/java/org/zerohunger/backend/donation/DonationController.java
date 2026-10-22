package org.zerohunger.backend.donation;

import java.net.URI;
import java.util.List;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/donations")
public class DonationController {
    private final DonationService service;

    public DonationController(DonationService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<DonationResponse> create(@Valid @RequestBody DonationRequest request) {
        DonationResponse donation = service.create(request);
        return ResponseEntity.created(URI.create("/api/donations/" + donation.id())).body(donation);
    }

    @GetMapping
    public List<DonationResponse> list() {
        return service.list();
    }

    @GetMapping("/{id}")
    public DonationResponse get(@PathVariable long id) {
        return service.get(id);
    }

    @PutMapping("/{id}")
    public DonationResponse update(@PathVariable long id, @Valid @RequestBody DonationRequest request) {
        return service.update(id, request);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
