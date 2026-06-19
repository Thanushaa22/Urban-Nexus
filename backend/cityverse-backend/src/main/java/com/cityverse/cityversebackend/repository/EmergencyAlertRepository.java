package com.cityverse.cityversebackend.repository;

import com.cityverse.cityversebackend.entity.EmergencyAlert;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmergencyAlertRepository
        extends JpaRepository<EmergencyAlert, Long> {
}