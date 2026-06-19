package com.cityverse.cityversebackend.controller;

import com.cityverse.cityversebackend.dto.DashboardResponse;
import com.cityverse.cityversebackend.dto.RiskResponse;
import com.cityverse.cityversebackend.repository.CityRepository;
import com.cityverse.cityversebackend.repository.HospitalRepository;
import com.cityverse.cityversebackend.repository.TrafficDataRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dashboard")
@RequiredArgsConstructor
public class DashboardController {

    private final CityRepository cityRepository;
    private final HospitalRepository hospitalRepository;
    private final TrafficDataRepository trafficRepository;

    @GetMapping
    public DashboardResponse getDashboardStats() {

        return DashboardResponse.builder()
                .totalCities(cityRepository.count())
                .totalHospitals(hospitalRepository.count())
                .totalTrafficRecords(trafficRepository.count())
                .highCongestionRoads(
                        trafficRepository.countByCongestionLevel("HIGH")
                )
                .build();
    }

    @GetMapping("/risk")
    public RiskResponse getRiskPrediction() {

        String trafficRisk = "LOW";

        long highTraffic =
                trafficRepository.countByCongestionLevel("HIGH");

        if (highTraffic > 0) {
            trafficRisk = "HIGH";
        }

        String hospitalLoad = "NORMAL";

        long hospitals =
                hospitalRepository.count();

        if (hospitals < 1) {
            hospitalLoad = "HIGH";
        }

        String overallRisk = "LOW";

        if (
                trafficRisk.equals("HIGH")
                        && hospitalLoad.equals("NORMAL")
        ) {
            overallRisk = "MEDIUM";
        }

        return RiskResponse.builder()
                .city("Bangalore")
                .trafficRisk(trafficRisk)
                .hospitalLoad(hospitalLoad)
                .overallRisk(overallRisk)
                .build();
    }
}