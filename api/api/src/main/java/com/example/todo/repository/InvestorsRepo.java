package com.example.todo.repository;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.todo.model.InvestersDetails;

public interface InvestorsRepo extends JpaRepository<InvestersDetails,Long>{
    @Query(value = "select count(*) as total_investors from investors_table",nativeQuery = true)
    List<Map<String, Object>> CountAllInvestors();

}
