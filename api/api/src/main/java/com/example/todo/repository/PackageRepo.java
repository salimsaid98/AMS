package com.example.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.todo.model.PackageDetails;

public interface PackageRepo extends JpaRepository<PackageDetails , Long>{
    
}
