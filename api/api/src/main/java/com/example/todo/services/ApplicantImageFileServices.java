package com.example.todo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.todo.model.ApplicantImageFile;
import com.example.todo.repository.ApplicantImageFileRepo;

@Service
public class ApplicantImageFileServices {
    @Autowired
    private final ApplicantImageFileRepo applicantImageFileRepo;

    public ApplicantImageFileServices(ApplicantImageFileRepo applicantImageFileRepo){
        this.applicantImageFileRepo = applicantImageFileRepo;
    }

    public ApplicantImageFile addApplicantImageFile(ApplicantImageFile applicantImageFile){
        return this.applicantImageFileRepo.save(applicantImageFile);

    }
    public List<ApplicantImageFile> getAllApplicantImageFile(){
        return this.applicantImageFileRepo.findAll();
    }
}
