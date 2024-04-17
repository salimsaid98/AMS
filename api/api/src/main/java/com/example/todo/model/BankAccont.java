package com.example.todo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "bank_account_table")
public class BankAccont {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bank_accountID;
    private String bank_name;
    private String bank_account_no;
    private String bank_account_holders;
    private String bank_swift_code;
    private String bank_account_currence;
    private Long investorsID;

}
