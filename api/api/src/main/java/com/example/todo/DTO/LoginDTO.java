package com.example.todo.DTO;

import lombok.Data;

@Data
public class LoginDTO {
    private long id;
    private String username;
    private String roles;
    private int status;
}
