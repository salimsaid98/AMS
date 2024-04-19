package com.example.todo.services;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.todo.model.InvestorImageFile;
import com.example.todo.repository.InvestorImageFileRepo;

@Service
public class InvestorImageFileServices {
    @Autowired
    private final InvestorImageFileRepo investorImageFileRepo;
    public InvestorImageFileServices(InvestorImageFileRepo investorImageFileRepo){
        this.investorImageFileRepo = investorImageFileRepo;

    }
 public InvestorImageFile addInvestorImageFile(InvestorImageFile investorImageFile){
    return this.investorImageFileRepo.save(investorImageFile);
 }
 public List<Map<String,Object>> getInvestorsImageFileByInvestorsID(Long investorsID){
    return this.investorImageFileRepo.getAllImageFileByInvestorsID(investorsID);
}
}
