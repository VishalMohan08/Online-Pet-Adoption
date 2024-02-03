import * as React from "react";
import axios from "axios";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { useSelector, useDispatch } from "react-redux";
import StepLabel from "@mui/material/StepLabel";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddPetInfo from "./petDetails";
import AddPetMedicalInfo from "./petMedicalDetails";
import PetSummary from "./petSummary";
import Footer from "../../../components/footer";
import NavBar from "../../../components/navbar";
import { selectFormData, resetForm } from "../../../redux/formSlice";
import { selectUser } from "../../../redux/UserSlice";
import {
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
} from "../../../redux/formSlice";

const steps = ["Pet Info", "Pet's Medical details", "Summary"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddPetInfo />;
    case 1:
      return <AddPetMedicalInfo />;
    case 2:
      return <PetSummary />;
    default:
      throw new Error("Unknown step");
  }
}

export default function AddPet() {
  const dispatch = useDispatch();
  const formData = useSelector(selectFormData);

  useEffect(() => {
    dispatch(setPetName(""));
    dispatch(setPetType(""));
    dispatch(setPetBreed(""));
    dispatch(setPetGender(""));
    dispatch(setPetDescription(""));
    dispatch(setPetAddress(""));
    dispatch(setAge(0));
    dispatch(setWeight(0));
    dispatch(setHeight(0));
    dispatch(setDiet(""));
    dispatch(setAllergies(""));
    dispatch(setVaccinationStatus("Vaccinated"));
    dispatch(setVaccinationDate(null));
    dispatch(setMedicalHistory(""));
  }, [dispatch]);

  const user = useSelector(selectUser);
  const userName =
    user.user && user.user.userName ? user.user.userName : "Guest";

  const [petAdded, setPetAdded] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  const handlePutUpForAdoption = () => {
    if (activeStep === steps.length - 1 && !petAdded) {

      const petData = {
        ownerUsername: userName,
        type: formData.petType,
        breed: formData.petBreed,
        name: formData.petName,
        gender: formData.petGender.toUpperCase(),
        description: formData.petDescription,
        address: formData.petAddress,
        age: formData.age,
        weight: formData.weight,
        height: formData.height,
        dietType: formData.diet,
        allergies: formData.allergies,
        vaccinated: formData.vaccinationStatus === "Vaccinated" ? true : false,
        vaccinationDate: formData.vaccinationDate,
        medicalHistory: formData.medicalHistory,
      };

      console.log(petData);
      console.log(formData.vaccinationStatus,
        );
      axios
        .post("/petowner/pet/add", petData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        })
        .then((response) => {
          console.log("Pet added successfully:", response.data);
          setPetAdded(true);
          setActiveStep(activeStep + 1);

        })
        .catch((error) => {
          console.error("Error adding pet:", error);
        });
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleNext = () => {
    if (activeStep === 0) {
      if (
        formData.petName !== "" &&
        formData.petType !== "" &&
        formData.petBreed !== "" &&
        formData.petGender !== "" &&
        formData.petDescription !== "" &&
        formData.petAddress !== ""
      ) {
        setActiveStep(activeStep + 1);
      } else {
        alert('Please fill in all required fields.');
      }
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <AppBar
          position="absolute"
          color="default"
          elevation={0}
          sx={{
            position: "relative",
          }}
        >
          <NavBar />
        </AppBar>
        <Paper
          sx={{
            pt: { xs: 2, md: 3 },
            pb: 1,
            maxWidth: "none",
          }}
        >
          <Typography component="h1" variant="h4" align="center">
            Put your pet up for adoption
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5, mx: 6 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom sx={{ pt: 3, mx: 6 }}>
                Thank you.
              </Typography>
              <Typography variant="subtitle1" sx={{ pb: 5, mx: 6 }}>
                Your Pet is up for adoption. You may go to the my pets page to
                manage your lisiting.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box
                sx={{
                  mx: 4,
                  mb: 4,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "right",
                  justifyContent: "flex-end",
                }}
              >
                {activeStep !== 0 && <Button onClick={handleBack}>Back</Button>}

                <Button
                  variant="contained"
                  onClick={handlePutUpForAdoption}
                  sx={{ ml: 5 }}
                >
                  {activeStep === steps.length - 1
                    ? "Put up for adoption"
                    : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </React.Fragment>
      <Footer />
    </>
  );
}
