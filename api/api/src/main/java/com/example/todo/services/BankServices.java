package com.example.todo.services;

import java.util.List;
import java.util.Map;
import java.util.Optional;

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


    // Update Bank
    public BankAccont updateBank(Long id, BankAccont updatebankAccont) {
        Optional<BankAccont> existingbanke= bankRepo.findById((long) id);
        if (existingbanke.isPresent()) {
           BankAccont bankAccont = existingbanke.get();
           bankAccont.setBank_name(updatebankAccont.getBank_name());
           bankAccont.setBank_account_currence(updatebankAccont.getBank_account_currence());
           bankAccont.setBank_account_holders(updatebankAccont.getBank_account_holders());
           bankAccont.setBank_account_no(updatebankAccont.getBank_account_no());
           bankAccont.setBank_swift_code(updatebankAccont.getBank_swift_code());
           bankAccont.setInvestorsID(updatebankAccont.getInvestorsID());
            // Update other properties as needed
            return bankRepo.save(bankAccont);
        } else {
            throw new IllegalArgumentException("User with id " + id + " does not exist.");
        }
    }
}
