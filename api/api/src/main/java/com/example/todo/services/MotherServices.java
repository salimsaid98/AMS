package com.example.todo.services;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.todo.model.MotherDetails;
import com.example.todo.repository.MotherRepo;
@Service
public class MotherServices {
           public final MotherRepo motherRepo;
@Autowired
    public MotherServices(MotherRepo motherRepoo){
        this.motherRepo = motherRepoo;
    }
// Save Mother Details
    public MotherDetails addMother(MotherDetails motherDetails){
        return this.motherRepo.save(motherDetails);
    }   
// Get All Data from Mother Details
    public List<MotherDetails> getAllMother(){
        return this.motherRepo.findAll();
    }

// get Mother By Applicant ID
      public List<Map<String, Object>> getMotherByApplicantID(Long applicantid) {
        return motherRepo.getMotherByApplicantID(applicantid);
    }
// Update Mother
public MotherDetails updateMother(Long id, MotherDetails updateMotherDetails) {
    Optional<MotherDetails> existingmother= motherRepo.findById((long) id);
    if (existingmother.isPresent()) {
        MotherDetails motherDetails = existingmother.get();
        motherDetails.setMotherfullName(updateMotherDetails.getMotherfullName());
        motherDetails.setMotherhomeAddress(updateMotherDetails.getMotherhomeAddress());
        motherDetails.setMothermarriedStatus(updateMotherDetails.getMothermarriedStatus());
        motherDetails.setMotherdateOfBirth(updateMotherDetails.getMotherdateOfBirth());
        motherDetails.setMothernationality(updateMotherDetails.getMothernationality());
        motherDetails.setMotheroccupation(updateMotherDetails.getMotheroccupation());
        motherDetails.setApplicantID(updateMotherDetails.getApplicantID());
        // Update other properties as needed
        return motherRepo.save(motherDetails);
    } else {
        throw new IllegalArgumentException("User with id " + id + " does not exist.");
    }
}
}
