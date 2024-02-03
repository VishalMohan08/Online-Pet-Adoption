package com.teaminfinity.petadopt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.teaminfinity.petadopt.dto.PetDTO;
import com.teaminfinity.petadopt.dto.PetOwnerDTO;
import com.teaminfinity.petadopt.service.PetOwnerService;
import com.teaminfinity.petadopt.service.PetService;


@RestController
@RequestMapping("/petowner")
public class PetOwnerController {

	@Autowired
    private PetOwnerService petOwnerService;
	
	@Autowired
    private PetService petService;


    @PutMapping("/edit")
    public ResponseEntity<HttpStatus> updatePetOwner(@RequestBody PetOwnerDTO petOwnerDTO) {
        HttpStatus status = petOwnerService.updatePetOwner(petOwnerDTO);
        return new ResponseEntity<>(status);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<HttpStatus> deletePetOwner(@RequestParam(name = "username") String username) {
        HttpStatus status = petOwnerService.deletePetOwner(username);
        return new ResponseEntity<>(status);
    }
    
    @PostMapping("/pet/add")
    public ResponseEntity<String> addPetWithDiet(@RequestBody PetDTO petDTO) {
        petService.createPet(petDTO);
        return ResponseEntity.ok("Pet added successfully.");
    }
    
    @PutMapping("/pet/edit")
    public ResponseEntity<HttpStatus> updatePet(@RequestBody PetDTO petDTO) {
        HttpStatus status = petService.updatePet(petDTO);
        return new ResponseEntity<>(status);
    }

    @DeleteMapping("/pet/delete")
    public ResponseEntity<HttpStatus> deletePet(@RequestParam(name = "petId") Integer petId) {
        HttpStatus status = petService.deletePet(petId);
        return new ResponseEntity<>(status);
    }
}

