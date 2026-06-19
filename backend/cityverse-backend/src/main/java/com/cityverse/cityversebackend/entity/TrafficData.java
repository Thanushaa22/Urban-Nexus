package com.cityverse.cityversebackend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "traffic_data")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TrafficData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String roadName;

    private Integer vehicleCount;

    private String congestionLevel;

    private LocalDateTime timestamp;

    @ManyToOne
    @JoinColumn(name = "city_id")
    private City city;
}