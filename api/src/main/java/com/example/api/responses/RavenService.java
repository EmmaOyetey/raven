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

    public long countOrganisationsBySupportArea(String supportArea) {
        switch (supportArea.toLowerCase()) {
            case "careers":
                return organisationRepository.countByCareers(true);
            case "creativearts":
                return organisationRepository.countByCreativeArts(true);
            case "curriculum":
                return organisationRepository.countByCurriculum(true);
            case "lifeskills":
                return organisationRepository.countByLifeSkills(true);
            case "mentalhealth":
                return organisationRepository.countByMentalHealth(true);
            case "physicalactivity":
                return organisationRepository.countByPhysicalActivity(true);
            case "pshe":
                return organisationRepository.countByPshe(true);
            case "tech":
                return organisationRepository.countByTech(true);
            default:
                throw new IllegalArgumentException("Unknown support area: " + supportArea);
        }
    }

    public long countAllOrganisations() {
        return organisationRepository.countAllOrganisations();
    }
}
