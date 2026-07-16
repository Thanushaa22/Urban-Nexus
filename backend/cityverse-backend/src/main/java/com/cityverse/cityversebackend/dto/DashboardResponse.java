package com.cityverse.cityversebackend.dto;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DashboardResponse {
    private Long totalCities;
    private Long totalHospitals;
    private Long totalTrafficRecords;
    private Long highCongestionRoads;
}