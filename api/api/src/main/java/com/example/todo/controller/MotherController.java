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

import com.example.todo.model.MotherDetails;
import com.example.todo.services.MotherServices;
@CrossOrigin
@RestController
@RequestMapping("api/MotherDetails")
public class MotherController {
        public final MotherServices motherServices;
    public MotherController(MotherServices motherServices){
        this.motherServices = motherServices;
    }
    @PostMapping("/addMother")
    public ResponseEntity<MotherDetails> addMother(@RequestBody MotherDetails motherDetails) {
       MotherDetails motherDetails2 = motherServices.addMother(motherDetails);
        return new ResponseEntity<>(motherDetails2, HttpStatus.CREATED);
    }
@GetMapping("/getAllMother")
    public ResponseEntity<List<MotherDetails>>getAllMother(){
        List<MotherDetails> motherDetails = motherServices.getAllMother();
        return new ResponseEntity<>(motherDetails,HttpStatus.OK);

    }
 @GetMapping("/GetMotherByApplicantID/")
    public ResponseEntity<List<Map<String, Object>>> getWifeByApplicantID(@RequestParam("applicantid") Long applicantid) {
        List<Map<String, Object>> mother = motherServices.getMotherByApplicantID(applicantid);
        return ResponseEntity.ok(mother);
    } 
}
