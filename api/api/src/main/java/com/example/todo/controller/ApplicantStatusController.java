package com.example.todo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.todo.model.ApplicantStatus;
import com.example.todo.services.ApplicantStatusServices;

@CrossOrigin
@RestController
@RequestMapping("api/ApplicantStatus")
public class ApplicantStatusController {
    
    private final ApplicantStatusServices applicantStatusServices;
    public ApplicantStatusController(ApplicantStatusServices applicantStatusServices){
        this.applicantStatusServices = applicantStatusServices;
    }
    @PostMapping("/addApplicantStatus")
    public ResponseEntity<ApplicantStatus> addApplicantStatus(@RequestBody ApplicantStatus applicantStatus) {
        ApplicantStatus applicantStatus2 = applicantStatusServices.addApplicantStatus(applicantStatus);
        return new ResponseEntity<>(applicantStatus2, HttpStatus.CREATED);
    }

    @GetMapping("/getAllApplicantStaus")
    public ResponseEntity<List<ApplicantStatus>>getAllApplicantStatus(){
        List<ApplicantStatus> applicantStatus = applicantStatusServices.getAllApplicantStstus();
        return new ResponseEntity<>(applicantStatus,HttpStatus.OK);

    }
// get All Applicant where Status is Pending By User

    @GetMapping("/GetAllApplicantStatusIsPendingByUser/")
    public ResponseEntity<List<Map<String, Object>>> GetAllApplicantStatusIsPendingByUser(@RequestParam("register_by") String register_by) {
        List<Map<String, Object>> applicantStatusIsPending = applicantStatusServices.getAllAllApplicantStatusIsPendingByUser(register_by); 
        return ResponseEntity.ok(applicantStatusIsPending);
    }
    // get All Applicant where Status is Pending By User

    @GetMapping("/GetAllApplicantStatusIsApprovedByUser/")
    public ResponseEntity<List<Map<String, Object>>> GetAllApplicantStatusIsApprovedByUser(@RequestParam("register_by") String register_by) {
        List<Map<String, Object>> applicantStatusIsPending = applicantStatusServices.getAllAllApplicantStatusIsApprovedByUser(register_by);
        return ResponseEntity.ok(applicantStatusIsPending);
    }
// get All Applicant where Status is Pending

@GetMapping("/GetAllApplicantStatusIsPending/")
public ResponseEntity<List<Map<String, Object>>> GetAllApplicantStatusIsPending() {
    List<Map<String, Object>> applicantStatusIsPending = applicantStatusServices.getAllAllApplicantStatusIsPending();
    return ResponseEntity.ok(applicantStatusIsPending);
}
@GetMapping("/GetAllApplicantStatusIsApproved/")
public ResponseEntity<List<Map<String, Object>>> GetAllApplicantStatusIsApproved() {
    List<Map<String, Object>> applicantStatusIsApproved = applicantStatusServices.getAllAllApplicantStatusIsApproved();
    return ResponseEntity.ok(applicantStatusIsApproved);
}
// Count All Applicant Status where Status is Pending By Register User
    @GetMapping("/countTotalPendingByUser/")
    public ResponseEntity<List<Map<String, Object>>> countTotalPendingByUser(@RequestParam("register_by") String register_by) {
        List<Map<String, Object>> applicantStatusIsPending = applicantStatusServices.countTotalPendingByUser(register_by); 
        return ResponseEntity.ok(applicantStatusIsPending);
    }
    // Count All Applicant Status where Status is Pending By Register User
    @GetMapping("/countTotalApprovedByUser/")
    public ResponseEntity<List<Map<String, Object>>> countTotalApprovedByUser(@RequestParam("register_by") String register_by) {
        List<Map<String, Object>> applicantStatusIsPending = applicantStatusServices.countTotalApprovedByUser(register_by); 
        return ResponseEntity.ok(applicantStatusIsPending);
    }
    // Count All Applicant Status where Status is Pending 
    @GetMapping("/countTotalPending/")
    public ResponseEntity<List<Map<String, Object>>> countAllPending() {
        List<Map<String, Object>> applicantStatusIsPending = applicantStatusServices.countAllPending();
        return ResponseEntity.ok(applicantStatusIsPending);
    }
    // Count All Applicant Status where Status is Approved
    @GetMapping("/countTotalApproved/")
    public ResponseEntity<List<Map<String, Object>>> countAllApproved() {
        List<Map<String, Object>> applicantStatusIsApproved = applicantStatusServices.countAllApproved();
        return ResponseEntity.ok(applicantStatusIsApproved);
    }
       // Endpoint for changing user roles
        @PutMapping("/changingApplicantStatus/")
        public ResponseEntity<Void> updateStatus(@RequestParam Long applicantStatusID,String status ) {
            try {
                applicantStatusServices.updateStatus(applicantStatusID, status);
                return ResponseEntity.ok().build();
            } catch (IllegalArgumentException e) {
                // User does not exist, return 404 Not Found
                return ResponseEntity.notFound().build();
            }
        }
@GetMapping("/GetAllApplicantByApplicantID/")
public ResponseEntity<List<Map<String, Object>>> GetAllApplicantByApplicantID(@RequestParam("applicantID") Long applicantID) {
    List<Map<String, Object>> applicant = applicantStatusServices.getAllAllApplicantStatusByApplicantID(applicantID);
    return ResponseEntity.ok(applicant);
}
}
