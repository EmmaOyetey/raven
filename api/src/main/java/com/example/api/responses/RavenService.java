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

}
