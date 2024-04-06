package com.example.todo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.todo.model.ApplicantPreparedFile;
import com.example.todo.services.ApplicantPreparedFileServices;

@CrossOrigin
@RestController
@RequestMapping("api/ApplicantPreparedFile")
public class ApplicantPreparedFileController {
    private final ApplicantPreparedFileServices applicantPreparedFileServices;

    public ApplicantPreparedFileController(ApplicantPreparedFileServices applicantDetails_and_File_Services){
        this.applicantPreparedFileServices = applicantDetails_and_File_Services;
    }
    @PostMapping("/addApplicantPreparedFile")
    public ResponseEntity<ApplicantPreparedFile> addApplicantPreparedFile(@RequestBody ApplicantPreparedFile applicantPreparedFile) {
        ApplicantPreparedFile applicantDetails_and_File2 = applicantPreparedFileServices.addApplicantPreparedFile(applicantPreparedFile);
        return new ResponseEntity<>(applicantDetails_and_File2, HttpStatus.CREATED);
    }

    @GetMapping("/getAllApplicantPreparedFile")
    public ResponseEntity<List<ApplicantPreparedFile>>getAllApplicantPreparedFile(){
        List<ApplicantPreparedFile> applicantPreparedFiles = applicantPreparedFileServices.getAllApplicantPreparedFile();
        return new ResponseEntity<>(applicantPreparedFiles,HttpStatus.OK);

    }
    @GetMapping("/GetApplicantFileByApplicantID/")
    public ResponseEntity<List<Map<String, Object>>> GetApplicantFileByApplicantID(@RequestParam("applicantid") Long applicantid) {
        List<Map<String, Object>> apfile = applicantPreparedFileServices.getApplicantFileByID(applicantid);
        return ResponseEntity.ok(apfile);
    }

}
