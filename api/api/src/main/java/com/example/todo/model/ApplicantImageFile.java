package com.example.todo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "applicantImageFile_table")
public class ApplicantImageFile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long applicantImageFileID;
    private Long fileID;
    private Long applicantID;
}
