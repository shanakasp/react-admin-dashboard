import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { countries as countriesList } from "../../data/countries";

function EditOrganization() {
  const { id } = useParams();

  // Updated organization details
  const initialOrganizationDetails = {
    "Organization Name*": "VENTURE COMMUNITY SERVICES",
    "Organization Email Address*": "kbujiriri@venturecs.org",
    "Profit/Non-Profit*": "Non-Profit",
    "Years In Business*": "Enter Years In Business",
    "Started In*": "06/19/2014",
    "Owned, Affiliated etc*": "jjjjjjj",
    "Services to Jcgn*": "soooco",
    "Contact Person Name*": "klllll",
    "Contact Person Title*": "jjkjmnnn",
    "Company Mission*": "lkkkkk",
    "Organization Phone No.*": "8573890830",
    "Organization Street Address*": "345 MAIN STREET",
    "Select Country*": "United States",
    "Enter City or State*": "",
    "Create Password": "",
    "Confirm Password": "",
  };

  const [organizationDetails, setOrganizationDetails] = useState(
    initialOrganizationDetails
  );
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
    setOrganizationDetails((prevOrganizationDetails) => ({
      ...prevOrganizationDetails,
      [field]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic goes here
  };

  // List of countries
  const countries = [
    ...countriesList,
    // Add more countries as needed
  ];

  return (
    <Box m="20px" height="70vh" overflow="auto" paddingRight="20px">
      <Header title={`Edit Organization ${id}`} subtitle="" />
      <Box ml={"40px"}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {Object.entries(organizationDetails).map(([field, value]) => (
              <Grid item xs={12} md={6} key={field}>
                <Typography variant="subtitle1" fontWeight="bold">
                  {field}:
                </Typography>
                {field === "Select Country*" ? (
                  <TextField
                    select
                    fullWidth
                    variant="outlined"
                    value={value}
                    onChange={(e) => handleFieldChange(field, e.target.value)}
                  >
                    {countries.map((countryObj) => (
                      <MenuItem
                        key={countryObj.country}
                        value={countryObj.country}
                      >
                        {countryObj.country}
                      </MenuItem>
                    ))}
                  </TextField>
                ) : field === "Create Password" ||
                  field === "Confirm Password" ? (
                  <TextField
                    type={passwordVisibility ? "text" : "password"}
                    fullWidth
                    variant="outlined"
                    value={value}
                    onChange={(e) => handleFieldChange(field, e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={togglePasswordVisibility}
                            edge="end"
                          >
                            {passwordVisibility ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
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
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#6870fa",
                  color: "white",
                  fontSize: "16px",
                  "&:hover": {
                    backgroundColor: "#3e4396",
                  },
                }}
              >
                Update
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}

export default EditOrganization;
