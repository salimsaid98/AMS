package com.example.todo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.todo.model.ApplicantDetails;
import com.example.todo.repository.ApplicantRepo;
@Service
public class ApplicantServices {
    public final ApplicantRepo applicantRepo;
@Autowired
    public ApplicantServices(ApplicantRepo applicantRepo){
        this.applicantRepo = applicantRepo;
    }
// Save Applicant Details
    public ApplicantDetails addApplicantDetails(ApplicantDetails applicantDetails){
        return this.applicantRepo.save(applicantDetails);
    }
// Get All Applicant
    public List<ApplicantDetails> getAllApplicantDetails(){
        return this.applicantRepo.findAll();
    }
// Get Applicant By ID
    public Optional<ApplicantDetails> getUserById(long id) {
        return applicantRepo.findById( id);
    }


}
