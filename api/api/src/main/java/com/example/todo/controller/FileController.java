package com.example.todo.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.todo.model.File;
import com.example.todo.services.FileServices;

@CrossOrigin
@RestController
@RequestMapping("api/ApplicantFile")
public class FileController {
    public final FileServices applicantFileServices;

    public FileController(FileServices applicantFileServices){
        this.applicantFileServices =applicantFileServices;
    }

        @PostMapping("/addFile")
        public ResponseEntity<List<File>> addFile (@RequestPart MultipartFile[] file)throws IOException {
           List<File> applicantFiles2  = applicantFileServices.create(file);
            return new ResponseEntity<>(applicantFiles2, HttpStatus.CREATED);
        }
        @GetMapping("/getAllFiles")
        public ResponseEntity<List<File>> getAllFiles(){
            List<File> applicantFiles = applicantFileServices.getAllFiles();
            return new ResponseEntity<List<File>>(applicantFiles,HttpStatus.OK);
        }


}
