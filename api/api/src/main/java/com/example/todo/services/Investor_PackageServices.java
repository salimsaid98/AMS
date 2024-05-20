package com.example.todo.services;


import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.todo.model.Investors_Package;
import com.example.todo.repository.Investors_PackageRepo;

@Service
public class Investor_PackageServices {
    private final Investors_PackageRepo investors_PackageRepo;
@Autowired
    public Investor_PackageServices(Investors_PackageRepo investors_PackageRepo){
        this.investors_PackageRepo = investors_PackageRepo;

    }
    public Investors_Package addInvestors_Package(Investors_Package investors_Package){
    return this.investors_PackageRepo.save(investors_Package);
    }
   
    // get Kin By Investors ID
    public List<Map<String, Object>> getInvestors_PackageByinvestorsID(Long investorsID) {
    return  investors_PackageRepo.getInvestors_PackageByinvestorsID(investorsID);
}
// update Investors_package
    public Investors_Package updateInvestersPackage(Long id,Investors_Package updateinvestors_Package){
        Optional<Investors_Package> existInvestas_package = investors_PackageRepo.findById((long)id);
        if(existInvestas_package.isPresent()){
            Investors_Package investors_Package = existInvestas_package.get();
            investors_Package.setPackageDate(investors_Package.getPackageDate());
            return investors_PackageRepo.save(investors_Package);
        }else {
            throw new IllegalArgumentException("User with id " + id + " does not exist.");
        }
    }
// Get Investors Package By ID
    public Optional<Investors_Package> getInvestor_PackageByID(long id){
        return this.investors_PackageRepo.findById(id);
    }

}
