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
@Table(name = "applicantFile_table")
public class ApplicantFiles {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long applicantFileID;
    @Column(unique = true)
    private String file_name;

}
