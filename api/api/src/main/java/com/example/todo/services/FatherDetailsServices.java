package com.example.todo.services;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.todo.model.FatherDetails;
import com.example.todo.repository.FatherRepo;
@Service
public class FatherDetailsServices {
        public final FatherRepo fatherRepo;
@Autowired
    public FatherDetailsServices(FatherRepo fatherRepo){
        this.fatherRepo = fatherRepo;
    }
// Save Father Details
    public FatherDetails addFather(FatherDetails fatherDetails){
        return this.fatherRepo.save(fatherDetails);
    }

// Get All Data Father Deatails
    public List<FatherDetails> getAllFather(){
        return this.fatherRepo.findAll();
    }

// Get Father By Id 
// public Optional<FatherDetails> getFatherById(long id) {
//     return fatherRepo.findById(id);
// }

// get father By Applicant ID
      public List<Map<String, Object>> getFatherByApplicantID(Long applicantid) {
        return fatherRepo.getFatherByApplicantID(applicantid);
    }


}
