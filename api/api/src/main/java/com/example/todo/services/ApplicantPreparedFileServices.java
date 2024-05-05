package com.example.todo.services;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.todo.model.ApplicantPreparedFile;
import com.example.todo.repository.ApplicantPreparedFileRepo;

@Service
public class ApplicantPreparedFileServices {
    @Autowired
    private final ApplicantPreparedFileRepo applicantPreparedFileRepo;

    public ApplicantPreparedFileServices(ApplicantPreparedFileRepo applicantPreparedFileRepo) {
        this.applicantPreparedFileRepo = applicantPreparedFileRepo;
    }

    public ApplicantPreparedFile addApplicantPreparedFile(ApplicantPreparedFile applicantPreparedFile) {
        return applicantPreparedFileRepo.save(applicantPreparedFile);
    }

    public List<ApplicantPreparedFile> getAllApplicantPreparedFile() {
        return applicantPreparedFileRepo.findAll();
    }
      // Get All Applicant Files and By Id
      public List<Map<String,Object>> getApplicantFileByID(Long applicantid){
        return this.applicantPreparedFileRepo.getAllFileByApplicantID(applicantid);
}
           // Delete Prepared File
           public void deleteApplicantPreparedile(long id) {
            applicantPreparedFileRepo.deleteById(id);
        }
}
