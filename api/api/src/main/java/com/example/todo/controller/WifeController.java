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

import com.example.todo.model.WifeDetaills;
import com.example.todo.services.WifeSerrvices;

@CrossOrigin
@RestController
@RequestMapping("api/WifeDetails")
public class WifeController {
        public final WifeSerrvices wifeSerrvices;
    public WifeController(WifeSerrvices wifeSerrvices){
       this.wifeSerrvices = wifeSerrvices;
    }
    @PostMapping("/addWife")
    public ResponseEntity<WifeDetaills> addWife(@RequestBody WifeDetaills wifeDetaills) {
       WifeDetaills wifeDetaills2 = wifeSerrvices.addWife(wifeDetaills);
        return new ResponseEntity<>(wifeDetaills2, HttpStatus.CREATED);
    }
@GetMapping("/getAllWife")
    public ResponseEntity<List<WifeDetaills>>getAllWife(){
        List<WifeDetaills> wifeDetaills = wifeSerrvices.getAllWife();
        return new ResponseEntity<>(wifeDetaills,HttpStatus.OK);

    }
 @GetMapping("/GetWifeByApplicantID/")
    public ResponseEntity<List<Map<String, Object>>> getWifeByApplicantID(@RequestParam("applicantid") Long applicantid) {
        List<Map<String, Object>> wife = wifeSerrvices.getWifeByApplicantID(applicantid);
        return ResponseEntity.ok(wife);
    } 
    // Update Wife
@PutMapping("/updateWife{id}")
public ResponseEntity<WifeDetaills> updateMother(@PathVariable("id") Long id, @RequestBody WifeDetaills wifeDetaills) {
    try {
       WifeDetaills wifeDetaills2 = wifeSerrvices.updateWifeDetaills(id, wifeDetaills);
        return new ResponseEntity<>(wifeDetaills2, HttpStatus.OK);
    } catch (IllegalArgumentException e) {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
    }
}
    
}
