import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import Header from "../../components/Header";

const CreateNewUser = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
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
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

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
          <form onSubmit={handleSubmit} height="41vh">
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns={
                isNonMobile ? "repeat(2, 1fr)" : "repeat(1, 1fr)"
              }
            >
              <Box>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Full Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.fullName}
                  name="fullName"
                  error={!!touched.fullName && !!errors.fullName}
                  helperText={touched.fullName && errors.fullName}
                />
              </Box>
              <Box>
                <TextField
                  fullWidth
                  variant="filled"
                  type="email"
                  label="Email Address"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
              </Box>
              <Box>
                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Age"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.age}
                  name="age"
                  error={!!touched.age && !!errors.age}
                  helperText={touched.age && errors.age}
                />
              </Box>
              <Box>
                <FormControl fullWidth variant="filled">
                  <InputLabel>Gender</InputLabel>
                  <Select
                    value={values.gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="gender"
                    error={!!touched.gender && !!errors.gender}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="JCGN Local Churches"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.church}
                  name="church"
                  error={!!touched.church && !!errors.church}
                  helperText={touched.church && errors.church}
                />
              </Box>
              <Box>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Occupation"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.occupation}
                  name="occupation"
                  error={!!touched.occupation && !!errors.occupation}
                  helperText={touched.occupation && errors.occupation}
                />
              </Box>
              <Box>
                <TextField
                  fullWidth
                  variant="filled"
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box>
                <TextField
                  fullWidth
                  variant="filled"
                  type={showConfirmPassword ? "text" : "password"}
                  label="Confirm Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.confirmPassword}
                  name="confirmPassword"
                  error={!!touched.confirmPassword && !!errors.confirmPassword}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box>
                <TextField
                  fullWidth
                  variant="filled"
                  type="date"
                  label="Date of Birth"
                  InputLabelProps={{ shrink: true }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.dob}
                  name="dob"
                  error={!!touched.dob && !!errors.dob}
                  helperText={touched.dob && errors.dob}
                />
              </Box>
              <Box>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Phone No."
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phone}
                  name="phone"
                  error={!!touched.phone && !!errors.phone}
                  helperText={touched.phone && errors.phone}
                />
              </Box>
              <Box>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Home Address"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address}
                  name="address"
                  error={!!touched.address && !!errors.address}
                  helperText={touched.address && errors.address}
                />
              </Box>
              <Box>
                <FormControl fullWidth variant="filled">
                  <InputLabel>Select Country</InputLabel>
                  <Select
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="country"
                    error={!!touched.country && !!errors.country}
                  >
                    <MenuItem value="USA">USA</MenuItem>
                    <MenuItem value="Canada">Canada</MenuItem>
                    <MenuItem value="UK">UK</MenuItem>
                    {/* Add more countries as needed */}
                  </Select>
                </FormControl>
              </Box>
              <Box>{/* Add rest of the fields */}</Box>
            </Box>
            {/* Submit Button */}
            <Box display="flex" justifyContent="end" mt="20px">
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#6870fa",
                  color: "white",
                  marginRight: 2,
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
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  age: yup.number().required("Age is required"),
  gender: yup.string().required("Gender is required"),
  church: yup.string().required("JCGN Local Churches is required"),
  occupation: yup.string().required("Occupation is required"),
  dob: yup.string().required("Date of Birth is required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone No. is required"),
  address: yup.string().required("Home Address is required"),
  country: yup.string().required("Country is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const initialValues = {
  fullName: "",
  email: "",
  age: "",
  gender: "",
  church: "",
  occupation: "",
  dob: "",
  phone: "",
  address: "",
  country: "",
  password: "",
  confirmPassword: "",
};

export default CreateNewUser;
