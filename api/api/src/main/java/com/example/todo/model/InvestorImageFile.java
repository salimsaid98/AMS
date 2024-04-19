package com.example.todo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "investors_image_file_table")
public class InvestorImageFile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long investorImageFileID;
   private Long fileID;
   private Long investorsID;
}
