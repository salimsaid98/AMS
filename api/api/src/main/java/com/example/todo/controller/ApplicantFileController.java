package com.example.todo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.todo.model.ApplicantFiles;
import com.example.todo.services.ApplicantFileServices;


@CrossOrigin
@RestController
@RequestMapping("api/ApplicantFile")
public class ApplicantFileController {

    private final ApplicantFileServices applicantFileServices;

    public ApplicantFileController(ApplicantFileServices applicantFileServices) {
        this.applicantFileServices = applicantFileServices;
    }

    @PostMapping("/addApplicantFile")
    public ResponseEntity<ApplicantFiles> addApplicantFile(@RequestBody ApplicantFiles applicantFiles) {
        ApplicantFiles applicantFiles2 = applicantFileServices.addApplicantFiles(applicantFiles);
        return new ResponseEntity<>(applicantFiles2, HttpStatus.CREATED);
    }

    @GetMapping("/getAllApplicantFile")
    public ResponseEntity<List<ApplicantFiles>>getAllApplicantFile(){
        List<ApplicantFiles> applicantFiles = applicantFileServices.getAllApplicantFiles();
        return new ResponseEntity<>(applicantFiles,HttpStatus.OK);

    }
     @DeleteMapping("/deleteApplicantFile{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") int id) {
        try {
            applicantFileServices.deleteApplicantFile(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
  @PutMapping("/updateApplicantFile{id}")
    public ResponseEntity<ApplicantFiles> updateUser(@PathVariable("id") Long id, @RequestBody ApplicantFiles updateapplicantFiles) {
        try {
            ApplicantFiles applicantFiles = applicantFileServices.updateApplicantFile(id, updateapplicantFiles);
            return new ResponseEntity<>(applicantFiles, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
        }
    }
}
