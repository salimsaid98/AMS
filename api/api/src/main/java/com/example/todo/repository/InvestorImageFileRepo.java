package com.example.todo.repository;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.todo.model.InvestorImageFile;

public interface InvestorImageFileRepo extends JpaRepository<InvestorImageFile,Long> {
    @Query(value = "  SELECT f.*,im.investor_image_fileid FROM file_table f JOIN investors_image_file_table im ON f.fileID = im.fileID JOIN  investors_table i ON i.investorsid = im.investorsid WHERE i.investorsid  = ?1", nativeQuery = true)
    List<Map<String, Object>> getAllImageFileByInvestorsID(Long investorsID);
   
}


