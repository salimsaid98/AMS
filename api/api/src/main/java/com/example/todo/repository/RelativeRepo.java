package com.example.todo.repository;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.todo.model.Relative;

public interface RelativeRepo extends JpaRepository<Relative,Long> {
    @Query(value = "SELECT * FROM public.relative_table Where applicantid =  ?1", nativeQuery = true)
    List<Map<String, Object>> getRelativeByApplicantID(Long applicantid);
}
