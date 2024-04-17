package com.example.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.todo.model.KinDetails;

public interface KinRepo extends JpaRepository<KinDetails,Long> {
    
}
