package com.example.todo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.todo.model.IRCCFile;
import com.example.todo.repository.IRCCFileRepo;
@Service
public class IRCCFileServices {
    @Autowired
    private final IRCCFileRepo irccFileRepo;

    public IRCCFileServices(IRCCFileRepo irccFileRepo) {
       this.irccFileRepo = irccFileRepo;
    }

    // Add IRCC File
    public IRCCFile addIrccFiles(IRCCFile irdFile) {
        return this.irccFileRepo.save(irdFile);
    }

    // Get All IRCC file
    public List<IRCCFile> getAllIrccFiles() {
        return this.irccFileRepo.findAll();
    } 

        // Delete IRCC File
    public void deleteIRCCFile(long id) {
        irccFileRepo.deleteById( id);
    }
    // Update IRCC File 
    public IRCCFile updateIRCCFile(Long id, IRCCFile updateirccFile) {
        Optional<IRCCFile> existingIRCCFile = irccFileRepo.findById((long) id);
        if (existingIRCCFile.isPresent()) {
            IRCCFile irccFile = existingIRCCFile.get();
            irccFile.setFile_name(updateirccFile.getFile_name());
            // Update other properties as needed
            return irccFileRepo.save(irccFile);
        } else {
            throw new IllegalArgumentException("User with id " + id + " does not exist.");
        }
    }
}
