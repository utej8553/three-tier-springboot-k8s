package com.example.demo2.Repository;

import com.example.demo2.Entity.DemoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DemoRepository extends JpaRepository<DemoEntity, Integer> {
}
