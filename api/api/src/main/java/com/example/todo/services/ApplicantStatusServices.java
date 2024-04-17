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
// get All Applicant Details where Status is Pending By User
public List<Map<String,Object>> getAllAllApplicantStatusIsPendingByUser(String register_by){
    return applicantStatusRepo.getAllApplicantStatusIsPendingByUser(register_by);
}
// get All Applicant Details where Status is Pending 
public List<Map<String,Object>> getAllAllApplicantStatusIsPending(){
    return applicantStatusRepo.getAllApplicantStatusIsPending();
}
// Count All Applicant Status where Status is Pending By Register User
public List<Map<String,Object>> countTotalPendingByUser(String register_by){
    return applicantStatusRepo.countTotalPendingByUser(register_by);
}
// Count All Applicant Status where Status is Pending 
public List<Map<String,Object>> countAllPending(){
    return applicantStatusRepo.countAllPending();
}
}
