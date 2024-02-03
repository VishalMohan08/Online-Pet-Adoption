package com.teaminfinity.petadopt.service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;

import com.teaminfinity.petadopt.dto.PetDTO;
import com.teaminfinity.petadopt.entity.Pet;
import com.teaminfinity.petadopt.entity.PetDiet;
import com.teaminfinity.petadopt.entity.PetMedical;
import com.teaminfinity.petadopt.entity.User;
import com.teaminfinity.petadopt.repository.PetDietRepository;
import com.teaminfinity.petadopt.repository.PetMedicalRepository;
import com.teaminfinity.petadopt.repository.PetRepository;
import com.teaminfinity.petadopt.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class PetService {
    private final UserRepository userRepository;
    private final PetRepository petRepository;
    private final PetDietRepository petDietRepository;
    private final PetMedicalRepository petMedicalRepository;

    public PetService(UserRepository userRepository, PetRepository petRepository, PetDietRepository petDietRepository, PetMedicalRepository petMedicalRepository) {
        this.userRepository = userRepository;
    	this.petRepository = petRepository;
        this.petDietRepository = petDietRepository;
		this.petMedicalRepository = petMedicalRepository;
    }

    @Transactional
    public Pet createPet(PetDTO petDto) {
        Pet pet = new Pet();
        pet.setType(petDto.getType());
        pet.setBreed(petDto.getBreed());
        pet.setName(petDto.getName());
        pet.setAddress(petDto.getAddress());
        pet.setAdopted(false);
        pet.setDescription(petDto.getDescription());
        Optional<User> owner = userRepository.findByUsername(petDto.getOwnerUsername());
        if (owner.isPresent()) {
            pet.setOwner(owner.get());
            User updatedUser = owner.get();
            List<Pet> newOwnersPets = updatedUser.getPets();
            newOwnersPets.add(pet);
            updatedUser.setPets(newOwnersPets);
        }
        pet.setGender(petDto.getGender());

        PetDiet petDiet = new PetDiet();
        petDiet.setDietType(petDto.getDietType());
        petDiet.setAllergies(petDto.getAllergies());
        
        PetMedical petMedical = new PetMedical();
        petMedical.setAge(petDto.getAge());
        petMedical.setHeight(petDto.getHeight());
        petMedical.setWeight(petDto.getWeight());
        petMedical.setVaccinated(petDto.isVaccinated());
        petMedical.setRecentVaccination(petDto.getRecentVaccination());
        petMedical.setMedicalHistory(petDto.getMedicalHistory());

        pet.setPetDiet(petDiet);
        pet.setPetMedical(petMedical);
        petDiet.setPet(pet);
        petMedical.setPet(pet);

        pet = petRepository.save(pet);
        petDiet = petDietRepository.save(petDiet);
        petMedical = petMedicalRepository.save(petMedical);

        return pet;
    }
    
    public HttpStatus updatePet(PetDTO petDTO) {
        Optional<Pet> petOptional = petRepository.findById(petDTO.getId());

        if (petOptional.isPresent()) {
            Pet existingPet = petOptional.get();

            existingPet.setType(petDTO.getType());
            existingPet.setBreed(petDTO.getBreed());
            existingPet.setName(petDTO.getName());
            existingPet.setAddress(petDTO.getAddress());
            existingPet.setAdopted(petDTO.isAdopted());
            existingPet.setDescription(petDTO.getDescription());
            existingPet.setGender(petDTO.getGender());

            petRepository.save(existingPet);

            return HttpStatus.OK;

        } else {
            return HttpStatus.NOT_FOUND;
        }
    }

    public HttpStatus deletePet(Integer petId) {
        Optional<Pet> petOptional = petRepository.findById(petId);

        if (petOptional.isPresent()) {
            Pet existingPet = petOptional.get();
            petRepository.delete(existingPet);
            return HttpStatus.OK;
        } else {
            return HttpStatus.NOT_FOUND;
        }
    }

    public List<Pet> getAllPets() {
        return petRepository.findAll();
    }
    
    public List<Pet> getAllPetsByAdoptionStatus(boolean adoptedStatus) {
        return petRepository.findByAdopted(adoptedStatus);
    }

	public Optional<Pet> getPetById(Integer id) {
		return petRepository.findById(id);
	}

	public HttpStatusCode adoptPet(PetDTO petDTO) {
        Optional<Pet> petOptional = petRepository.findById(petDTO.getId());
        Optional<User> newOwner = userRepository.findByUsername(petDTO.getOwnerUsername());
        if (petOptional.isPresent() && newOwner.isPresent()) {
            Pet existingPet = petOptional.get();
            User owner = newOwner.get();
            existingPet.setAdopted(true);
            existingPet.setOwner(owner);
            petRepository.save(existingPet);
            return HttpStatus.OK;
        } else {
            return HttpStatus.NOT_FOUND;
        }
	}
}

