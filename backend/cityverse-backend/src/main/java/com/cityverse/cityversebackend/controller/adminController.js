package com.cityverse.cityversebackend.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @GetMapping("/dashboard")
    public String adminDashboard() {
        return "Welcome Admin!";
    }

    @GetMapping("/users")
    public String manageUsers() {
        return "User Management";
    }

    @GetMapping("/alerts")
    public String manageAlerts() {
        return "Alert Management";
    }

    @GetMapping("/cities")
    public String manageCities() {
        return "City Management";
    }
}