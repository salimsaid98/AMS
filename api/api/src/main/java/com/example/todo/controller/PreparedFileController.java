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

import com.example.todo.model.PreparedFile;
import com.example.todo.services.PreperedFileServices;


@CrossOrigin
@RestController
@RequestMapping("api/PreparedFile")
public class PreparedFileController {

    private final PreperedFileServices preperedFileServices;

    public PreparedFileController(PreperedFileServices preperedFileServices) {
        this.preperedFileServices = preperedFileServices;
    }

    @PostMapping("/addPreparedFile")
    public ResponseEntity<PreparedFile> addApplicantFile(@RequestBody PreparedFile preparedFile) {
        PreparedFile preparedFile2 = preperedFileServices.addPreparedtFiles(preparedFile);
        return new ResponseEntity<>(preparedFile2, HttpStatus.CREATED);
    }

    @GetMapping("/getAllPreparedtFile")
    public ResponseEntity<List<PreparedFile>> getAllApplicantFile() {
        List<PreparedFile> preparedFiles = preperedFileServices.getAllPreparedFiles();
        return new ResponseEntity<>(preparedFiles, HttpStatus.OK);

    }

    @DeleteMapping("/deletePreparedFile{id}")
    public ResponseEntity<Void> deletePrepared(@PathVariable("id") int id) {
        try {
            preperedFileServices.deletePreparedile(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/updateIrccFile{id}")
    public ResponseEntity<PreparedFile> updatePreparedFile(@PathVariable("id") Long id, @RequestBody PreparedFile updatepreparedFile) {
        try {
            PreparedFile preparedFile = preperedFileServices.updatePreparedFile(id, updatepreparedFile);
            return new ResponseEntity<>(preparedFile, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
