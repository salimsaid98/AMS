package com.example.todo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.todo.model.KinDetails;
import com.example.todo.services.KinServices;

@CrossOrigin
@RestController
@RequestMapping("api/Kin")
public class KinController {
    
    private final KinServices kinServices;

    public KinController(KinServices kinServices) {
        this.kinServices = kinServices;
    }

    @PostMapping("/addKin")
    public ResponseEntity<KinDetails> addKin(@RequestBody KinDetails kinDetails) {
        KinDetails kinDetails2 = kinServices.addKinDetails(kinDetails);
        return new ResponseEntity<>(kinDetails2, HttpStatus.CREATED);
    }

    @GetMapping("/getKin")
    public ResponseEntity<List<KinDetails>> getAllKin() {
        List<KinDetails> kinDetails = kinServices.getAllKinDetails();
        return new ResponseEntity<>(kinDetails, HttpStatus.OK);

    }
}
