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

import com.example.todo.model.ApplicantDetails_and_File;
import com.example.todo.services.ApplicantDetails_and_File_Services;
@CrossOrigin
@RestController
@RequestMapping("api/ApplicantDetails_and_File")
public class ApplicantDetails_and_File_Controller {
   
    private final ApplicantDetails_and_File_Services applicantDetails_and_File_Services;

public ApplicantDetails_and_File_Controller(ApplicantDetails_and_File_Services applicantDetails_and_File_Services){
    this.applicantDetails_and_File_Services = applicantDetails_and_File_Services;
}
    @PostMapping("/addApplicant_and_file")
    public ResponseEntity<ApplicantDetails_and_File> addApplicantFile(@RequestBody ApplicantDetails_and_File applicantDetails_and_File) {
       ApplicantDetails_and_File applicantDetails_and_File2 = applicantDetails_and_File_Services.addApplicantandFile(applicantDetails_and_File);
        return new ResponseEntity<>(applicantDetails_and_File2, HttpStatus.CREATED);
    }

    @GetMapping("/getAllApplicant_and_file")
    public ResponseEntity<List<ApplicantDetails_and_File>>getAllApplicantandFile(){
        List<ApplicantDetails_and_File> applicantandfile = applicantDetails_and_File_Services.getAllApplicantandFile();
        return new ResponseEntity<>(applicantandfile,HttpStatus.OK);

    }
    @GetMapping("/GetApplicantFileByApplicantID/")
    public ResponseEntity<List<Map<String, Object>>> GetApplicantFileByApplicantID(@RequestParam("applicantid") Long applicantid) {
        List<Map<String, Object>> apfile = applicantDetails_and_File_Services.getApplicantFileByID(applicantid);
        return ResponseEntity.ok(apfile);
    }


}

