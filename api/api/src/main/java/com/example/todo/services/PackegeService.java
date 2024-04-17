package com.example.todo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.todo.model.PackageDetails;
import com.example.todo.repository.PackageRepo;
@Service
public class PackegeService {
    private final PackageRepo packageRepo;
@Autowired
    public PackegeService(PackageRepo packageRepo){
        this.packageRepo = packageRepo;
    }

// Add packege
public PackageDetails addPackage(PackageDetails packages){
    return this.packageRepo.save(packages);
}
// Get All Packege
public List<PackageDetails> getAllpackegesDetails(){
    return this.packageRepo.findAll();
}
}
