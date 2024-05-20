package com.example.todo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "investors_package")
public class Investors_Package {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Investors_PackageID;
    private Long package_amount_invested;
    private Long profit_earning;
    private Long contract_limit;
    private Long investorsID;
    private Long profitEarningYear;
    private Long packageID;
    private String packageDate;
}
