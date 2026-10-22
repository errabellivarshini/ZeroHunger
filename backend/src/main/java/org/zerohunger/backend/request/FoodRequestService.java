package org.zerohunger.backend.request;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

@Service
@Transactional
public class FoodRequestService {
    private final FoodRequestRepository repository;

    public FoodRequestService(FoodRequestRepository repository) {
        this.repository = repository;
    }

    public FoodRequestResponse create(FoodRequestPayload payload) {
        return FoodRequestResponse.from(repository.save(toEntity(payload)));
    }

    @Transactional(readOnly = true)
    public List<FoodRequestResponse> list() {
        return repository.findAll().stream().map(FoodRequestResponse::from).toList();
    }

    @Transactional(readOnly = true)
    public FoodRequestResponse get(long id) {
        return FoodRequestResponse.from(findById(id));
    }

    public FoodRequestResponse update(long id, FoodRequestPayload payload) {
        FoodRequest request = findById(id);
        request.update(payload.cityId(), payload.familySize(), payload.requirement());
        return FoodRequestResponse.from(repository.save(request));
    }

    public void delete(long id) {
        repository.delete(findById(id));
    }

    private FoodRequest findById(long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Food request not found"));
    }

    private FoodRequest toEntity(FoodRequestPayload payload) {
        return new FoodRequest(payload.cityId(), payload.familySize(), payload.requirement());
    }
}
