package com.teaminfinity.petadopt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teaminfinity.petadopt.entity.User;
import com.teaminfinity.petadopt.entity.enumerate.OwnerType;
import com.teaminfinity.petadopt.service.PetOwnerService;
import com.teaminfinity.petadopt.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
public class AdminController {
	
	@Autowired
	private UserService userService;
		
	@Autowired
    private PetOwnerService petOwnerService;
    
	@GetMapping("/petowners/all")
    public ResponseEntity<List<User>> getAllPetOwners() {
        List<User> petOwners = petOwnerService.getAllPetOwners();
        return ResponseEntity.ok(petOwners);
    }
    
    @GetMapping("/petowners/individual-owners")
    public ResponseEntity<List<User>> getIndividualPetOwners() {
        List<User> individualOwners = petOwnerService.getPetOwnersByType(OwnerType.INDIVIDUAL);
        return ResponseEntity.ok(individualOwners);
    }

    @GetMapping("/petowners/shelter-owners")
    public ResponseEntity<List<User>> getShelterPetOwners() {
        List<User> shelterOwners = petOwnerService.getPetOwnersByType(OwnerType.SHELTER);
        return ResponseEntity.ok(shelterOwners);
    }
    
	@GetMapping("/users/all")
	public ResponseEntity<List<User>> getAllUsers() {
		List<User> users = userService.getAllUsersWithUserRole();
		return ResponseEntity.ok(users);
	}
}
