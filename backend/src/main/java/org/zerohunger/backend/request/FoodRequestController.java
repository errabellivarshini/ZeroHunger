package org.zerohunger.backend.request;

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
@RequestMapping("/api/requests")
public class FoodRequestController {
    private final FoodRequestService service;

    public FoodRequestController(FoodRequestService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<FoodRequestResponse> create(@Valid @RequestBody FoodRequestPayload payload) {
        FoodRequestResponse request = service.create(payload);
        return ResponseEntity.created(URI.create("/api/requests/" + request.id())).body(request);
    }

    @GetMapping
    public List<FoodRequestResponse> list() {
        return service.list();
    }

    @GetMapping("/{id}")
    public FoodRequestResponse get(@PathVariable long id) {
        return service.get(id);
    }

    @PutMapping("/{id}")
    public FoodRequestResponse update(@PathVariable long id, @Valid @RequestBody FoodRequestPayload payload) {
        return service.update(id, payload);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
