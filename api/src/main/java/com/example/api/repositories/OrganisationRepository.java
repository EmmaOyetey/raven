package com.example.api.repositories;

import com.example.api.models.Organisation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface OrganisationRepository extends JpaRepository<Organisation, Long> {

    @Query("SELECT COUNT(orgs) FROM Organisation orgs WHERE orgs.careers = true")
    long countOrganisationsSupportingCareers();

    @Query("SELECT COUNT(orgs) FROM Organisation orgs WHERE orgs.creativeArts = true")
    long countOrganisationsSupportingCreativeArts();

    @Query("SELECT COUNT(orgs) FROM Organisation orgs WHERE orgs.curriculum = true")
    long countOrganisationsSupportingCurriculum();

    @Query("SELECT COUNT(orgs) FROM Organisation orgs WHERE orgs.lifeSkills = true")
    long countOrganisationsSupportingLifeSkills();

    @Query("SELECT COUNT(orgs) FROM Organisation orgs WHERE orgs.mentalHealth = true")
    long countOrganisationsSupportingMentalHealth();

    @Query("SELECT COUNT(orgs) FROM Organisation orgs WHERE orgs.physicalActivity = true")
    long countOrganisationsSupportingPhysicalActivity();

    @Query("SELECT COUNT(orgs) FROM Organisation orgs WHERE orgs.pshe = true")
    long countOrganisationsSupportingPshe();

    @Query("SELECT COUNT(orgs) FROM Organisation orgs WHERE orgs.tech = true")
    long countOrganisationsSupportingTech();
}
