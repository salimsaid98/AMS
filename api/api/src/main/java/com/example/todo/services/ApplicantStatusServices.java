package com.example.todo.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.todo.model.ApplicantStatus;
import com.example.todo.repository.ApplicantStatusRepo;

@Service
public class ApplicantStatusServices {
    private final ApplicantStatusRepo applicantStatusRepo;

    public ApplicantStatusServices(ApplicantStatusRepo applicantStatusRepo){
        this.applicantStatusRepo = applicantStatusRepo;
    }

public ApplicantStatus addApplicantStatus(ApplicantStatus applicantStatus){
    return this.applicantStatusRepo.save(applicantStatus);

}
public List<ApplicantStatus> getAllApplicantStstus(){
    return this.applicantStatusRepo.findAll();
}
}
