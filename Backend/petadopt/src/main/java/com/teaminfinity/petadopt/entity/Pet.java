package com.teaminfinity.petadopt.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.teaminfinity.petadopt.entity.enumerate.Gender;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "pet")
public class Pet {

    @Id
    @GeneratedValue
    private Integer id;
    private String type;
    private String breed;
    private String name;
    private String address;
    private boolean adopted;
    private String description;

    @Enumerated(EnumType.STRING)
    private Gender gender;
    
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User owner;

    @JsonIgnoreProperties("pet")
    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "pet_diet_id")
    private PetDiet petDiet;
    
    @JsonIgnoreProperties("pet")
    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "pet_medical_id")
    private PetMedical petMedical;
}
