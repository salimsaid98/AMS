package com.example.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.todo.model.ApplicantImageFile;

public interface ApplicantImageFileRepo extends JpaRepository<ApplicantImageFile,Long>{
    
}
