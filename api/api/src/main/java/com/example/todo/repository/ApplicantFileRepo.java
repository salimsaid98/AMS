package com.example.todo.repository;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.todo.model.ApplicantFiles;

public interface ApplicantFileRepo extends JpaRepository<ApplicantFiles,Long> {
    @Query(value = "SELECT COUNT(*) AS total_applicantsFROM public.applicant_details_table;",nativeQuery = true)
    List<Map<String, Object>> CountAllApplicant();

}
