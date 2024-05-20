package com.example.todo.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

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

    // Update Investors
    @PutMapping("/updateInvestors{id}")
    public ResponseEntity<InvestersDetails> updateInvestorsr(@PathVariable("id") Long id,
            @RequestBody InvestersDetails investersDetails) {
        try {
            InvestersDetails investersDetails2 = investorsServices.updateInvestersDetails(id, investersDetails);
            return new ResponseEntity<>(investersDetails2, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/deleteInvestors{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") int id) {
        try {
            investorsServices.deleteInvestors(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
     // Count All Investors
@GetMapping("/CountAllInvestors/")
    public ResponseEntity<List<Map<String, Object>>> countInvestors() {
        List<Map<String, Object>> investors = investorsServices.CountAllInvestors();
        return ResponseEntity.ok(investors);
    }
}
