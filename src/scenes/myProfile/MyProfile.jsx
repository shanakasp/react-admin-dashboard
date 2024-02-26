import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Header from "../../components/Header";

const Profile = () => {
  const [openPasswordModal, setOpenPasswordModal] = useState(false);
  const [openEditProfileModal, setOpenEditProfileModal] = useState(false);
  const [passwordValues, setPasswordValues] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    showCurrentPassword: false,
    showNewPassword: false,
    showConfirmPassword: false,
  });

  const handleOpenPasswordModal = () => {
    setOpenPasswordModal(true);
  };

  const handleClosePasswordModal = () => {
    setOpenPasswordModal(false);
  };

  const handleOpenEditProfileModal = () => {
    setOpenEditProfileModal(true);
  };

  const handleCloseEditProfileModal = () => {
    setOpenEditProfileModal(false);
  };

  const handleChangePassword = () => {
    // Handle password change logic here
    console.log("Password changed");
    handleClosePasswordModal();
  };

  const handlePasswordChange = (prop) => (event) => {
    setPasswordValues({ ...passwordValues, [prop]: event.target.value });
  };

  const handleClickShowPassword = (prop) => () => {
    setPasswordValues({ ...passwordValues, [prop]: !passwordValues[prop] });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleEditProfile = () => {
    // Handle edit profile logic here
    console.log("Profile updated");
    handleCloseEditProfileModal();
  };

  return (
    <Box m={2}>
      <Header title="My Profile" subtitle="" />
      <Box display="flex" alignItems="center" mt={2} ml={10}>
        <Avatar
          sx={{ width: 200, height: 200, marginRight: 2 }}
          src="/assets/user.png"
          alt="User Profile"
        />
        <Box ml={20}>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "1.3rem", fontWeight: "bold" }}
          >
            Name:
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: 1, fontSize: "1rem" }} // Adjust font size here
          >
            Charlest Smith
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ fontSize: "1.3rem", fontWeight: "bold", marginTop: 2 }}
          >
            Email Address:
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: 1, fontSize: "1rem" }} // Adjust font size here
          >
            charlestsmith888@gmail.com
          </Typography>
        </Box>
      </Box>
      <Box mt={2} display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "#6870fa",
            color: "white",
            fontSize: "1rem",
            "&:hover": {
              backgroundColor: "#3e4396",
            },
            marginRight: 2,
          }}
          onClick={handleOpenEditProfileModal}
        >
          Edit Profile
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenPasswordModal}
          sx={{
            backgroundColor: "#6870fa",
            color: "white",
            fontSize: "1rem",
            "&:hover": {
              backgroundColor: "#3e4396",
            },
          }}
        >
          Change Password
        </Button>
      </Box>
      {/* Password Change Modal */}
      <Dialog open={openPasswordModal} onClose={handleClosePasswordModal}>
        <DialogTitle sx={{ fontSize: "1.5rem" }}>Change Password</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            variant="filled"
            type={passwordValues.showCurrentPassword ? "text" : "password"}
            label="Current Password"
            value={passwordValues.currentPassword}
            onChange={handlePasswordChange("currentPassword")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword("showCurrentPassword")}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {passwordValues.showCurrentPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ marginTop: 1 }}
          />
          <TextField
            fullWidth
            variant="filled"
            type={passwordValues.showNewPassword ? "text" : "password"}
            label="New Password"
            value={passwordValues.newPassword}
            onChange={handlePasswordChange("newPassword")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword("showNewPassword")}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {passwordValues.showNewPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ marginTop: 1 }}
          />
          <TextField
            fullWidth
            variant="filled"
            type={passwordValues.showConfirmPassword ? "text" : "password"}
            label="Confirm Password"
            value={passwordValues.confirmPassword}
            onChange={handlePasswordChange("confirmPassword")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword("showConfirmPassword")}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {passwordValues.showConfirmPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ marginTop: 1 }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClosePasswordModal}
            sx={{ color: "#6870fa", fontSize: "1rem" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleChangePassword}
            sx={{ color: "#6870fa", fontSize: "1rem" }}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
      {/* Edit Profile Modal */}
      <Dialog open={openEditProfileModal} onClose={handleCloseEditProfileModal}>
        <DialogTitle sx={{ fontSize: "1.7rem" }}>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            variant="filled"
            label="Name"
            defaultValue="Charlest Smith"
            sx={{ marginTop: 1 }}
          />
          <TextField
            fullWidth
            variant="filled"
            label="Email Address"
            defaultValue="charlestsmith888@gmail.com"
            sx={{ marginTop: 1 }}
          />
          <Button
            variant="contained"
            component="label"
            sx={{
              marginTop: 1,
              backgroundColor: "#6870fa",
              color: "white",
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: "#3e4396",
              },
            }}
          >
            Upload Profile Picture
            <input type="file" hidden />
          </Button>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseEditProfileModal}
            sx={{ color: "#6870fa", fontSize: "1rem" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleEditProfile}
            sx={{ color: "#6870fa", fontSize: "1rem" }}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Profile;
