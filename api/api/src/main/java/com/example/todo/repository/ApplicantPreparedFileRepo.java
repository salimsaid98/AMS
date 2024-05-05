package com.example.todo.repository;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.todo.model.ApplicantPreparedFile;

public interface ApplicantPreparedFileRepo extends JpaRepository<ApplicantPreparedFile,Long> {
    @Query(value = "SELECT f.* , ap.applicant_prepared_fileid, pf.file_name FROM file_table f JOIN applicant_prepared_ffile ap ON f.fileID = ap.fileID JOIN applicant_details_table a ON a.applicantID = ap.applicantID JOIN prepared_file_table pf ON pf.prepared_fileid = ap.prepared_fileid WHERE a.applicantID = ?1", nativeQuery = true)
    List<Map<String, Object>> getAllFileByApplicantID(Long applicantid);

}
