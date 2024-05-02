package com.example.todo.services;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.todo.model.ApplicantStatus;
import com.example.todo.repository.ApplicantStatusRepo;

@Service
public class ApplicantStatusServices {
    private final ApplicantStatusRepo applicantStatusRepo;
@Autowired
    public ApplicantStatusServices(ApplicantStatusRepo applicantStatusRepo){
        this.applicantStatusRepo = applicantStatusRepo;
    }

public ApplicantStatus addApplicantStatus(ApplicantStatus applicantStatus){
    return this.applicantStatusRepo.save(applicantStatus);

}
public List<ApplicantStatus> getAllApplicantStstus(){
    return this.applicantStatusRepo.findAll();
}
// get All Applicant Details where Status is Pending By User
public List<Map<String,Object>> getAllAllApplicantStatusIsPendingByUser(String register_by){
    return applicantStatusRepo.getAllApplicantStatusIsPendingByUser(register_by);
}
// get All Applicant Details where Status is Approved By User
public List<Map<String,Object>> getAllAllApplicantStatusIsApprovedByUser(String register_by){
    return applicantStatusRepo.getAllApplicantStatusIsApprovedByUser(register_by);
}
// get All Applicant Details where Status is Pending 
public List<Map<String,Object>> getAllAllApplicantStatusIsPending(){
    return applicantStatusRepo.getAllApplicantStatusIsPending();
}
// get All Applicant Details where Status is Approved
public List<Map<String,Object>> getAllAllApplicantStatusIsApproved(){
    return applicantStatusRepo.getAllApplicantStatusIsApproved();
}
// Count All Applicant Status where Status is Pending By Register User
public List<Map<String,Object>> countTotalPendingByUser(String register_by){
    return applicantStatusRepo.countTotalPendingByUser(register_by);
}
// Count All Applicant Status where Status is Approved By Register User
public List<Map<String,Object>> countTotalApprovedByUser(String register_by){
    return applicantStatusRepo.countTotalApprovedByUser(register_by);
}
// Count All Applicant Status where Status is Pending 
public List<Map<String,Object>> countAllPending(){
    return applicantStatusRepo.countAllPending();
}
// Count All Applicant Status where Status is Approved
public List<Map<String,Object>> countAllApproved(){
    return applicantStatusRepo.countAllApproved();
}
 // Update Status To Approved 
 public ApplicantStatus updateStatus(Long applicantStatusID, String status) {
    // Check if the user exists
    Optional<ApplicantStatus> existapplicantStatusId = applicantStatusRepo.getByapplicantStatusID(applicantStatusID);
    if (existapplicantStatusId.isPresent()) {
        ApplicantStatus applicantStatus = existapplicantStatusId.get();
        
        // Update the roles
        applicantStatus.setStatus(status);
        
        // Save the updated user information
        return applicantStatusRepo.save(applicantStatus);
    } else {
        // User does not exist, throw an exception or handle accordingly
        throw new IllegalArgumentException("User does not exist");
    }
}
// get All Applicant Details where Status is Pending By User
public List<Map<String,Object>> getAllAllApplicantStatusByApplicantID(Long applicantID){
    return applicantStatusRepo.getAllApplicantStatusIByApplicantID(applicantID);
}
}
