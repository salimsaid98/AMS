package com.example.todo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.todo.model.PackageDetails;
import com.example.todo.repository.PackageRepo;

@Service
public class PackegeService {
    private final PackageRepo packageRepo;

    @Autowired
    public PackegeService(PackageRepo packageRepo) {
        this.packageRepo = packageRepo;
    }

    // Add packege
    public PackageDetails addPackage(PackageDetails packages) {
        return this.packageRepo.save(packages);
    }

    // Get All Packege
    public List<PackageDetails> getAllpackegesDetails() {
        return this.packageRepo.findAll();
    }

    // Delete Package
    public void deletePackage(long id) {
        packageRepo.deleteById(id);
    }

    public PackageDetails updatePackageDetails(Long id, PackageDetails updatePackageDetails) {
        Optional<PackageDetails> existingPackage = packageRepo.findById((long) id);
        if (existingPackage.isPresent()) {
            PackageDetails packageDetails = existingPackage.get();
            packageDetails.setPackage_name(updatePackageDetails.getPackage_name());
            packageDetails.setPackage_currency(updatePackageDetails.getPackage_currency());
            packageDetails.setPackage_parecentage(updatePackageDetails.getPackage_parecentage());
            return packageRepo.save(packageDetails);
        } else {
            throw new IllegalArgumentException("User with id " + id + " does not exist.");
        }
    }

}
