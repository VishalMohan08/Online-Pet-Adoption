import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "antd";
import MenuItem from "@mui/material/MenuItem";

const theme = createTheme();

export default function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = React.useState(false);
  const [userType, setUserType] = React.useState("User");


  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const validatePassword = (value) => {
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const specialCharactersRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    const digitRegex = /\d/;

    if (!uppercaseRegex.test(value)) {
      return "At least one uppercase character is required.";
    }

    if (!specialCharactersRegex.test(value)) {
      return "At least one special character is required.";
    }

    if (!lowercaseRegex.test(value)) {
      return "At least one lowercase character is required.";
    }

    if (!digitRegex.test(value)) {
      return "At least one digit is required.";
    }

    return true;
  };

  const onSubmit = (data) => {
    console.log(data);

    const endpoint = userType === "User" ? "/public/register/user" : "/public/register/petowner";

    // Make a post request with the data
    axios
      .post(endpoint, data)
      .then((res) => {
        if (res.status === 200) {
          toast.success(
            <div>
              Signed up successfully! <br /> Please login to continue.
            </div>,
            {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );

          setTimeout(() => (window.location = "/login"), 3000);
        }
      })
      .catch((error) => {
        toast.error(
          <div>
            Server error! <br /> Please try again later.
          </div>,
          {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      });
  };

  return (
    <>
      <NavBar />
      <div className="outerbox">
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              className="innerBox"
              sx={{
                marginTop: 8,
                marginBottom: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      select
                      label="User Type"
                      fullWidth
                      value={userType}
                      onChange={handleUserTypeChange}
                    >
                      <MenuItem value="User">User</MenuItem>
                      <MenuItem value="Pet Owner">Pet Owner</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <Controller
                      name="username"
                      control={control}
                      rules={{
                        required: "Username is required.",
                      }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          required
                          fullWidth
                          autoComplete="given-name"
                          name="username"
                          id="username"
                          label="Username"
                          error={!!errors.username}
                          helperText={errors.username?.message}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Controller
                      name="password"
                      control={control}
                      rules={{
                        required: "Password is required.",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters.",
                        },
                        validate: validatePassword,
                      }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          margin="normal"
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          id="password"
                          autoComplete="new-password"
                          type={showPassword ? "text" : "password"}
                          error={!!errors.password}
                          helperText={errors.password?.message}
                          InputProps={{
                            endAdornment: (
                              <IconButton
                                onClick={handleTogglePassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOffIcon />
                                ) : (
                                  <VisibilityIcon />
                                )}
                              </IconButton>
                            ),
                          }}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Controller
                      name="fullname"
                      control={control}
                      rules={{
                        required: "Full Name is required.",
                      }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          required
                          fullWidth
                          autoComplete="given-name"
                          name="fullname"
                          id="fullname"
                          label="Full Name"
                          error={!!errors.fullname}
                          helperText={errors.fullname?.message}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Controller
                      name="email"
                      control={control}
                      rules={{
                        required: "Email is required.",
                        pattern: {
                          value:
                            // RFC2822 Email regex
                            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=/^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                          message: "Enter a valid email address.",
                        },
                      }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          required
                          fullWidth
                          autoComplete="email"
                          name="email"
                          id="email"
                          label="Email Address"
                          error={!!errors.email}
                          helperText={errors.email?.message}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Controller
                      name="phno"
                      control={control}
                      rules={{
                        required: "Phone Number is required.",
                      }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          required
                          fullWidth
                          autoComplete="tel"
                          name="phno"
                          id="phno"
                          label="Phone Number"
                          error={!!errors.phno}
                          helperText={errors.phno?.message}
                        />
                      )}
                    />
                  </Grid>
                  {userType === "Pet Owner" && (
                    <>
                      <Grid item xs={12}>
                        <Controller
                          name="ownertype"
                          control={control}
                          rules={{
                            required: "Owner Type is required.",
                          }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              select
                              fullWidth
                              autoComplete="off"
                              name="ownertype"
                              id="ownertype"
                              label="Owner Type"
                              error={!!errors.ownertype}
                              helperText={errors.ownertype?.message}
                              value={`INDIVIDUAL`}
                            >
                              <MenuItem value="INDIVIDUAL">Individual</MenuItem>
                              <MenuItem value="SHELTER">Shelter</MenuItem>
                            </TextField>
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Controller
                          name="address"
                          control={control}
                          rules={{
                            required: "Address is required.",
                          }}
                          render={({ field }) => (
                            <Input.TextArea
                              {...field}
                              autoSize={{ minRows: 3, maxRows: 5 }}
                              placeholder="Address"
                            />
                          )}
                        />
                      </Grid>
                    </>
                  )}
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/login" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
      <Footer />
    </>
  );
}
