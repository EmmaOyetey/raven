package com.example.api.responses;

//import com.example.api.models.Organisation;
//import com.example.api.responses.RavenService;
import com.example.api.models.Organisation;
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

    @GetMapping("/organisations")
    public ResponseEntity<List<Organisation>> getAllOrganisations() {
        List<Organisation> organisations = ravenService.getAllOrganisations();
        return ResponseEntity.ok(organisations);
    }

    @GetMapping("/organisations/count/Careers")
    public ResponseEntity<Long> countOrganisationsSupportingCareers() {
        long count = ravenService.countOrganisationsSupportingCareers();
        return ResponseEntity.ok(count);
    }

    @GetMapping("/organisations/count/CreativeArts")
    public ResponseEntity<Long> countOrganisationsSupportingCreativeArts() {
        long count = ravenService.countOrganisationsSupportingCreativeArts();
        return ResponseEntity.ok(count);
    }

    @GetMapping("/organisations/count/Curriculum")
    public ResponseEntity<Long> countOrganisationsSupportingCurriculum() {
        long count = ravenService.countOrganisationsSupportingCurriculum();
        return ResponseEntity.ok(count);
    }

    @GetMapping("/organisations/count/LifeSkills")
    public ResponseEntity<Long> countOrganisationsSupportingLifeSkills() {
        long count = ravenService.countOrganisationsSupportingLifeSkills();
        return ResponseEntity.ok(count);
    }

    @GetMapping("/organisations/count/MentalHealth")
    public ResponseEntity<Long> countOrganisationsSupportingMentalHealth() {
        long count = ravenService.countOrganisationsSupportingMentalHealth();
        return ResponseEntity.ok(count);
    }

    @GetMapping("/organisations/count/PhysicalActivity")
    public ResponseEntity<Long> countOrganisationsSupportingPhysicalActivity() {
        long count = ravenService.countOrganisationsSupportingPhysicalActivity();
        return ResponseEntity.ok(count);
    }

    @GetMapping("/organisations/count/Pshe")
    public ResponseEntity<Long> countOrganisationsSupportingPshe() {
        long count = ravenService.countOrganisationsSupportingPshe();
        return ResponseEntity.ok(count);
    }

    @GetMapping("/organisations/count/Tech")
    public ResponseEntity<Long> countOrganisationsSupportingTech() {
        long count = ravenService.countOrganisationsSupportingTech();
        return ResponseEntity.ok(count);
    }


}
