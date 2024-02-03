package com.teaminfinity.petadopt.dto;

import com.teaminfinity.petadopt.entity.enumerate.Gender;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PetDTO {
	private Integer id;
	private String ownerUsername;
    private String type;
    private String breed;
    private String name;
    private String address;
    private Gender gender;
    private boolean adopted;
    private String description;
    private String dietType;
    private String allergies;
    private Double age;
    private Double weight;
    private Double height;
    private boolean isVaccinated;
    private String recentVaccination;
    private String medicalHistory;
}


