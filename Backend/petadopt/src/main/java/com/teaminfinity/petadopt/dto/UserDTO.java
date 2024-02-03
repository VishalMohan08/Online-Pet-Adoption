package com.teaminfinity.petadopt.dto;

import lombok.AllArgsConstructor;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
	private String username;
	private String password;
	private String fullname;
	private String email;
	private Long phno;
	private String address;
}
