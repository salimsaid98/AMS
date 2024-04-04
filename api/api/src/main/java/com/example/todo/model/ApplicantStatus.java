package com.example.todo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
@Data
@Entity
@Table(name = "applicant_status_table")
public class ApplicantStatus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long applicantStatusID;
    private String status;
    private Long applicantID;
}
