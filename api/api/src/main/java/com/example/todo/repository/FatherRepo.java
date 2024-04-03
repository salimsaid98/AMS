package com.example.todo.repository;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.todo.model.FatherDetails;

public interface FatherRepo extends JpaRepository<FatherDetails,Long>{
    
         @Query(value = "SELECT * FROM public.father_details_table Where applicantid =  ?1", nativeQuery = true)
     List<Map<String, Object>> getFatherByApplicantID(Long applicantid);
}
