import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import Header from "../../components/Header";

function EditCareer() {
  const { id } = useParams();

  // Example user details (replace with actual data retrieval logic)
  const [userDetails, setUserDetails] = useState({
    Name: "Mark Carson",
    Location: "mark@mail.com",
    Content:
      "Sample Content 123 Sample Content 123 Sample Content 123 Sample Content 123 Sample Content 123 Sample Content 123 Sample Content 123 ",
    Status: "Active", // Added Status field
  });

  // Define Yup validation schema
  const checkoutSchema = yup.object().shape({
    Name: yup.string().required("Name is required"),
    Location: yup.string().required("Location is required"),
    Content: yup.string().required("Content is required"),
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
      <Header title={`Edit Career ${id}`} subtitle="" />
      <Box ml={"40px"}>
        <Grid container spacing={2}>
          {Object.entries(userDetails).map(([field, value]) => (
            <React.Fragment key={field}>
              <Grid item xs={1}>
                <Typography variant="h5" component="span" fontWeight="bold">
                  {field}:
                </Typography>
              </Grid>
              <Grid item xs={11}>
                {field === "Status" ? (
                  <Select
                    {...formik.getFieldProps(field)}
                    value={formik.values.Status}
                    fullWidth
                    variant="outlined"
                    sx={{ width: "100px" }}
                  >
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value="Inactive">Inactive</MenuItem>
                  </Select>
                ) : (
                  <TextField
                    {...formik.getFieldProps(field)}
                    style={{ marginTop: "-10px" }}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    multiline={field === "Content"} // Multiline for Content field
                    rows={field === "Content" ? 4 : 1} // Adjust rows for Content field
                  />
                )}
                {formik.touched[field] && formik.errors[field] && (
                  <Typography variant="body2" color="error">
                    {formik.errors[field]}
                  </Typography>
                )}
              </Grid>
            </React.Fragment>
          ))}
          <Grid item xs={12} mt={3}>
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
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default EditCareer;
