package com.example.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.todo.model.PreparedFile;

public interface PreperedFileRepo extends JpaRepository<PreparedFile,Long>{
    
}
