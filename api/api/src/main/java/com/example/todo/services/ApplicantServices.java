package com.example.todo.services;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.todo.model.ApplicantDetails;
import com.example.todo.repository.ApplicantRepo;
@Service
public class ApplicantServices {
    public final ApplicantRepo applicantRepo;
@Autowired
    public ApplicantServices(ApplicantRepo applicantRepo){
        this.applicantRepo = applicantRepo;
    }
// Save Applicant Details
    public ApplicantDetails addApplicantDetails(ApplicantDetails applicantDetails){
        return this.applicantRepo.save(applicantDetails);
    }
// Get All Applicant
    public List<ApplicantDetails> getAllApplicantDetails(){
        return this.applicantRepo.findAll();
    }
// Get Applicant By ID
    public Optional<ApplicantDetails> getUserById(long id) {
        return applicantRepo.findById( id);
    }
    // Count All Applicant 
    public List<Map<String,Object>> CountAllApplicant(){
        return applicantRepo.CountAllApplicant();
}
// Count All Applicant By Register
public List<Map<String,Object>> CountAllApplicantByRegistered(String register_by){
    return applicantRepo.CountAllApplicantByRegistered(register_by);
}
// Count All Applicant By Register
public List<Map<String,Object>> GetAllApplicantByRegistered(String register_by){
    return applicantRepo.GetAllApplicantByRegistered(register_by);
}
   // Update Applicant details 
public ApplicantDetails updateApplicant(Long id, ApplicantDetails updateapplicantDetails) {
    Optional<ApplicantDetails> existingApplicant = applicantRepo.findById((long) id);
    if (existingApplicant.isPresent()) {
        ApplicantDetails applicantDetails = existingApplicant.get();
        applicantDetails.setApplicantfullName(updateapplicantDetails.getApplicantfullName());
        applicantDetails.setApplicantemailAddress(updateapplicantDetails.getApplicantemailAddress());
        applicantDetails.setApplicanthomeAddress(updateapplicantDetails.getApplicanthomeAddress());
        applicantDetails.setApplicantbusinessNumber(updateapplicantDetails.getApplicantbusinessNumber());
        applicantDetails.setApplicantphoneNumber(updateapplicantDetails.getApplicantphoneNumber());
        applicantDetails.setApplicantwebsite(updateapplicantDetails.getApplicantwebsite());
        applicantDetails.setApplicantnationalIdNumber(updateapplicantDetails.getApplicantnationalIdNumber());
        applicantDetails.setApplicantpassportNumber(updateapplicantDetails.getApplicantpassportNumber());
        applicantDetails.setApplicantoccupation(updateapplicantDetails.getApplicantoccupation());
        applicantDetails.setApplicantmarriedStatus(updateapplicantDetails.getApplicantmarriedStatus());
        applicantDetails.setRegisteredBy(updateapplicantDetails.getRegisteredBy());
        applicantDetails.setRegisteredDate(updateapplicantDetails.getRegisteredDate());
        applicantDetails.setBank_name(updateapplicantDetails.getBank_name());
        applicantDetails.setBankAccount_no(updateapplicantDetails.getBankAccount_no());
        applicantDetails.setCountry_to_visit(updateapplicantDetails.getCountry_to_visit());
        
        // Update other properties as needed
        return applicantRepo.save(applicantDetails);
    } else {
        throw new IllegalArgumentException("User with id " + id + " does not exist.");
    }
}
}
