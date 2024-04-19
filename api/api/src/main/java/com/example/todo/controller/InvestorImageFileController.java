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

import com.example.todo.model.InvestorImageFile;
import com.example.todo.services.InvestorImageFileServices;
@CrossOrigin
@RestController
@RequestMapping("api/InvestorImageFile")
public class InvestorImageFileController {
    private final InvestorImageFileServices investorImageFileServices;

    public InvestorImageFileController(InvestorImageFileServices investorImageFileServices){
        this.investorImageFileServices = investorImageFileServices;
    }
@PostMapping("/addInvestorImageFile")
public ResponseEntity<InvestorImageFile> addInvestorImageFile(@RequestBody InvestorImageFile investorImageFile){
    InvestorImageFile investorImageFile2= investorImageFileServices.addInvestorImageFile(investorImageFile);
    return new ResponseEntity<>(investorImageFile2,HttpStatus.OK); 
}
@GetMapping("/GetInvestorsImageFileByInvestorsID/")
public ResponseEntity<List<Map<String, Object>>> GetApplicantFileByApplicantID(@RequestParam("investorsID") Long investorsID) {
    List<Map<String, Object>> invest = investorImageFileServices.getInvestorsImageFileByInvestorsID(investorsID);
    return ResponseEntity.ok(invest);
}
}
