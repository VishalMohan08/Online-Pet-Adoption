package com.teaminfinity.petadopt.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.teaminfinity.petadopt.dto.PetOwnerDTO;
import com.teaminfinity.petadopt.entity.User;
import com.teaminfinity.petadopt.entity.enumerate.OwnerType;
import com.teaminfinity.petadopt.entity.enumerate.Role;
import com.teaminfinity.petadopt.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PetOwnerService {

	private final UserRepository userRepository;

	public HttpStatus updatePetOwner(PetOwnerDTO petOwnerDTO) {
		Optional<User> petOwnerOptional = userRepository.findByUsername(petOwnerDTO.getUsername());

		if (petOwnerOptional.isPresent()) {
			User existingPetOwner = petOwnerOptional.get();

			existingPetOwner.setFullname(petOwnerDTO.getFullname());
			existingPetOwner.setEmail(petOwnerDTO.getEmail());
			existingPetOwner.setPhno(petOwnerDTO.getPhno());
			existingPetOwner.setAddress(petOwnerDTO.getAddress());

			userRepository.save(existingPetOwner);

			return HttpStatus.OK;
		} else {
			return HttpStatus.NOT_FOUND;
		}
	}

	public HttpStatus deletePetOwner(String username) {
		Optional<User> petOwnerOptional = userRepository.findByUsername(username);

		if (petOwnerOptional.isPresent()) {
			User existingPetOwner = petOwnerOptional.get();
			userRepository.delete(existingPetOwner);
			return HttpStatus.OK;
		} else {
			return HttpStatus.NOT_FOUND;
		}
	}

	public List<User> getAllPetOwners() {
	    List<User> allUsers = userRepository.findAll();
	    List<User> petOwners = new ArrayList<>();

	    for (User user : allUsers) {
	        if (user.getRole() == Role.PET_OWNER) {
	            petOwners.add(user);
	        }
	    }

	    return petOwners;
	}

	public List<User> getPetOwnersByType(OwnerType ownerType) {
		return userRepository.findByOwnertype(ownerType);
	}
}
