package com.cityverse.cityversebackend.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DashboardResponse {

    private Long totalCities;
    private Long totalHospitals;
    private Long totalTrafficRecords;
    private Long highCongestionRoads;
}