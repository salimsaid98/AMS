package com.example.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.todo.model.InvestersDetails;

public interface InvestorsRepo extends JpaRepository<InvestersDetails,Long>{
    
}
