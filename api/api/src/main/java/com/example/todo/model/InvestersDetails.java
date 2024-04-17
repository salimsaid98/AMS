package com.example.todo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
@Data
@Entity
@Table(name = "investors_table")
public class InvestersDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long investorsID;
    private String investorsfullName;
    private String investorsemailAddress;
    private String investorshomeAddress;
    private String investorsphoneNumber;
    private String investorsnationalIdNumber;
    private String investorspassportNumber;
    private String registerDate;
}
