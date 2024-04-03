package com.example.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.todo.model.ApplicantDetails;

public interface ApplicantRepo extends JpaRepository<ApplicantDetails,Long> {
    
}
