package com.example.todo.repository;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.todo.model.Login;

public interface LoginRepository extends JpaRepository<Login,Long> {
    boolean findByUsername(String username);
    Optional<Login> getByUsername(String username);
    @Query(value = "select count(*) as total_user from login",nativeQuery = true)
    List<Map<String, Object>> countAllUsers();
}
