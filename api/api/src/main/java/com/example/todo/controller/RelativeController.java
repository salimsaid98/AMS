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

import com.example.todo.model.Relative;
import com.example.todo.services.RelativeServices;

@CrossOrigin
@RestController
@RequestMapping("api/Relative")
public class RelativeController {
    private final RelativeServices relativeServices;

    public RelativeController(RelativeServices relativeServices) {
        this.relativeServices = relativeServices;
    }

    @PostMapping("/addRelative")
    public ResponseEntity<Relative> addRelative(@RequestBody Relative relative) {
        Relative relative2 = relativeServices.addrelative(relative);
        return new ResponseEntity<>(relative2, HttpStatus.CREATED);
    }

    @GetMapping("/getAllRelative")
    public ResponseEntity<List<Relative>> getAllWife() {
        List<Relative> relative = relativeServices.getAllRelative();
        return new ResponseEntity<>(relative, HttpStatus.OK);

    }
    @GetMapping("/GetrelativeByApplicantID/")
    public ResponseEntity<List<Map<String, Object>>> getRelativeByApplicantID(@RequestParam("applicantid") Long applicantid) {
        List<Map<String, Object>> relative = relativeServices.geRelativeByApplicantID(applicantid);
        return ResponseEntity.ok(relative);
    }
        // Update Relative
@PutMapping("/updateRelative{id}")
public ResponseEntity<Relative> updateMother(@PathVariable("id") Long id, @RequestBody Relative relative) {
    try {
       Relative relative2 = relativeServices.updateRelative(id, relative);
        return new ResponseEntity<>(relative2, HttpStatus.OK);
    } catch (IllegalArgumentException e) {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
    }
}
}
