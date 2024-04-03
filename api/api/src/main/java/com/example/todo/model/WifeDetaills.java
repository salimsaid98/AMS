package com.example.todo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "wifeDetails_Table")
public class WifeDetaills {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long wifeID;
    private String wifeName;
    private String wifedateOfBirth;
    private String wifenationality;
    private String wifehomeAddress;
    private String wifeoccupation;
    private Long applicantID;

}
