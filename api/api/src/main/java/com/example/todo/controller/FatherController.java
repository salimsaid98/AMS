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

import com.example.todo.model.FatherDetails;
import com.example.todo.services.FatherDetailsServices;
@CrossOrigin
@RestController
@RequestMapping("api/fatherDetails")
public class FatherController {
     public final FatherDetailsServices fatherDetailsServices;

    public FatherController(FatherDetailsServices fatherDetailsServices){
        this.fatherDetailsServices = fatherDetailsServices;
    }
    @PostMapping("/addFather")
    public ResponseEntity<FatherDetails> addFather(@RequestBody FatherDetails fatherDetails) {
       FatherDetails fatherDetails2 = fatherDetailsServices.addFather(fatherDetails);
        return new ResponseEntity<>(fatherDetails2, HttpStatus.CREATED);
    }
@GetMapping("/getAllFather")
    public ResponseEntity<List<FatherDetails>>getAllFather(){
        List<FatherDetails> fatherDetails = fatherDetailsServices.getAllFather();
        return new ResponseEntity<>(fatherDetails,HttpStatus.OK);

    }
// @GetMapping("/getFatherByID/{id}")
//     public ResponseEntity<FatherDetails> getUserById(@PathVariable("id") int id) {
//         Optional<FatherDetails> fatherDetails2 = fatherDetailsServices.getFatherById(id);
//         return fatherDetails2.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
//                 .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
//     }

@GetMapping("/GetFatherByApplicantID/")
    public ResponseEntity<List<Map<String, Object>>> getFatherByApplicantID(@RequestParam("applicantid") Long applicantid) {
        List<Map<String, Object>> father = fatherDetailsServices.getFatherByApplicantID(applicantid);
        return ResponseEntity.ok(father);
    }

// Update Applicant
@PutMapping("/updatefather{id}")
public ResponseEntity<FatherDetails> updateUser(@PathVariable("id") Long id, @RequestBody FatherDetails fatherDetails) {
    try {
        FatherDetails fatherDetails2 = fatherDetailsServices.updatefather(id, fatherDetails);
        return new ResponseEntity<>(fatherDetails2, HttpStatus.OK);
    } catch (IllegalArgumentException e) {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
    }
}
}
