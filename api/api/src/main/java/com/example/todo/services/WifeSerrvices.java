package com.example.todo.services;

import java.util.List;
import java.util.Map;

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

}
