package com.example.todo.services;

import java.util.List;
import java.util.Map;

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
}
