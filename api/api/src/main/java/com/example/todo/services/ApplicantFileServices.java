package com.example.todo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.todo.model.ApplicantFiles;
import com.example.todo.repository.ApplicantFileRepo;

@Service
public class ApplicantFileServices {
    @Autowired
    private final ApplicantFileRepo applicantFileRepo;

    public ApplicantFileServices(ApplicantFileRepo applicantFileRepo) {
        this.applicantFileRepo = applicantFileRepo;
    }

    // Add Applicant File
    public ApplicantFiles addApplicantFiles(ApplicantFiles applicantFiles) {
        return this.applicantFileRepo.save(applicantFiles);
    }

    // Get All Applicant file
    public List<ApplicantFiles> getAllApplicantFiles() {
        return this.applicantFileRepo.findAll();
    }

    // Delete Applicant File
    public void deleteApplicantFile(long id) {
        applicantFileRepo.deleteById( id);
    }
    // Update Applicant File 
    public ApplicantFiles updateApplicantFile(Long id, ApplicantFiles updateapplicantFiles) {
        Optional<ApplicantFiles> existingApplicantFile = applicantFileRepo.findById((long) id);
        if (existingApplicantFile.isPresent()) {
            ApplicantFiles applicantFiles2 = existingApplicantFile.get();
            applicantFiles2.setFile_name(updateapplicantFiles.getFile_name());
            // Update other properties as needed
            return applicantFileRepo.save(applicantFiles2);
        } else {
            throw new IllegalArgumentException("User with id " + id + " does not exist.");
        }
    }
}
