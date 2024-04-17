package com.example.todo.repository;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.todo.model.ApplicantDetails;

public interface ApplicantRepo extends JpaRepository<ApplicantDetails,Long> {
    @Query(value = "SELECT COUNT(*) AS total_applicants FROM public.applicant_details_table",nativeQuery = true)
    List<Map<String, Object>> CountAllApplicant();
    @Query(value = "SELECT  COUNT(*) AS total_applicant FROM public.applicant_details_table where registered_by = ?1",nativeQuery = true)
    List<Map<String, Object>> CountAllApplicantByRegistered(String registered_by);
    @Query(value = "SELECT * from public.applicant_details_table where registered_by = ?1",nativeQuery = true)
    List<Map<String, Object>> GetAllApplicantByRegistered(String registered_by);
}
