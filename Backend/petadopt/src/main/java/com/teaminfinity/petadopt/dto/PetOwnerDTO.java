package com.teaminfinity.petadopt.dto;

import com.teaminfinity.petadopt.entity.enumerate.OwnerType;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PetOwnerDTO {
	private String username;
	private String password;
	private String fullname;
	private String email;
	private Long phno;
	private String address;
	private OwnerType ownertype;
}
