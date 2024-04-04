package com.example.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.todo.model.IRCCFile;

public interface IRCCFileRepo extends JpaRepository<IRCCFile,Long>{
    
}
