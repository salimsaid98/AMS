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
@Table(name = "File_table")
public class File {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long fileID;
    private String filename;
    private String filetype;
     @Column(length = 50000000)
    private byte[] file_byte;

    public File(String filename,String filetype,byte[] file_byte){
            this.filename = filename;
            this.filetype = filetype;
            this.file_byte = file_byte;
            
    }

    public File(){}
}
