package com.cityverse.cityversebackend.controller;

import com.cityverse.cityversebackend.dto.TrafficRequest;
import com.cityverse.cityversebackend.entity.City;
import com.cityverse.cityversebackend.entity.TrafficData;
import com.cityverse.cityversebackend.repository.CityRepository;
import com.cityverse.cityversebackend.repository.TrafficDataRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/traffic")
@RequiredArgsConstructor
public class TrafficController {

    private final TrafficDataRepository trafficRepository;
    private final CityRepository cityRepository;

    @PostMapping
    public TrafficData addTraffic(
            @RequestBody TrafficRequest request) {

        City city = cityRepository
                .findById(request.getCityId())
                .orElseThrow();

        TrafficData traffic = TrafficData.builder()
                .roadName(request.getRoadName())
                .vehicleCount(request.getVehicleCount())
                .congestionLevel(request.getCongestionLevel())
                .timestamp(LocalDateTime.now())
                .city(city)
                .build();

        return trafficRepository.save(traffic);
    }

    @GetMapping
    public List<TrafficData> getAllTraffic() {
        return trafficRepository.findAll();
    }
}