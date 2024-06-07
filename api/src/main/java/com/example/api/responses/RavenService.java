package com.example.api.responses;

import com.example.api.models.Organisation;
import com.example.api.models.Rating;
import com.example.api.repositories.OrganisationRepository;
import com.example.api.repositories.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.Optional;

import java.util.List;
import java.util.Random;

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
        Long organisationId = rating.getOrganisation().getId();
        Optional<Organisation> organisationOptional = organisationRepository.findById(organisationId);

        if (organisationOptional.isPresent()) {
            Organisation organisation = organisationOptional.get();
            rating.setOrganisation(organisation);
            Rating savedRating = ratingRepository.save(rating);
            logger.info("Rating added successfully: {}", savedRating);
            return savedRating;
        } else {
            logger.error("Organisation not found: {}", organisationId);
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

    public List<Rating> getRecentRatingsByOrganisationId(Long organisationId, int limit) {
        return ratingRepository.findTopByOrganisationIdOrderByCreatedAtDesc(organisationId, PageRequest.of(0, limit));
    }

    public Rating getRandomRatingByOrganisationId(Long organisationId) {
        List<Rating> ratings = ratingRepository.findByOrganisationId(organisationId);
        if (ratings.isEmpty()) {
            return null;
        }
        Random random = new Random();
        return ratings.get(random.nextInt(ratings.size()));
    }

}