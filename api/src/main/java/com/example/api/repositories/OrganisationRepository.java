package com.example.api.repositories;

import com.example.api.models.Organisation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface OrganisationRepository extends JpaRepository<Organisation, Long> {




}
