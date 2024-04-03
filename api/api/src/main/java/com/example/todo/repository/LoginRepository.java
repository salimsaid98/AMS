package com.example.todo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.todo.model.Login;

public interface LoginRepository extends JpaRepository<Login,Long> {
    boolean findByUsername(String username);
    Optional<Login> getByUsername(String username);
}
