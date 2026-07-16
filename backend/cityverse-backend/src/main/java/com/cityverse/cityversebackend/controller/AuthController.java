package com.cityverse.cityversebackend.controller;

import com.cityverse.cityversebackend.dto.LoginRequest;
import com.cityverse.cityversebackend.dto.RegisterRequest;
import com.cityverse.cityversebackend.entity.User;
import com.cityverse.cityversebackend.repository.UserRepository;
import com.cityverse.cityversebackend.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import com.cityverse.cityversebackend.entity.Role;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
@RequiredArgsConstructor
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

@PostMapping("/register")
public String register(@RequestBody RegisterRequest request) {
    System.out.println("REGISTER HIT");
    System.out.println(request.getName());
    System.out.println(request.getEmail());

    try {
        User user = User.builder()
        .name(request.getName())
        .email(request.getEmail())
        .password(passwordEncoder.encode(request.getPassword()))
        .role(Role.USER)
        .build();

        userRepository.save(user);

        System.out.println("USER SAVED");

        return "User Registered Successfully";

    } catch (Exception e) {
        e.printStackTrace();
        return "ERROR: " + e.getMessage();
    }
}

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        return jwtService.generateToken(user.getEmail());
    }
}