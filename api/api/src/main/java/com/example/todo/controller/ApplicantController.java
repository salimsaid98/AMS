package com.example.todo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.todo.model.ApplicantDetails;
import com.example.todo.services.ApplicantServices;
@CrossOrigin
@RestController
@RequestMapping("api/applicant")
public class ApplicantController {
    public final ApplicantServices applicantServices;

    public ApplicantController(ApplicantServices applicantServices){
        this.applicantServices = applicantServices;
    }
    @PostMapping("/addApplicant")
    public ResponseEntity<ApplicantDetails> addApplicant(@RequestBody ApplicantDetails applicantDetails) {
       ApplicantDetails addApplicantDetails = applicantServices.addApplicantDetails(applicantDetails);
        return new ResponseEntity<>(addApplicantDetails, HttpStatus.CREATED);
    }
@GetMapping("/getAllApplicant")
    public ResponseEntity<List<ApplicantDetails>>getAllApplicant(){
        List<ApplicantDetails> applicant = applicantServices.getAllApplicantDetails();
        return new ResponseEntity<>(applicant,HttpStatus.OK);

    }

 @GetMapping("/getApplicantByID/{applicantid}")
    public ResponseEntity<ApplicantDetails> getUserById(@PathVariable("applicantid") int id) {
        Optional<ApplicantDetails> applicant = applicantServices.getUserById(id);
        return applicant.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

}
