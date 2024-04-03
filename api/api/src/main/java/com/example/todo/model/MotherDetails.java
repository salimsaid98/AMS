package com.example.todo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "motherDetails_table")
public class MotherDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long motherID;
    private String motherfullName;
    private String motherdateOfBirth;
    private String mothermarriedStatus;
    private String mothernationality;
    private String motherhomeAddress;
    private String motheroccupation;
    private Long applicantID;

}
