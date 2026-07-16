package com.cityverse.cityversebackend.dto;

import lombok.Data;

@Data
public class HospitalRequest {
    private Long cityId;
    private String hospitalName;
    private Integer totalBeds;
    private Integer availableBeds;
    private Integer icuBeds;
}