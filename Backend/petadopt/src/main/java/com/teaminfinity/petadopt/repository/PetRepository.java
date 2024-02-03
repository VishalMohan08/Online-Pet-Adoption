package com.teaminfinity.petadopt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teaminfinity.petadopt.entity.Pet;

public interface PetRepository extends JpaRepository<Pet, Integer> {

	List<Pet> findByAdopted(boolean adoptedStatus);

}
