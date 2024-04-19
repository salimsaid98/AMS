package com.example.todo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.todo.model.InvestersDetails;
import com.example.todo.services.InvestorsServices;

@CrossOrigin
@RestController
@RequestMapping("api/Investors")
public class InvestorsController {
    private final InvestorsServices investorsServices;

    public InvestorsController(InvestorsServices investorsServices) {
        this.investorsServices = investorsServices;
    }

    @PostMapping("/addInvestors")
    public ResponseEntity<InvestersDetails> addInvestors(@RequestBody InvestersDetails investersDetails) {
        InvestersDetails investersDetails2 = investorsServices.addInvestors(investersDetails);
        return new ResponseEntity<>(investersDetails2, HttpStatus.CREATED);
    }

    @GetMapping("/getInvestors")
    public ResponseEntity<List<InvestersDetails>> getAllInvestors() {
        List<InvestersDetails> investersDetails = investorsServices.getAllInvestors();
        return new ResponseEntity<>(investersDetails, HttpStatus.OK);

    }
    @GetMapping("/getInvestorsByID/{investorsID}")
    public ResponseEntity<InvestersDetails> getInvestorsById(@PathVariable("investorsID") int id) {
        Optional<InvestersDetails> investors = investorsServices.getInvestorsById(id);
        return investors.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}