import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import Header from "../../components/Header";

const CreateNewUser = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box m="20px" height="70vh" overflow="auto" paddingRight="20px">
      <Box width="50%">
        <Header title="Add a New Career" subtitle="" />

        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit} style={{ height: "41vh" }}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns={"repeat(1, 1fr)"}
              >
                <Box>
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Title*"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.title}
                    name="title"
                    error={!!touched.title && !!errors.title}
                    helperText={touched.title && errors.title}
                  />
                </Box>
                <Box>
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Location*"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.location}
                    name="location"
                    error={!!touched.location && !!errors.location}
                    helperText={touched.location && errors.location}
                  />
                </Box>
                <Box>
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Description*"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.description}
                    name="description"
                    multiline
                    rows={4}
                    error={!!touched.description && !!errors.description}
                    helperText={touched.description && errors.description}
                  />
                </Box>
                <Box>
                  <FormControl fullWidth variant="filled">
                    <InputLabel>Status*</InputLabel>
                    <Select
                      value={values.status}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="status"
                      error={!!touched.status && !!errors.status}
                    >
                      <MenuItem value="">Please Select</MenuItem>
                      <MenuItem value="active">Active</MenuItem>
                      <MenuItem value="inactive">Inactive</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              {/* Submit Button */}
              <Box display="flex" justifyContent="center" mt="20px">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#6870fa",
                    color: "white",
                    fontSize: "16px",
                    "&:hover": {
                      backgroundColor: "#3e4396", // Change to green color on hover
                    },
                  }}
                >
                  Add
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  location: yup.string().required("Location is required"),
  description: yup.string().required("Description is required"),
  status: yup.string().required("Status is required"),
});

const initialValues = {
  title: "",
  location: "",
  description: "",
  status: "",
};

export default CreateNewUser;
