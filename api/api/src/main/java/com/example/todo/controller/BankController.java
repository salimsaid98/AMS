package com.example.todo.controller;

import java.util.List;
import java.util.Map;

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

import com.example.todo.model.BankAccont;
import com.example.todo.services.BankServices;

@CrossOrigin
@RestController
@RequestMapping("api/Bank")
public class BankController {
    private final BankServices bankServices;

    public BankController(BankServices bankServices) {
        this.bankServices = bankServices;
    }

    @PostMapping("/addBank")
    public ResponseEntity<BankAccont> addIBank(@RequestBody BankAccont bankAccont) {
        BankAccont bankAccont2 = bankServices.addBankAccont(bankAccont);
        return new ResponseEntity<>(bankAccont2, HttpStatus.CREATED);
    }

    @GetMapping("/getBank")
    public ResponseEntity<List<BankAccont>> getAllBannk() {
        List<BankAccont> bankAcconts = bankServices.getAllBankAccont();
        return new ResponseEntity<>(bankAcconts, HttpStatus.OK);

    }
    @GetMapping("/GetBankByinvestorsID/")
    public ResponseEntity<List<Map<String, Object>>> getBankByInvestorsID(@RequestParam("investorsID") Long investorsID) {
        List<Map<String, Object>> bankAccount = bankServices.getBankByInvestorsID(investorsID);
        return ResponseEntity.ok(bankAccount);
    } 
    
    // Update Wife
    @PutMapping("/updateBank{id}")
    public ResponseEntity<BankAccont> updateMother(@PathVariable("id") Long id, @RequestBody BankAccont bankAccont) {
        try {
            BankAccont bankAccont2 = bankServices.updateBank(id, bankAccont);
            return new ResponseEntity<>(bankAccont2, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
        }
    }
}
