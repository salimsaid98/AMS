package com.example.todo.services;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.todo.model.ApplicantStatus;
import com.example.todo.repository.ApplicantStatusRepo;

@Service
public class ApplicantStatusServices {
    private final ApplicantStatusRepo applicantStatusRepo;
@Autowired
    public ApplicantStatusServices(ApplicantStatusRepo applicantStatusRepo){
        this.applicantStatusRepo = applicantStatusRepo;
    }

public ApplicantStatus addApplicantStatus(ApplicantStatus applicantStatus){
    return this.applicantStatusRepo.save(applicantStatus);

}
public List<ApplicantStatus> getAllApplicantStstus(){
    return this.applicantStatusRepo.findAll();
}
// get All Applicant where Status is Pending
public List<Map<String,Object>> getAllAllApplicantStatusIsPending(String register_by){
    return applicantStatusRepo.getAllApplicantStatusIsPending(register_by);
}
}
