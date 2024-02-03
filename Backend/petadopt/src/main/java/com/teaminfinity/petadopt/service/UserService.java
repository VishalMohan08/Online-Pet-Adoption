package com.teaminfinity.petadopt.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.teaminfinity.petadopt.dto.UserDTO;
import com.teaminfinity.petadopt.entity.User;
import com.teaminfinity.petadopt.entity.enumerate.Role;
import com.teaminfinity.petadopt.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public HttpStatus updateUser(UserDTO userDTO) {
		Optional<User> userOptional = userRepository.findByUsername(userDTO.getUsername());

		if (userOptional.isPresent()) {
			User existingUser = userOptional.get();

			existingUser.setFullname(userDTO.getFullname());
			existingUser.setEmail(userDTO.getEmail());
			existingUser.setPhno(userDTO.getPhno());
			existingUser.setAddress(userDTO.getAddress());

			userRepository.save(existingUser);

			return HttpStatus.OK;

		} else {
			return HttpStatus.NOT_FOUND;
		}
	}

	public HttpStatus deleteUser(String username) {
		Optional<User> userOptional = userRepository.findByUsername(username);

		if (userOptional.isPresent()) {
			User existingUser = userOptional.get();

			userRepository.delete(existingUser);

			return HttpStatus.OK;

		} else {
			return HttpStatus.NOT_FOUND;
		}
	}

	public List<User> getAllUsersWithUserRole() {
	    List<User> allUsers = userRepository.findAll();
	    List<User> usersWithUserRole = new ArrayList<>();

	    for (User user : allUsers) {
	        if (user.getRole() == Role.USER) {
	            usersWithUserRole.add(user);
	        }
	    }

	    return usersWithUserRole;
	}
}
