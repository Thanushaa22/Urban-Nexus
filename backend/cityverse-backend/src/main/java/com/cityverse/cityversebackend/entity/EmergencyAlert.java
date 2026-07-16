package com.cityverse.cityversebackend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "emergency_alerts")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EmergencyAlert {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String severity;
    private String location;
    private String description;
}