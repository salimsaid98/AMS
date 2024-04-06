package com.example.todo.repository;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.todo.model.ApplicantDetails_and_File;

public interface ApplicantDetails_and_File_Repo extends JpaRepository<ApplicantDetails_and_File,Long>{
     
    @Query(value = " SELECT f.*, ap.file_name FROM file_table f JOIN applicant_details_and_File_table af ON f.fileID = af.fileID JOIN applicant_details_table a ON a.applicantID = af.applicantID JOIN applicant_file_table ap ON ap.applicant_fileid = af.applicant_fileid WHERE a.applicantID =  ?1", nativeQuery = true)
     List<Map<String, Object>> getAllFileByApplicantID(Long applicantid);
}
