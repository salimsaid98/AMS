package com.example.todo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "relative_table")
public class Relative {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long relativeID;
    @Column(unique = true)
    private String relativefullName;
    private String relativedateOfBirth;
    private String relativemarriedStatus;
    private String relativenationality;
    private String relativehomeAddress;
    private String relativeoccupation;
    private String relativeTypes;
    private Long applicantID;
}
