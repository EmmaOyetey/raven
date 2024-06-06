package com.example.api.responses;

import com.example.api.models.Organisation;
import com.example.api.models.Rating;
import com.example.api.repositories.OrganisationRepository;
import com.example.api.repositories.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@Service
public class RavenService {

    private static final Logger logger = LoggerFactory.getLogger(RavenService.class);

    @Autowired
    private OrganisationRepository organisationRepository;

    @Autowired
    private RatingRepository ratingRepository;

    public List<Organisation> getAllOrganisations() {
        return organisationRepository.findAll();
    }

    public Organisation addOrganisation(Organisation organisation) {
        return organisationRepository.save(organisation);
    }

    public Rating addRating(Rating rating) {
        // Check if the organization exists
        Organisation organisation = organisationRepository.findById(rating.getOrganisation().getId());
        if (organisation != null) {
            rating.setOrganisation(organisation);
            Rating savedRating = ratingRepository.save(rating);
            logger.info("Rating added successfully: {}", savedRating);
            return savedRating;
        } else {
            logger.error("Organisation not found: {}", rating.getOrganisation().getName());
            return null;
        }
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