import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../../../components/footer";
import NavBar from "../../../components/navbar";

const defaultTheme = createTheme();

export default function AllPets() {
  const [petData, setPetData] = useState([]);

  useEffect(() => {
    axios.get("/public/pets/all")
      .then((response) => {
        setPetData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching pet data:", error);
      });
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <NavBar />
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Adopt A Pet!
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              "Explore our heartwarming collection of adoptable pets, carefully
              curated with love. Find your new best friend, and give a forever
              home to a furry companion in need."
            </Typography>
          </Container>
        </Box>
        <Container sx={{ pb: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {petData.map((pet, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Link to={`/pet/${pet.id}`}>
                  {/* Wrap the Card with Link */}
                  <Card
                    className="hover:cursor-pointer hover:transform hover:scale-105 transition-transform"
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: "56.25%",
                      }}
                      image={pet.image}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {pet.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Breed: {pet.breed}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Gender: {pet.gender}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Age: {pet.age} Year(s)
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="pb-2"
                      >
                        Adopted: {pet.adopted ? "Yes" : "No"}
                      </Typography>
                      <Typography>{pet.description || "No description available."}</Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
