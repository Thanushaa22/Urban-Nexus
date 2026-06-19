package com.cityverse.cityversebackend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "hospitals")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Hospital {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String hospitalName;

    private Integer totalBeds;

    private Integer availableBeds;

    private Integer icuBeds;

    @ManyToOne
    @JoinColumn(name = "city_id")
    private City city;
}