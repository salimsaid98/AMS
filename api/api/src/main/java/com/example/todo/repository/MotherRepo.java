package com.example.todo.repository;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.todo.model.MotherDetails;

public interface MotherRepo extends JpaRepository<MotherDetails,Long> {
     @Query(value = "SELECT * FROM public.mother_details_table Where applicantid =  ?1", nativeQuery = true)
     List<Map<String, Object>> getMotherByApplicantID(Long applicantid);
}
