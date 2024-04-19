package com.example.todo.repository;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.todo.model.KinDetails;

public interface KinRepo extends JpaRepository<KinDetails,Long> {
    @Query(value = "select * from kin_details_table where investorsID = ?1", nativeQuery = true)
    List<Map<String, Object>> getKinByinvestorsID (Long investorsID );
}
