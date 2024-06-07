package com.example.api.repositories;

import com.example.api.models.Rating;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

    @Repository
    public interface RatingRepository extends JpaRepository<Rating, Long> {
        List<Rating> findByOrganisationId(Long organisationId);
        List<Rating> findByOrganisationName(String organisationName);
        List<Rating> findTopByOrganisationIdOrderByCreatedAtDesc(Long organisationId, PageRequest pageRequest);
    }

