package com.example.todo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "fatherDetails_table")
public class FatherDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long fatherID;
    private String fatherfullName;
    private String fatherdateOfBirth;
    private String fathermarriedStatus;
    private String fathernationality;
    private String fatherhomeAddress;
    private String fatheroccupation;
    private Long applicantID;
}
