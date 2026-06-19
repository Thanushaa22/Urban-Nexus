package com.cityverse.cityversebackend.repository;

import com.cityverse.cityversebackend.entity.TrafficData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrafficDataRepository
        extends JpaRepository<TrafficData, Long> {

    long countByCongestionLevel(String congestionLevel);
}