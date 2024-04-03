package com.example.todo.services;

import java.util.List;
import java.util.Map;

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

}
