package com.example.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.todo.model.File;

public interface FileRepo extends JpaRepository<File,Long>{
    
}
