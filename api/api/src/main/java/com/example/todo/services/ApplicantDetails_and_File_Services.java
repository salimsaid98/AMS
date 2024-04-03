package com.example.todo.services;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.example.todo.model.ApplicantDetails_and_File;
import com.example.todo.repository.ApplicantDetails_and_File_Repo;
@Service
public class ApplicantDetails_and_File_Services {

    private final ApplicantDetails_and_File_Repo applicantDetails_and_File_Repo;

    public ApplicantDetails_and_File_Services(ApplicantDetails_and_File_Repo applicantDetails_and_File_Repo){
        this.applicantDetails_and_File_Repo = applicantDetails_and_File_Repo;
    }
   //Save  ApplicantDetails and File
    public ApplicantDetails_and_File addApplicantandFile(ApplicantDetails_and_File applicantDetails_and_File){
        return this.applicantDetails_and_File_Repo.save(applicantDetails_and_File);
    } 

    // Get All Applicant and file
    public List<ApplicantDetails_and_File> getAllApplicantandFile(){
        return this.applicantDetails_and_File_Repo.findAll();
    }

    // Get All Applicant Files and By Id
    public List<Map<String,Object>> getApplicantFileByID(Long applicantid){
            return this.applicantDetails_and_File_Repo.getAllFileByApplicantID(applicantid);
    }
}
