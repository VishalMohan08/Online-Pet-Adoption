package com.teaminfinity.petadopt.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teaminfinity.petadopt.entity.User;
import com.teaminfinity.petadopt.entity.enumerate.OwnerType;


public interface UserRepository extends JpaRepository<User, Integer> {
	Optional<User> findByUsername(String email);

	List<User> findByOwnertype(OwnerType ownerType);
}
