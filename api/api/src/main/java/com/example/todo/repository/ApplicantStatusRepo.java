package com.example.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.todo.model.ApplicantStatus;

public interface ApplicantStatusRepo extends JpaRepository<ApplicantStatus,Long>{
    
}
