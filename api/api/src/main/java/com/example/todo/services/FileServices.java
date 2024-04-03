package com.example.todo.services;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.todo.model.File;
import com.example.todo.repository.FileRepo;
@Service
public class FileServices {
     private final FileRepo fileRepo;

    @Autowired
    public FileServices(FileRepo fileRepo) {
        this.fileRepo = fileRepo;
    }

    public List<File> create(MultipartFile[] files) throws IOException {
        Set<File> uploadedFiles = uploadFiles(files);
        return fileRepo.saveAll(uploadedFiles);
    }

    public Set<File> uploadFiles(MultipartFile[] files) throws IOException {
        Set<File> fileModels = new HashSet<>();

        for (MultipartFile file : files) {
            File fileModel = new File(
                    file.getOriginalFilename(),
                    file.getContentType(),
                    file.getBytes()
            );
            fileModels.add(fileModel);
        }
        return fileModels;
    }

    public List<File> getAllFiles() {
        return fileRepo.findAll();
    }
}
