package com.cityverse.cityversebackend.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RiskResponse {

    private String city;
    private String trafficRisk;
    private String hospitalLoad;
    private String overallRisk;
}