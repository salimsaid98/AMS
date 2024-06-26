package com.example.todo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "irccFile_table")
public class IRCCFile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long irccID;
    private String file_name;
    private String country_name;
}
