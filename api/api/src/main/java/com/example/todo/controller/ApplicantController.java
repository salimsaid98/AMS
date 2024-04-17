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
     // Count All Applicant
@GetMapping("/CountAllApplicant/")
    public ResponseEntity<List<Map<String, Object>>> GetApplicantFileByApplicantID() {
        List<Map<String, Object>> applicant = applicantServices.CountAllApplicant();
        return ResponseEntity.ok(applicant);
    }
    // Count All Applicant by User
 @GetMapping("/CountAllApplicantByUser/")
    public ResponseEntity<List<Map<String, Object>>> CountAllApplicantByRegistered(@RequestParam("register_by") String register_by) {
        List<Map<String, Object>> applicant = applicantServices.CountAllApplicantByRegistered(register_by);
        return ResponseEntity.ok(applicant);
    }

    // Get All Applicant By User
@GetMapping("/GetAllApplicantByUser/")
    public ResponseEntity<List<Map<String, Object>>> GetAllApplicantByRegistered(@RequestParam("register_by") String register_by) {
        List<Map<String, Object>> applicant = applicantServices.GetAllApplicantByRegistered(register_by);
        return ResponseEntity.ok(applicant);
    }
// Update Applicant
 @PutMapping("/updateApplicant{id}")
    public ResponseEntity<ApplicantDetails> updateUser(@PathVariable("id") Long id, @RequestBody ApplicantDetails applicantDetails) {
      try {
            ApplicantDetails applicantDetails2 = applicantServices.updateApplicant(id, applicantDetails);
            return new ResponseEntity<>(applicantDetails2, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
        }
     }
}
