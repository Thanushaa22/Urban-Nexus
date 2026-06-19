package com.cityverse.cityversebackend.controller;

import com.cityverse.cityversebackend.dto.HospitalRequest;
import com.cityverse.cityversebackend.entity.City;
import com.cityverse.cityversebackend.entity.Hospital;
import com.cityverse.cityversebackend.repository.CityRepository;
import com.cityverse.cityversebackend.repository.HospitalRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/hospitals")
@RequiredArgsConstructor
public class HospitalController {

    private final HospitalRepository hospitalRepository;
    private final CityRepository cityRepository;

    @PostMapping
    public Hospital addHospital(
            @RequestBody HospitalRequest request) {

        City city = cityRepository
                .findById(request.getCityId())
                .orElseThrow();

        Hospital hospital = Hospital.builder()
                .hospitalName(request.getHospitalName())
                .totalBeds(request.getTotalBeds())
                .availableBeds(request.getAvailableBeds())
                .icuBeds(request.getIcuBeds())
                .city(city)
                .build();

        return hospitalRepository.save(hospital);
    }

    @GetMapping
    public List<Hospital> getAllHospitals() {
        return hospitalRepository.findAll();
    }
}