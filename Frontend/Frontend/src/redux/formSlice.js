import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  petName: localStorage.getItem('petName') || null,
  petType: localStorage.getItem('petType') || null,
  petBreed: localStorage.getItem('petBreed') || null,
  petGender: localStorage.getItem('petGender') || null,
  petDescription: localStorage.getItem('petDescription') || null,
  age: localStorage.getItem('age') || 0,
  weight: localStorage.getItem('weight') || 0,
  height: localStorage.getItem('height') || 0,
  diet: localStorage.getItem('diet') || null,
  allergies: localStorage.getItem('allergies') || null,
  vaccinationStatus: localStorage.getItem('vaccinationStatus') || "Vaccinated",
  vaccinationDate: localStorage.getItem('vaccinationDate') || null,
  medicalHistory: localStorage.getItem('medicalHistory') || null,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setPetName: (state, action) => {
      state.petName = action.payload;
      localStorage.setItem('petName', action.payload);
    },
    setPetType: (state, action) => {
      state.petType = action.payload;
      localStorage.setItem('petType', action.payload);
    },
    setPetBreed: (state, action) => {
      state.petBreed = action.payload;
      localStorage.setItem('petBreed', action.payload);
    },
    setPetGender: (state, action) => {
      state.petGender = action.payload;
      localStorage.setItem('petGender', action.payload);
    },
    setPetDescription: (state, action) => {
      state.petDescription = action.payload;
      localStorage.setItem('petDescription', action.payload);
    },
    setPetAddress: (state, action) => {
      state.petAddress = action.payload;
      localStorage.setItem('petAddress', action.payload);
    },
    setAge: (state, action) => {
      state.age = action.payload;
      localStorage.setItem('age', action.payload);
    },
    setWeight: (state, action) => {
      state.weight = action.payload;
      localStorage.setItem('weight', action.payload);
    },
    setHeight: (state, action) => {
      state.height = action.payload;
      localStorage.setItem('height', action.payload);
    },
    setDiet: (state, action) => {
      state.diet = action.payload;
      localStorage.setItem('diet', action.payload);
    },
    setAllergies: (state, action) => {
      state.allergies = action.payload;
      localStorage.setItem('allergies', action.payload);
    },
    setVaccinationStatus: (state, action) => {
      state.vaccinationStatus = action.payload;
      localStorage.setItem('vaccinationStatus', action.payload);
    },
    setVaccinationDate: (state, action) => {
      state.vaccinationDate = action.payload;
      localStorage.setItem('vaccinationDate', action.payload);
    },
    setMedicalHistory: (state, action) => {
      state.medicalHistory = action.payload;
      localStorage.setItem('medicalHistory', action.payload);
    },
    resetForm: () => initialState,
  },
});

export const {
  setPetName,
  setPetType,
  setPetBreed,
  setPetGender,
  setPetDescription,
  setPetAddress,
  setAge,
  setWeight,
  setHeight,
  setDiet,
  setAllergies,
  setVaccinationStatus,
  setVaccinationDate,
  setMedicalHistory,
  resetForm,
} = formSlice.actions;

export const selectFormData = (state) => state.form;
export default formSlice;
