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

import com.example.todo.model.IRCCFile;
import com.example.todo.services.IRCCFileServices;


@CrossOrigin
@RestController
@RequestMapping("api/IRCCFile")
public class IRCCFileController {
    
    
    private final IRCCFileServices irccFileServices;

    public IRCCFileController(IRCCFileServices irccFileServices) {
      this.irccFileServices = irccFileServices;
    }

    @PostMapping("/addIrccFile")
    public ResponseEntity<IRCCFile> addIrccFile(@RequestBody IRCCFile irccFile) {
        IRCCFile irccFile2 = irccFileServices.addIrccFiles(irccFile);
        return new ResponseEntity<>(irccFile2, HttpStatus.CREATED);
    }

    @GetMapping("/getAllIrccFile")
    public ResponseEntity<List<IRCCFile>>getAllIrccFile(){
        List<IRCCFile> irccFiles = irccFileServices.getAllIrccFiles();
        return new ResponseEntity<>(irccFiles,HttpStatus.OK);

    }
         @DeleteMapping("/deleteIrccFile{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") int id) {
        try {
            irccFileServices.deleteIRCCFile(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
  @PutMapping("/updateIrccFile{id}")
    public ResponseEntity<IRCCFile> updateUser(@PathVariable("id") Long id, @RequestBody IRCCFile updateirccFile) {
        try {
           IRCCFile irccFile = irccFileServices.updateIRCCFile(id, updateirccFile);
            return new ResponseEntity<>(irccFile, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
        }
    }
}
