package com.example.todo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "applicantDetails_table")
public class ApplicantDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long applicantID;
    private String applicantfullName;
    private String applicantemailAddress;
    private String applicanthomeAddress;
    private String applicantbusinessNumber;
    private String applicantphoneNumber;
    private String applicantwebsite;
    private String applicantnationalIdNumber;
    private String applicantpassportNumber;
    private String applicantoccupation;
    private String applicantmarriedStatus;

}
