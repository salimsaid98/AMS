package com.example.todo.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.todo.model.Investors_Package;
import com.example.todo.services.Investor_PackageServices;

@CrossOrigin
@RestController
@RequestMapping("api/Investors_Package")
public class Investors_PackageController {
    private final Investor_PackageServices ineInvestor_PackageServices;

    public Investors_PackageController(Investor_PackageServices investor_PackageServices) {
        this.ineInvestor_PackageServices = investor_PackageServices;
    }

    @PostMapping("/addInvestors_package")
    public ResponseEntity<Investors_Package> addInvestors_package(@RequestBody Investors_Package investors_Package) {
        Investors_Package investors_Package2 = ineInvestor_PackageServices.addInvestors_Package(investors_Package);
        return new ResponseEntity<>(investors_Package2, HttpStatus.OK);
    }

    @GetMapping("/GetInvestors_PackageByinvestorsID/")
    public ResponseEntity<List<Map<String, Object>>> getInvestors_PackageByinvestorsID(
            @RequestParam("investorsID") Long investorsID) {
        List<Map<String, Object>> investors_package = ineInvestor_PackageServices
                .getInvestors_PackageByinvestorsID(investorsID);
        return ResponseEntity.ok(investors_package);
    }
        // Update Investors
    @PutMapping("/updateInvestorsPackage{id}")
    public ResponseEntity<Investors_Package> updateInvestorsPackage(@PathVariable("id") Long id,
            @RequestBody Investors_Package investors_Package) {
        try {
            Investors_Package investors_Package2 = ineInvestor_PackageServices.updateInvestersPackage(id,investors_Package);
            return new ResponseEntity<>(investors_Package2, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
@GetMapping("/getInvestors_PackagebyID/{Investors_PackageID}")
    public ResponseEntity<Investors_Package> getInvestorsPackageById(@PathVariable("Investors_PackageID") int id) {
        Optional<Investors_Package> investorspackage = ineInvestor_PackageServices.getInvestor_PackageByID(id);
        return investorspackage.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
