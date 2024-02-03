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
import com.teaminfinity.petadopt.dto.UserDTO;
import com.teaminfinity.petadopt.service.PetService;
import com.teaminfinity.petadopt.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private PetService petService;
	
	@PostMapping("/adopt/pet")
	public ResponseEntity<HttpStatus> adoptPet(@RequestBody PetDTO petDTO) {
		return new ResponseEntity<HttpStatus>(petService.adoptPet(petDTO));
	}

	@PutMapping("/edit")
	public ResponseEntity<HttpStatus> registerUser(@RequestBody UserDTO userDTO) {
		return new ResponseEntity<HttpStatus>(userService.updateUser(userDTO));
	}

	@DeleteMapping("/delete")
	public ResponseEntity<HttpStatus> deleteUser(@RequestParam(name = "username") String username) {
		return new ResponseEntity<HttpStatus>(userService.deleteUser(username));
	}
}
