package com.example.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.todo.model.BankAccont;

public interface BankRepo extends JpaRepository<BankAccont,Long> {
    
}
