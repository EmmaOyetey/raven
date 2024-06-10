package com.example.api.responses;

//import com.example.api.models.Organisation;
//import com.example.api.responses.RavenService;
import com.example.api.models.Organisation;
import com.example.api.models.Rating;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class RavenController {

    @Autowired
    private RavenService ravenService;

    @ExceptionHandler
    public ResponseEntity<String> handleExceptions(Exception exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

    @PostMapping("/organisations/add")
    public ResponseEntity<Organisation> createOrganisation(@RequestBody Organisation organisation) {
        Organisation newOrganisation = ravenService.addOrganisation(organisation);
        return ResponseEntity.status(HttpStatus.CREATED).body(newOrganisation);
    }

    @PostMapping("/organisations/rate")
    public ResponseEntity<Rating> createRating(@RequestBody Rating rating) {
        Rating newRating = ravenService.addRating(rating);
        if (newRating != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(newRating);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @GetMapping("/organisations")
    public ResponseEntity<List<Organisation>> getAllOrganisations() {
        List<Organisation> organisations = ravenService.getAllOrganisations();
        return ResponseEntity.ok(organisations);
    }

    @GetMapping("/organisations/{organisationId}")
    public ResponseEntity<Organisation> getOrganisationById(@PathVariable Long organisationId) {
        try {
            Organisation fetchedOrganisation = ravenService.getOrganisationById(organisationId);
            return ResponseEntity.ok(fetchedOrganisation);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @GetMapping("/organisations/count/{supportArea}")
    public ResponseEntity<Long> countOrganisationsBySupportArea(@PathVariable String supportArea) {
        try {
            long count = ravenService.countOrganisationsBySupportArea(supportArea);
            return ResponseEntity.ok(count);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @GetMapping("/organisations/countAll")
    public ResponseEntity<Long> countAllOrganisations() {
        long count = ravenService.countAllOrganisations();
        return ResponseEntity.ok(count);
    }

    @GetMapping("/organisations/{organisationId}/rate/recent")
    public ResponseEntity<List<Rating>> getRecentRatingsByOrganisationId(
            @PathVariable Long organisationId,
            @RequestParam(value = "limit", defaultValue = "5") int limit) {

        List<Rating> recentRatings = ravenService.getRecentRatingsByOrganisationId(organisationId, limit);
        if (!recentRatings.isEmpty()) {
            return ResponseEntity.ok(recentRatings);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{organisationId}/ratings/random")
    public ResponseEntity<Rating> getRandomRatingByOrganisationId(@PathVariable Long organisationId) {
        Rating randomRating = ravenService.getRandomRatingByOrganisationId(organisationId);
        if (randomRating != null) {
            return ResponseEntity.ok(randomRating);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
