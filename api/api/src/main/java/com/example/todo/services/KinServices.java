package com.example.todo.services;

import java.util.List;
import java.util.Map;

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
}
