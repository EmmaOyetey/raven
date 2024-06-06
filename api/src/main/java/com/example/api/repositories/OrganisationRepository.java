package com.example.api.repositories;

import com.example.api.models.Organisation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface OrganisationRepository extends JpaRepository<Organisation, Long> {

    Organisation findByName(String name);
    Organisation findById(long id);

    @Query("SELECT COUNT(o) FROM Organisation o WHERE o.careers = :value")
    long countByCareers(@Param("value") boolean value);

    @Query("SELECT COUNT(o) FROM Organisation o WHERE o.creativeArts = :value")
    long countByCreativeArts(@Param("value") boolean value);

    @Query("SELECT COUNT(o) FROM Organisation o WHERE o.curriculum = :value")
    long countByCurriculum(@Param("value") boolean value);

    @Query("SELECT COUNT(o) FROM Organisation o WHERE o.lifeSkills = :value")
    long countByLifeSkills(@Param("value") boolean value);

    @Query("SELECT COUNT(o) FROM Organisation o WHERE o.mentalHealth = :value")
    long countByMentalHealth(@Param("value") boolean value);

    @Query("SELECT COUNT(o) FROM Organisation o WHERE o.physicalActivity = :value")
    long countByPhysicalActivity(@Param("value") boolean value);

    @Query("SELECT COUNT(o) FROM Organisation o WHERE o.pshe = :value")
    long countByPshe(@Param("value") boolean value);

    @Query("SELECT COUNT(o) FROM Organisation o WHERE o.tech = :value")
    long countByTech(@Param("value") boolean value);

    @Query("SELECT COUNT(o) FROM Organisation o")
    long countAllOrganisations();
}
