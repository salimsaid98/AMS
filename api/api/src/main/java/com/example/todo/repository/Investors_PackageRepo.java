package com.example.todo.repository;


import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.todo.model.Investors_Package;



public interface Investors_PackageRepo extends JpaRepository<Investors_Package,Long> {
    @Query(value = "select ip.* ,pt.package_name,pt.package_currency,pt.package_parecentage from investors_package ip join investors_table i on ip.investorsid = i.investorsid join package_table pt on ip.packageid = pt.packageid where i.investorsid = ?1", nativeQuery = true)
    List<Map<String, Object>> getInvestors_PackageByinvestorsID (Long investorsID );
}
