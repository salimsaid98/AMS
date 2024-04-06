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
@Table(name = "ApplicantDetails_and_File_table")
public class ApplicantDetails_and_File {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long appDtails_and_appFiles_ID;
    private Long applicantID;
    private Long fileID;
    @Column(unique = true)
    private Long applicantFileID;
    // private String file_name;
}
