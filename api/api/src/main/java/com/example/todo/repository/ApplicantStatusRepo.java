package com.example.todo.repository;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.todo.model.ApplicantStatus;

public interface ApplicantStatusRepo extends JpaRepository<ApplicantStatus,Long>{
    @Query(value = "select a.* ,aps.status from applicant_details_table a JOIN applicant_status_table aps ON a.applicantid = aps.applicantid where aps.status = 'Pending'",nativeQuery = true)
    List<Map<String, Object>> getAllApplicantStatusIsPending();
    @Query(value = "select a.* ,aps.status from applicant_details_table a JOIN applicant_status_table aps ON a.applicantid = aps.applicantid where aps.status = 'Pending' and a.registered_by = ?1 ",nativeQuery = true)
    List<Map<String, Object>> getAllApplicantStatusIsPendingByUser(String register_by);
    @Query(value = "SELECT  COUNT(*) AS total_pending FROM public.applicant_status_table aps join applicant_details_table ad on aps.applicantid = ad.applicantid where aps.status = 'Pending' and ad.registered_by  = ?1 ",nativeQuery = true)
    List<Map<String, Object>> countTotalPendingByUser(String register_by);
    @Query(value = "SELECT  COUNT(*) AS total_pending FROM public.applicant_status_table aps join applicant_details_table ad on aps.applicantid = ad.applicantid where aps.status = 'Pending' ",nativeQuery = true)
    List<Map<String, Object>> countAllPending();
}
