import { CameraAlt } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import Header from "../../components/Header";

function EditProfile() {
  const { id } = useParams();

  // Example user details (replace with actual data retrieval logic)
  const [userDetails, setUserDetails] = useState({
    Name: "Charlest Smith",
    "Email Address": "charlestsmith888@gmail.com",
  });

  // Define Yup validation schema
  const checkoutSchema = yup.object().shape({
    Name: yup.string().required("Name is required"),
    "Email Address": yup.string().required("Email is required"),
  });

  const formik = useFormik({
    initialValues: userDetails,
    validationSchema: checkoutSchema,
    onSubmit: (values) => {
      // Logic to update user details
      console.log("Updated user details:", values);
    },
  });

  return (
    <Box m="20px" height="70vh" overflow="auto" paddingRight="20px">
      <Header title={`Edit Profile`} subtitle="" />
      <Box ml={"40px"}>
        <Grid container spacing={2}>
          <Grid item xs={10.2}>
            <Box display="flex" alignItems="center">
              {/* Image Display */}
              <Box mb={3.5}>
                <Box display="flex" borderRadius="3px">
                  <img
                    alt="profile-user"
                    width="150px"
                    height="150px"
                    src={`../../assets/user.png`}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>
              </Box>
              {/* Camera Icon */}
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="profile-image-upload"
                multiple
                type="file"
              />
              <label htmlFor="profile-image-upload">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  style={{ color: "#6870fa" }} // Change color to blue
                >
                  <CameraAlt />
                </IconButton>
              </label>
            </Box>
          </Grid>
          {Object.entries(userDetails).map(([field, value]) => (
            <React.Fragment key={field}>
              {field !== "ProfileImage" && (
                <>
                  <Grid item xs={2}>
                    <Typography variant="h5" component="span" fontWeight="bold">
                      {field}:
                      {checkoutSchema.fields[field] && (
                        <Typography
                          component="span"
                          color="error"
                          style={{ marginLeft: "3px" }} // Adjust margin as needed
                        >
                          *
                        </Typography>
                      )}
                    </Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <TextField
                      {...formik.getFieldProps(field)}
                      style={{ marginTop: "-10px", width: "70%" }} // Adjust width to 70%
                      variant="outlined"
                      margin="normal"
                      multiline={field === "Content"} // Multiline for Content field
                      rows={field === "Content" ? 4 : 1} // Adjust rows for Content field
                    />
                    {formik.touched[field] && formik.errors[field] && (
                      <Typography variant="body2" color="error">
                        {formik.errors[field]}
                      </Typography>
                    )}
                  </Grid>
                </>
              )}
            </React.Fragment>
          ))}{" "}
        </Grid>
        {/* Update Button */}
        <Box display="flex" justifyContent="right" mt={3}>
          <Button
            onClick={formik.handleSubmit}
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
        </Box>
      </Box>
    </Box>
  );
}

export default EditProfile;
