package com.example.todo.services;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.todo.model.BankAccont;
import com.example.todo.repository.BankRepo;

@Service
public class BankServices {
    @Autowired
    private final BankRepo bankRepo;

    public BankServices(BankRepo bankRepo){
        this.bankRepo = bankRepo;

    }

    public BankAccont addBankAccont(BankAccont bankAccont){
        return bankRepo.save(bankAccont);
    }
    public List<BankAccont> getAllBankAccont(){
        return bankRepo.findAll();
    }
    // get Bank By Investors ID
    public List<Map<String, Object>> getBankByInvestorsID(Long investorsID) {
    return bankRepo.getBankByinvestorsID(investorsID);
}
}
