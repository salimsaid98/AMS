package com.example.todo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="package_table")
public class PackageDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long packageID;
    private String package_name;
    private String package_currency;
    private Long package_parecentage;
}
