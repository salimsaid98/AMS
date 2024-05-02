package com.example.todo.services;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.todo.model.KinDetails;
import com.example.todo.repository.KinRepo;
@Service
public class KinServices {
    @Autowired
    private final KinRepo kinRepo;

    public KinServices(KinRepo kinRepo){
        this.kinRepo = kinRepo;

    }

    public KinDetails addKinDetails(KinDetails kinDetails){
        return kinRepo.save(kinDetails);
    }
    public List<KinDetails> getAllKinDetails(){
        return kinRepo.findAll();
    }

    // get Kin By Investors ID
    public List<Map<String, Object>> getKinByInvestorsID(Long investorsID) {
        return kinRepo.getKinByinvestorsID(investorsID);
    }
    // Update Kin
    public KinDetails updatekinDetails(Long id, KinDetails updateKinDetails) {
        Optional<KinDetails> existingKin= kinRepo.findById((long) id);
        if (existingKin.isPresent()) {
           KinDetails kinDetails = existingKin.get();
            kinDetails.setKinfullName(updateKinDetails.getKinfullName());
            kinDetails.setKinTypes(updateKinDetails.getKinTypes());
            kinDetails.setKinemailAddress(updateKinDetails.getKinemailAddress());
            kinDetails.setKinhomeAddress(updateKinDetails.getKinhomeAddress());
            kinDetails.setKinnationalIdNumber(updateKinDetails.getKinnationalIdNumber());
            kinDetails.setKinpassportNumber(updateKinDetails.getKinpassportNumber());
            kinDetails.setKinphoneNumber(updateKinDetails.getKinphoneNumber());
            kinDetails.setInvestorsID(updateKinDetails.getInvestorsID());
            // Update other properties as needed
            return kinRepo.save(kinDetails);
        } else {
            throw new IllegalArgumentException("User with id " + id + " does not exist.");
        }
    }
}
