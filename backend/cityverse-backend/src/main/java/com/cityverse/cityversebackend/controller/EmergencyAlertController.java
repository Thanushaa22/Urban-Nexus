package com.cityverse.cityversebackend.controller;

import com.cityverse.cityversebackend.dto.EmergencyAlertRequest;
import com.cityverse.cityversebackend.entity.EmergencyAlert;
import com.cityverse.cityversebackend.repository.EmergencyAlertRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/alerts")
@RequiredArgsConstructor
public class EmergencyAlertController {

    private final EmergencyAlertRepository alertRepository;

    @PostMapping
    public EmergencyAlert createAlert(
            @RequestBody EmergencyAlertRequest request
    ) {

        EmergencyAlert alert = EmergencyAlert.builder()
                .title(request.getTitle())
                .severity(request.getSeverity())
                .location(request.getLocation())
                .description(request.getDescription())
                .build();

        return alertRepository.save(alert);
    }

    @GetMapping
    public List<EmergencyAlert> getAllAlerts() {
        return alertRepository.findAll();
    }
}