package com.example.todo.repository;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.todo.model.ApplicantDetails;

public interface ApplicantRepo extends JpaRepository<ApplicantDetails,Long> {
    @Query(value = "SELECT COUNT(*) AS total_applicants FROM public.applicant_details_table",nativeQuery = true)
    List<Map<String, Object>> CountAllApplicant();
}
