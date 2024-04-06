package com.example.todo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "applicant_prepared_ffile")
public class ApplicantPreparedFile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long applicant_prepared_fileID;
    private Long fileID;
    private Long applicantID;
    private Long preparedFileID;
}
