package com.example.api.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
@Table(name = "organisation")
public class Organisation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String logo;
    private String overview;
    private String link;
    private String impact;
    private boolean careers = false;
    private boolean creativeArts = false;
    private boolean curriculum = false;
    private boolean lifeSkills = false;
    private boolean mentalHealth = false;
    private boolean physicalActivity = false;
    private boolean pshe = false;
    private boolean tech = false;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    public String getOverview() {
        return overview;
    }

    public void setOverview(String overview) {
        this.overview = overview;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getImpact() {
        return impact;
    }

    public void setImpact(String impact) {
        this.impact = impact;
    }

    public boolean isCareers() {
        return careers;
    }

    public void setCareers(boolean careers) {
        this.careers = careers;
    }

    public boolean isCreativeArts() {
        return creativeArts;
    }

    public void setCreativeArts(boolean creativeArts) {
        this.creativeArts = creativeArts;
    }

    public boolean isCurriculum() {
        return curriculum;
    }

    public void setCurriculum(boolean curriculum) {
        this.curriculum = curriculum;
    }

    public boolean isLifeSkills() {
        return lifeSkills;
    }

    public void setLifeSkills(boolean lifeSkills) {
        this.lifeSkills = lifeSkills;
    }

    public boolean isMentalHealth() {
        return mentalHealth;
    }

    public void setMentalHealth(boolean mentalHealth) {
        this.mentalHealth = mentalHealth;
    }

    public boolean isPhysicalActivity() {
        return physicalActivity;
    }

    public void setPhysicalActivity(boolean physicalActivity) {
        this.physicalActivity = physicalActivity;
    }

    public boolean isPshe() {
        return pshe;
    }

    public void setPshe(boolean pshe) {
        this.pshe = pshe;
    }

    public boolean isTech() {
        return tech;
    }

    public void setTech(boolean tech) {
        this.tech = tech;
    }

    @Override
    public String toString() {
        return "Organisation{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", logo='" + logo + '\'' +
                ", overview='" + overview + '\'' +
                ", link='" + link + '\'' +
                ", impact='" + impact + '\'' +
                ", careers=" + careers +
                ", creativeArts=" + creativeArts +
                ", curriculum=" + curriculum +
                ", lifeSkills=" + lifeSkills +
                ", mentalHealth=" + mentalHealth +
                ", physicalActivity=" + physicalActivity +
                ", pshe=" + pshe +
                ", tech=" + tech +
                '}';
    }
}
