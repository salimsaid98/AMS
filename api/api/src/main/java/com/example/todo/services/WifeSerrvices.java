package com.example.todo.services;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.todo.model.WifeDetaills;
import com.example.todo.repository.WifeRepo;
@Service
public class WifeSerrvices {
              public final WifeRepo wifeRepo;
@Autowired
    public WifeSerrvices(WifeRepo wifeRepo){
        this.wifeRepo = wifeRepo;
    }
// Save Wife Details
    public WifeDetaills addWife(WifeDetaills wifeDetaills){
        return this.wifeRepo.save(wifeDetaills);
    }
    public List<WifeDetaills> getAllWife(){
        return this.wifeRepo.findAll();
    }
// get Wife By Applicant ID
      public List<Map<String, Object>> getWifeByApplicantID(Long applicantid) {
        return wifeRepo.getWifeByApplicantID(applicantid);
    }

    // Update Wife 
public WifeDetaills updateWifeDetaills(Long id, WifeDetaills updateMotherDetails) {
    Optional<WifeDetaills> existingwife= wifeRepo.findById((long) id);
    if (existingwife.isPresent()) {
        WifeDetaills wifeDetaills = existingwife.get();
        wifeDetaills.setWifeName(updateMotherDetails.getWifeName());
        wifeDetaills.setWifedateOfBirth(updateMotherDetails.getWifedateOfBirth());
        wifeDetaills.setWifenationality(updateMotherDetails.getWifenationality());
        wifeDetaills.setWifeoccupation(updateMotherDetails.getWifeoccupation());
        wifeDetaills.setWifehomeAddress(updateMotherDetails.getWifehomeAddress());
        wifeDetaills.setApplicantID(updateMotherDetails.getApplicantID());
        // Update other properties as needed
        return wifeRepo.save(wifeDetaills);
    } else {
        throw new IllegalArgumentException("User with id " + id + " does not exist.");
    }
}

}
