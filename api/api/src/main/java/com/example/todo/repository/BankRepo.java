package com.example.todo.repository;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.todo.model.BankAccont;

public interface BankRepo extends JpaRepository<BankAccont,Long> {
    @Query(value = "select * from bank_account_table where investorsID = ?1", nativeQuery = true)
    List<Map<String, Object>> getBankByinvestorsID (Long investorsID );
}
