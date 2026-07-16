package com.cityverse.cityversebackend.dto;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RiskResponse {

    private String city;
    private String trafficRisk;
    private String hospitalLoad;
    private String overallRisk;
    private String floodRisk;
    private String emergencyReadiness;
    private String recommendation;
}