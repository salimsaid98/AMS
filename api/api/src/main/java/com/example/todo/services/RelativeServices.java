package com.example.todo.services;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.todo.model.Relative;
import com.example.todo.repository.RelativeRepo;
@Service
public class RelativeServices {
    @Autowired
    private final RelativeRepo relativeRepo;

    public RelativeServices(RelativeRepo relativeRepo){
        this.relativeRepo = relativeRepo;

    }

    public Relative addrelative(Relative relative){
        return relativeRepo.save(relative);
    }
    public List<Relative> getAllRelative(){
        return relativeRepo.findAll();
    }
    // get Relative By Applicant ID
    public List<Map<String, Object>> geRelativeByApplicantID(Long applicantid) {
        return  relativeRepo.getRelativeByApplicantID(applicantid);
    }
    
    // Update Relative 
public Relative updateRelative(Long id, Relative updaterelative) {
    Optional<Relative> existingrelative= relativeRepo.findById((long) id);
    if (existingrelative.isPresent()) {
       Relative relative = existingrelative.get();
       relative.setRelativefullName(updaterelative.getRelativefullName());
       relative.setRelativeTypes(updaterelative.getRelativeTypes());
       relative.setRelativedateOfBirth(updaterelative.getRelativedateOfBirth());
       relative.setRelativehomeAddress(updaterelative.getRelativehomeAddress());
       relative.setRelativemarriedStatus(updaterelative.getRelativemarriedStatus());
       relative.setRelativenationality(updaterelative.getRelativenationality());
       relative.setRelativeoccupation(updaterelative.getRelativeoccupation());
       relative.setApplicantID(updaterelative.getApplicantID());
        // Update other properties as needed
        return relativeRepo.save(relative);
    } else {
        throw new IllegalArgumentException("User with id " + id + " does not exist.");
    }
}
}
