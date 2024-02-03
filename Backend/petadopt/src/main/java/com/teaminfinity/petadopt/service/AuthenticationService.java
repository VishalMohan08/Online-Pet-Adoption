package com.teaminfinity.petadopt.service;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.teaminfinity.petadopt.config.AuthenticationResponse;
import com.teaminfinity.petadopt.dto.UserDTO;
import com.teaminfinity.petadopt.dto.LoginDTO;
import com.teaminfinity.petadopt.dto.PetOwnerDTO;
import com.teaminfinity.petadopt.entity.User;
import com.teaminfinity.petadopt.entity.enumerate.Role;
import com.teaminfinity.petadopt.repository.UserRepository;
import com.teaminfinity.petadopt.util.JwtService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
	private final PasswordEncoder passwordEncoder;
	private final JwtService jwtService;
	private final AuthenticationManager authenticationManager;
	private final UserRepository userRepository;

	public HttpStatusCode addAdmin(UserDTO request) {

		var user = User.builder().username(request.getUsername())
				.password(passwordEncoder.encode(request.getPassword())).fullname(request.getFullname())
				.email(request.getEmail()).phno(request.getPhno()).address(request.getAddress()).role(Role.ADMIN)
				.build();
		userRepository.save(user);

		return HttpStatus.OK;
	}

	public HttpStatus addUser(UserDTO request) {
		var user = User.builder().username(request.getUsername())
				.password(passwordEncoder.encode(request.getPassword())).fullname(request.getFullname())
				.email(request.getEmail()).phno(request.getPhno()).address(request.getAddress()).role(Role.USER)
				.build();
		userRepository.save(user);

		return HttpStatus.OK;
	}

	public HttpStatus addPetOwner(PetOwnerDTO addPetOwnerDTO) {
		User petOwner = User.builder().username(addPetOwnerDTO.getUsername())
				.password(passwordEncoder.encode(addPetOwnerDTO.getPassword())).fullname(addPetOwnerDTO.getFullname())
				.email(addPetOwnerDTO.getEmail()).phno(addPetOwnerDTO.getPhno()).address(addPetOwnerDTO.getAddress())
				.role(Role.PET_OWNER).ownertype(addPetOwnerDTO.getOwnertype()).build();

		userRepository.save(petOwner);

		return HttpStatus.OK;
	}

	public AuthenticationResponse authenticate(LoginDTO request) {
		authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
		var user = userRepository.findByUsername(request.getUsername()).orElseThrow();
		var jwtToken = jwtService.generateToken(user);
		return AuthenticationResponse.builder().token(jwtToken).build();

	}

	public String getRole(AuthenticationResponse request) {
		return jwtService.extractRole(request.getToken());
	}

}
