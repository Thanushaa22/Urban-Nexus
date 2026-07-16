package com.cityverse.cityversebackend.dto;

import lombok.Data;

@Data
public class TrafficRequest {
    private Long cityId;
    private String roadName;
    private Integer vehicleCount;
    private String congestionLevel;
}