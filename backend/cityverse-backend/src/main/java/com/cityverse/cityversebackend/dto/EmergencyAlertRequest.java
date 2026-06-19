package com.cityverse.cityversebackend.dto;

import lombok.Data;

@Data
public class EmergencyAlertRequest {

    private String title;
    private String severity;
    private String location;
    private String description;
}