package com.example.todo.services;

import java.util.List;

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
}
