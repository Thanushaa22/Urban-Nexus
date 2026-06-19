package com.cityverse.cityversebackend.controller;

import com.cityverse.cityversebackend.entity.City;
import com.cityverse.cityversebackend.repository.CityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cities")
@RequiredArgsConstructor
public class CityController {

    private final CityRepository cityRepository;

    @PostMapping
    public City addCity(@RequestBody City city) {
        return cityRepository.save(city);
    }

    @GetMapping
    public List<City> getAllCities() {
        return cityRepository.findAll();
    }
}