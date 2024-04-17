package com.example.todo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
@Data
@Entity
@Table(name = "kin_details_table")
public class KinDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long kin_detailsID;
    private String kinfullName;
    private String kinemailAddress;
    private String kinhomeAddress;
    private String kinphoneNumber;
    private String kinnationalIdNumber;
    private String kinpassportNumber;
    private String kinTypes;
    private Long investorsID;

}
