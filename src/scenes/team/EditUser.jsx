import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { countries } from "../../data/countries";

function EditUser() {
  const { id } = useParams();

  // Example user details (replace with actual data retrieval logic)
  const initialUserDetails = {
    "Full Name": "User abc",
    "Email Address": "daaasdsa356@gmail.com",
    Age: "18",
    Gender: "Female",
    Occupation: "SE",
    "Date of Birth": "05/08/1995",
    "Phone No.": "07125974",
    "Home Address": "No 123, street",
    "Select Country": "Sri Lanka",
    "Select City or State": "",
    "JSGN Local Churches": "",
    Password: "",
    "Confirm Password": "",
  };

  const [userDetails, setUserDetails] = useState(initialUserDetails);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisibility(!confirmPasswordVisibility);
  };

  const handleFieldChange = (field, value) => {
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [field]: value,
    }));
  };

  return (
    <Box m="20px" height="70vh" overflow="auto" paddingRight="20px">
      <Header title={`Edit User ${id}`} subtitle="" />
      <Box ml={"40px"}>
        <Grid container spacing={2}>
          {Object.entries(userDetails).map(([field, value]) => (
            <Grid item xs={12} md={6} key={field}>
              <Typography variant="subtitle1" fontWeight="bold">
                {field}:
              </Typography>
              {field === "Select Country" ? (
                <Select
                  fullWidth
                  variant="outlined"
                  value={value}
                  onChange={(e) => handleFieldChange(field, e.target.value)}
                >
                  {countries.map((country) => (
                    <MenuItem key={country.country} value={country.country}>
                      {country.country}
                    </MenuItem>
                  ))}
                </Select>
              ) : field === "Password" || field === "Confirm Password" ? (
                <TextField
                  type={
                    field === "Password"
                      ? passwordVisibility
                        ? "text"
                        : "password"
                      : confirmPasswordVisibility
                      ? "text"
                      : "password"
                  }
                  fullWidth
                  variant="outlined"
                  value={value}
                  onChange={(e) => handleFieldChange(field, e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={
                            field === "Password"
                              ? togglePasswordVisibility
                              : toggleConfirmPasswordVisibility
                          }
                        >
                          {field === "Password" ? (
                            passwordVisibility ? (
                              <VisibilityIcon />
                            ) : (
                              <VisibilityOffIcon />
                            )
                          ) : confirmPasswordVisibility ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              ) : field === "Gender" ? (
                <RadioGroup
                  row
                  value={value}
                  onChange={(e) => handleFieldChange(field, e.target.value)}
                >
                  <FormControlLabel
                    value="Male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="Female"
                    control={<Radio />}
                    label="Female"
                  />
                </RadioGroup>
              ) : field === "Date of Birth" ? (
                <TextField
                  type="date"
                  fullWidth
                  variant="outlined"
                  value={value}
                  onChange={(e) => handleFieldChange(field, e.target.value)}
                />
              ) : (
                <TextField
                  fullWidth
                  variant="outlined"
                  value={value}
                  onChange={(e) => handleFieldChange(field, e.target.value)}
                />
              )}
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#6870fa",
                color: "white",
                fontSize: "16px",
                "&:hover": {
                  backgroundColor: "#3e4396",
                },
              }}
              onClick={() => console.log("Update button clicked", userDetails)}
            >
              Update
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default EditUser;
