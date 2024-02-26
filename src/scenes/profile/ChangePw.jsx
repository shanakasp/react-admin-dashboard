import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
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
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box m="20px">
      <Header title="Change Password" subtitle="" />

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
          <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Box width="60%" mb={2}>
                <TextField
                  fullWidth
                  variant="filled"
                  type={showPassword ? "text" : "password"}
                  label="Current Password *"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.currentPassword}
                  name="currentPassword"
                  error={!!touched.currentPassword && !!errors.currentPassword}
                  helperText={touched.currentPassword && errors.currentPassword}
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
              <Box width="60%" mb={2}>
                <TextField
                  fullWidth
                  variant="filled"
                  type={showNewPassword ? "text" : "password"}
                  label="New Password *"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.newPassword}
                  name="newPassword"
                  error={!!touched.newPassword && !!errors.newPassword}
                  helperText={touched.newPassword && errors.newPassword}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowNewPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showNewPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box width="60%" mb={2}>
                <TextField
                  fullWidth
                  variant="filled"
                  type={showConfirmPassword ? "text" : "password"}
                  label="Confirm Password *"
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
              <Box width="100%" display="flex" justifyContent="center">
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
              </Box>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  currentPassword: yup.string().required("Current Password is required"),
  newPassword: yup.string().required("New Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const initialValues = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export default CreateNewUser;
