package com.pratheep.newyear.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.pratheep.newyear.model.Wish;

public interface WishRepository extends JpaRepository<Wish, Integer> {}
