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

const AddNewOrganization = () => {
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
    <Box m="20px" height="80vh" overflow="auto" paddingRight="20px">
      <Header
        title="Add a New Organization"
        subtitle="Create a New Organization Profile"
      />

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
              {/* Add Organization Name */}
              <Box>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Organization Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.organizationName}
                  name="organizationName"
                  error={
                    !!touched.organizationName && !!errors.organizationName
                  }
                  helperText={
                    touched.organizationName && errors.organizationName
                  }
                />
              </Box>
              {/* Add Organization Email Address */}
              <Box>
                <TextField
                  fullWidth
                  variant="filled"
                  type="email"
                  label="Organization Email Address"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.organizationEmail}
                  name="organizationEmail"
                  error={
                    !!touched.organizationEmail && !!errors.organizationEmail
                  }
                  helperText={
                    touched.organizationEmail && errors.organizationEmail
                  }
                />
              </Box>
              {/* Add Profit/Non-Profit */}
              <Box>
                <FormControl fullWidth variant="filled">
                  <InputLabel>Profit/Non-Profit</InputLabel>
                  <Select
                    value={values.profitNonProfit}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="profitNonProfit"
                    error={
                      !!touched.profitNonProfit && !!errors.profitNonProfit
                    }
                  >
                    <MenuItem value="Profit">Profit</MenuItem>
                    <MenuItem value="Non-Profit">Non-Profit</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              {/* Add JCGN Local Churches */}
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
              {/* Add Years In Business */}
              <Box>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Years In Business"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.yearsInBusiness}
                  name="yearsInBusiness"
                  error={!!touched.yearsInBusiness && !!errors.yearsInBusiness}
                  helperText={touched.yearsInBusiness && errors.yearsInBusiness}
                />
              </Box>
              {/* Add Started In */}
              <Box>
                <TextField
                  fullWidth
                  variant="filled"
                  type="date"
                  label="Started In"
                  InputLabelProps={{ shrink: true }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.startedIn}
                  name="startedIn"
                  error={!!touched.startedIn && !!errors.startedIn}
                  helperText={touched.startedIn && errors.startedIn}
                />
              </Box>
              {/* Add Owned, Affiliated etc */}
              <Box>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Owned, Affiliated etc"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.ownedAffiliated}
                  name="ownedAffiliated"
                  error={!!touched.ownedAffiliated && !!errors.ownedAffiliated}
                  helperText={touched.ownedAffiliated && errors.ownedAffiliated}
                />
              </Box>
              {/* Add Services to Jcgn */}
              <Box>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Services to Jcgn"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.servicesToJcgn}
                  name="servicesToJcgn"
                  error={!!touched.servicesToJcgn && !!errors.servicesToJcgn}
                  helperText={touched.servicesToJcgn && errors.servicesToJcgn}
                />
              </Box>
              {/* Add Contact Person Name */}
              <Box>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Contact Person Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.contactPersonName}
                  name="contactPersonName"
                  error={
                    !!touched.contactPersonName && !!errors.contactPersonName
                  }
                  helperText={
                    touched.contactPersonName && errors.contactPersonName
                  }
                />
              </Box>
              {/* Add Contact Person Title */}
              <Box>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Contact Person Title"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.contactPersonTitle}
                  name="contactPersonTitle"
                  error={
                    !!touched.contactPersonTitle && !!errors.contactPersonTitle
                  }
                  helperText={
                    touched.contactPersonTitle && errors.contactPersonTitle
                  }
                />
              </Box>
              {/* Add Company Mission */}
              <Box>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Company Mission"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.companyMission}
                  name="companyMission"
                  error={!!touched.companyMission && !!errors.companyMission}
                  helperText={touched.companyMission && errors.companyMission}
                />
              </Box>
              {/* Add Organization Phone No. */}
              <Box>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Organization Phone No."
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.organizationPhone}
                  name="organizationPhone"
                  error={
                    !!touched.organizationPhone && !!errors.organizationPhone
                  }
                  helperText={
                    touched.organizationPhone && errors.organizationPhone
                  }
                />
              </Box>
              {/* Add Organization Street Address */}
              <Box>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Organization Street Address"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.organizationAddress}
                  name="organizationAddress"
                  error={
                    !!touched.organizationAddress &&
                    !!errors.organizationAddress
                  }
                  helperText={
                    touched.organizationAddress && errors.organizationAddress
                  }
                />
              </Box>
              {/* Add Select Country */}
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
              {/* Add Select City or State */}
              <Box>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Select City or State"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.cityOrState}
                  name="cityOrState"
                  error={!!touched.cityOrState && !!errors.cityOrState}
                  helperText={touched.cityOrState && errors.cityOrState}
                />
              </Box>
              {/* Add Create Password */}
              <Box>
                <TextField
                  fullWidth
                  variant="filled"
                  type={showPassword ? "text" : "password"}
                  label="Create Password"
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
              {/* Add Confirm Password */}
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
  // Add validation for new fields
  organizationName: yup.string().required("Organization Name is required"),
  organizationEmail: yup
    .string()
    .email("Invalid email")
    .required("Organization Email Address is required"),
  profitNonProfit: yup.string().required("Profit/Non-Profit is required"),
  church: yup.string().required("JCGN Local Churches is required"),
  yearsInBusiness: yup.string().required("Years In Business is required"),
  startedIn: yup.string().required("Started In is required"),
  ownedAffiliated: yup.string().required("Owned, Affiliated etc is required"),
  servicesToJcgn: yup.string().required("Services to Jcgn is required"),
  contactPersonName: yup.string().required("Contact Person Name is required"),
  contactPersonTitle: yup.string().required("Contact Person Title is required"),
  companyMission: yup.string().required("Company Mission is required"),
  organizationPhone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Organization Phone No. is required"),
  organizationAddress: yup
    .string()
    .required("Organization Street Address is required"),
  country: yup.string().required("Country is required"),
  cityOrState: yup.string().required("City or State is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const initialValues = {
  // Add initial values for new fields
  organizationName: "",
  organizationEmail: "",
  profitNonProfit: "",
  church: "",
  yearsInBusiness: "",
  startedIn: "",
  ownedAffiliated: "",
  servicesToJcgn: "",
  contactPersonName: "",
  contactPersonTitle: "",
  companyMission: "",
  organizationPhone: "",
  organizationAddress: "",
  cityOrState: "",
  country: "",
  password: "",
  confirmPassword: "",
};

export default AddNewOrganization;
