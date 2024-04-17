package com.example.todo.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.todo.model.ApplicantFiles;

public interface ApplicantFileRepo extends JpaRepository<ApplicantFiles,Long> {
  

}
