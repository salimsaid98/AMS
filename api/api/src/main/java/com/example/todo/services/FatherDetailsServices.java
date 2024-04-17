package com.example.todo.services;

import java.util.List;
import java.util.Map;
import java.util.Optional;

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
// Update father 
public FatherDetails updatefather(Long id, FatherDetails updateFatherDetails) {
    Optional<FatherDetails> existingfather = fatherRepo.findById((long) id);
    if (existingfather.isPresent()) {
        FatherDetails fatherDetails = existingfather.get();
        fatherDetails.setFatherfullName(updateFatherDetails.getFatherfullName());
        fatherDetails.setFatherdateOfBirth(updateFatherDetails.getFatherdateOfBirth());
        fatherDetails.setFathermarriedStatus(updateFatherDetails.getFathermarriedStatus());
        fatherDetails.setFathernationality(updateFatherDetails.getFathernationality());
        fatherDetails.setFatherhomeAddress(updateFatherDetails.getFatherhomeAddress());
        fatherDetails.setFatheroccupation(updateFatherDetails.getFatheroccupation());
        fatherDetails.setApplicantID(updateFatherDetails.getApplicantID());
        
        
        // Update other properties as needed
        return fatherRepo.save(fatherDetails);
    } else {
        throw new IllegalArgumentException("User with id " + id + " does not exist.");
    }
}

}
