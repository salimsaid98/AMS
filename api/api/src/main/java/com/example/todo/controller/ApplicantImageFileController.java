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

import com.example.todo.model.ApplicantImageFile;
import com.example.todo.services.ApplicantImageFileServices;
@CrossOrigin
@RestController
@RequestMapping("api/ApplicantImageFile")
public class ApplicantImageFileController {
    private final ApplicantImageFileServices applicantImageFileServices;

    public ApplicantImageFileController(ApplicantImageFileServices applicantImageFileServices){
        this.applicantImageFileServices = applicantImageFileServices;
    }

    @PostMapping("/addApplicantImageFile")
    public ResponseEntity<ApplicantImageFile> addApplicantImageFile(@RequestBody ApplicantImageFile applicantImageFile) {
        ApplicantImageFile applicantImageFile2 = applicantImageFileServices.addApplicantImageFile(applicantImageFile);
        return new ResponseEntity<>(applicantImageFile2, HttpStatus.CREATED);
    }

    @GetMapping("/getAllApplicantPreparedFile")
    public ResponseEntity<List<ApplicantImageFile>>getAllApplicantPreparedFile(){
        List<ApplicantImageFile> applicantImageFiles = applicantImageFileServices.getAllApplicantImageFile();
        return new ResponseEntity<>(applicantImageFiles,HttpStatus.OK);

    }
    // @GetMapping("/GetApplicantFileByApplicantID/")
    // public ResponseEntity<List<Map<String, Object>>> GetApplicantFileByApplicantID(@RequestParam("applicantid") Long applicantid) {
    //     List<Map<String, Object>> apfile = applicantPreparedFileServices.getApplicantFileByID(applicantid);
    //     return ResponseEntity.ok(apfile);
    // }

}
