package com.teaminfinity.petadopt.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teaminfinity.petadopt.config.AuthenticationResponse;
import com.teaminfinity.petadopt.dto.PetOwnerDTO;
import com.teaminfinity.petadopt.dto.UserDTO;
import com.teaminfinity.petadopt.entity.Pet;
import com.teaminfinity.petadopt.dto.LoginDTO;
import com.teaminfinity.petadopt.service.AuthenticationService;
import com.teaminfinity.petadopt.service.PetService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/public")
@RequiredArgsConstructor
public class PublicController {
	@Autowired
	private AuthenticationService authService;

	@Autowired
	private PetService petService;

	@PostMapping("/login")
	public ResponseEntity<AuthenticationResponse> authenticateUser(@RequestBody LoginDTO request) throws Exception {
		return ResponseEntity.ok(authService.authenticate(request));
	}
	
	@PostMapping("/getrole")
	public ResponseEntity<String> getRole(@RequestBody AuthenticationResponse request) throws Exception {
		return ResponseEntity.ok(authService.getRole(request));
	}
	
	@PostMapping("/register/admin")
	public ResponseEntity<HttpStatus> registerAdmin(@RequestBody UserDTO request) {
		return new ResponseEntity<HttpStatus>(authService.addAdmin(request));
	}

	@PostMapping("/register/user")
	public ResponseEntity<HttpStatus> registerUser(@RequestBody UserDTO request) {
		return new ResponseEntity<HttpStatus>(authService.addUser(request));
	}

	@PostMapping("/register/petowner")
	public ResponseEntity<HttpStatus> registerPetOwner(@RequestBody PetOwnerDTO addPetOwnerDTO) {
		return new ResponseEntity<HttpStatus>(authService.addPetOwner(addPetOwnerDTO));
	}
	
	@GetMapping("/pet/{id}")
	public ResponseEntity<Optional<Pet>> getPetById(@PathVariable Integer id) {
		Optional<Pet> pet = petService.getPetById(id);
		return ResponseEntity.ok(pet);
	}

	@GetMapping("/pets/all")
	public ResponseEntity<List<Pet>> getAllPets() {
		List<Pet> pets = petService.getAllPets();
		return ResponseEntity.ok(pets);
	}

	@GetMapping("/pets/adopted")
	public ResponseEntity<List<Pet>> getAllAdoptedPets() {
		List<Pet> adoptedPets = petService.getAllPetsByAdoptionStatus(true);
		return ResponseEntity.ok(adoptedPets);
	}

	@GetMapping("/pets/not-adopted")
	public ResponseEntity<List<Pet>> getAllNotAdoptedPets() {
		List<Pet> notAdoptedPets = petService.getAllPetsByAdoptionStatus(false);
		return ResponseEntity.ok(notAdoptedPets);
	}
}
