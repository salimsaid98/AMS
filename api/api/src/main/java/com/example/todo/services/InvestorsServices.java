package com.example.todo.services;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.todo.model.InvestersDetails;
import com.example.todo.repository.InvestorsRepo;
@Service
public class InvestorsServices {
    @Autowired
    private final InvestorsRepo investorsRepo;

    public InvestorsServices(InvestorsRepo investorsRepo){
        this.investorsRepo = investorsRepo;

    }

    public InvestersDetails addInvestors(InvestersDetails investersDetails){
        return investorsRepo.save(investersDetails);
    }
    public List<InvestersDetails> getAllInvestors(){
        return investorsRepo.findAll();
    }

    // Get Investors By ID
    public Optional<InvestersDetails> getInvestorsById(long id) {
        return investorsRepo.findById(id);
    }
    
    // Update Investors 
    public InvestersDetails updateInvestersDetails(Long id,InvestersDetails updateInvestersDetails){
        Optional<InvestersDetails> existInvestasDetails = investorsRepo.findById((long)id);
        if(existInvestasDetails.isPresent()){
            InvestersDetails investersDetails = existInvestasDetails.get();
            investersDetails.setInvestorsfullName(updateInvestersDetails.getInvestorsfullName());
            investersDetails.setInvestorsemailAddress(updateInvestersDetails.getInvestorsemailAddress());
            investersDetails.setInvestorshomeAddress(updateInvestersDetails.getInvestorshomeAddress());
            investersDetails.setInvestorsphoneNumber(updateInvestersDetails.getInvestorsphoneNumber());
            investersDetails.setInvestorsnationalIdNumber(updateInvestersDetails.getInvestorsnationalIdNumber());
            investersDetails.setInvestorspassportNumber(updateInvestersDetails.getInvestorspassportNumber());
            investersDetails.setInvestorsgender(updateInvestersDetails.getInvestorsgender());
            investersDetails.setStatus(updateInvestersDetails.getStatus());
            investersDetails.setPackageDate((updateInvestersDetails.getPackageDate()));
            return investorsRepo.save(investersDetails);

        }else {
            throw new IllegalArgumentException("User with id " + id + " does not exist.");
        }
    }

    public void deleteInvestors(long id){
         investorsRepo.deleteById(id);
    }
    // Count All Investors
    public List<Map<String,Object>> CountAllInvestors(){
        return investorsRepo.CountAllInvestors();
}
}
