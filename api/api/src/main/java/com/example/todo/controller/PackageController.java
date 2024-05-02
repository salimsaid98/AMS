package com.example.todo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.todo.model.PackageDetails;
import com.example.todo.services.PackegeService;

@CrossOrigin
@RestController
@RequestMapping("api/Package")
public class PackageController {
    private final PackegeService packegeService;

    public PackageController(PackegeService packegeService) {
        this.packegeService = packegeService;

    }

    @PostMapping("/addPackage")
    public ResponseEntity<PackageDetails> addPackage(@RequestBody PackageDetails packageDetails) {
        PackageDetails packageDetails2 = packegeService.addPackage(packageDetails);
        return new ResponseEntity<>(packageDetails2, HttpStatus.CREATED);
    }

    @GetMapping("/getAllPackage")
    public ResponseEntity<List<PackageDetails>> getAllMother() {
        List<PackageDetails> packageDetails = packegeService.getAllpackegesDetails();
        return new ResponseEntity<>(packageDetails, HttpStatus.OK);

    }

    // Update Package
    @PutMapping("/updatePackage{id}")
    public ResponseEntity<PackageDetails> updatePackage(@PathVariable("id") Long id,
            @RequestBody PackageDetails packageDetails) {
        try {
            PackageDetails packageDetails2 = packegeService.updatePackageDetails(id, packageDetails);
            return new ResponseEntity<>(packageDetails2, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/deletePackage{id}")
    public ResponseEntity<Void> deletePackage(@PathVariable("id") int id) {
        try {
            packegeService.deletePackage(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
