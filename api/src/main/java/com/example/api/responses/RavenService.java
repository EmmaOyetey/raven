package com.example.api.responses;

import com.example.api.models.Organisation;
import com.example.api.repositories.OrganisationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class RavenService {
    @Autowired
    private OrganisationRepository organisationRepository;

    public List<Organisation> getAllOrganisations() {
        return organisationRepository.findAll();
    }

    public Organisation addOrganisation(Organisation organisation) {
        return organisationRepository.save(organisation);
    }

    public long countOrganisationsSupportingCareers() {
        return organisationRepository.countOrganisationsSupportingCareers();
    }

    public long countOrganisationsSupportingCreativeArts() {
        return organisationRepository.countOrganisationsSupportingCreativeArts();
    }

    public long countOrganisationsSupportingCurriculum() {
        return organisationRepository.countOrganisationsSupportingCurriculum();
    }

    public long countOrganisationsSupportingLifeSkills() {
        return organisationRepository.countOrganisationsSupportingLifeSkills();
    }

    public long countOrganisationsSupportingMentalHealth() {
        return organisationRepository.countOrganisationsSupportingMentalHealth();
    }

    public long countOrganisationsSupportingPhysicalActivity() {
        return organisationRepository.countOrganisationsSupportingPhysicalActivity();
    }

    public long countOrganisationsSupportingPshe() {
        return organisationRepository.countOrganisationsSupportingPshe();
    }

    public long countOrganisationsSupportingTech() {
        return organisationRepository.countOrganisationsSupportingTech();
    }
}
