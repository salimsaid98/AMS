package com.example.todo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.todo.model.PreparedFile;
import com.example.todo.repository.PreperedFileRepo;
@Service
public class PreperedFileServices {
     @Autowired
    private final PreperedFileRepo preperedFileRepo;

    public PreperedFileServices(PreperedFileRepo preperedFileRepo) {
        this.preperedFileRepo = preperedFileRepo;
    }

    // Add Prepared File
    public PreparedFile addPreparedtFiles(PreparedFile preparedFile) {
        return this.preperedFileRepo.save(preparedFile);
    }

    // Get All Prepared file
    public List<PreparedFile> getAllPreparedFiles() {
        return this.preperedFileRepo.findAll();
    }

           // Delete Prepared File
    public void deletePreparedile(long id) {
        preperedFileRepo.deleteById( id);
    }
    // Update Prepared File 
    public PreparedFile updatePreparedFile(Long id, PreparedFile updatepreparedFile) {
        Optional<PreparedFile> existingpreparedFile = preperedFileRepo.findById((long) id);
        if (existingpreparedFile.isPresent()) {
            PreparedFile preparedFile= existingpreparedFile.get();
            preparedFile.setFile_name(updatepreparedFile.getFile_name());
            // Update other properties as needed
            return preperedFileRepo.save(preparedFile);
        } else {
            throw new IllegalArgumentException("User with id " + id + " does not exist.");
        }
    }
}
