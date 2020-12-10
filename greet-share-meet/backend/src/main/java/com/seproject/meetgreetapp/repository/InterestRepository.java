package com.seproject.meetgreetapp.repository;

import com.seproject.meetgreetapp.model.Interest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface InterestRepository extends JpaRepository<Interest, Integer> {
    public Interest findByInterest(String interest);
}

