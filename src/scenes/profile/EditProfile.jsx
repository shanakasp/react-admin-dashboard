import CameraAltIcon from "@mui/icons-material/CameraAlt";
import EditIcon from "@mui/icons-material/Edit";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const EditProfile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [name, setName] = useState("Charlest Smith");
  const [email, setEmail] = useState("charlestsmith888@gmail.com");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Added selectedImage state

  const handleUpdateName = () => {
    if (!name.trim()) {
      setNameError(true);
    } else {
      setNameError(false);
      // Perform update action here
    }
  };

  const handleUpdateEmail = () => {
    if (!email.trim()) {
      setEmailError(true);
    } else {
      setEmailError(false);
      // Perform update action here
    }
  };

  const handleUpdateProfileImage = (event) => {
    const file = event.target.files[0]; // Get the selected file
    setSelectedImage(file);
    // You can perform additional actions such as uploading the image to a server here
  };

  const handleClick = () => {
    document.getElementById("fileInput").click(); // Trigger file input click event
  };

  return (
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="20px"
      >
        <Header title="Edit Profile" subtitle="" />
      </Box>
      <Box display="flex" alignItems="center">
        <Avatar
          alt="User Avatar"
          src="/assets/user.png"
          sx={{
            width: 200,
            height: 200,
            marginRight: "20px",
            marginLeft: "50px",
          }}
        />
        <Box>
          <Box display="flex" alignItems="center" sx={{ marginBottom: "10px" }}>
            <Typography variant="h5" gutterBottom sx={{ fontSize: "1.5rem" }}>
              Name
            </Typography>
            <TextField
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              size="small"
              error={nameError}
              helperText={nameError ? "Name cannot be empty" : ""}
              sx={{ marginRight: "10px", width: "200px", fontSize: "1rem" }}
            />
            <IconButton color="primary" size="large" onClick={handleUpdateName}>
              <EditIcon />
            </IconButton>
          </Box>
          <Box display="flex" alignItems="center" sx={{ marginBottom: "10px" }}>
            <Typography variant="h5" gutterBottom sx={{ fontSize: "1.5rem" }}>
              Email Address
            </Typography>
            <TextField
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="small"
              error={emailError}
              helperText={emailError ? "Email cannot be empty" : ""}
              sx={{ marginRight: "10px", width: "300px", fontSize: "1rem" }}
            />
            <IconButton
              color="primary"
              size="large"
              onClick={handleUpdateEmail}
            >
              <EditIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleUpdateProfileImage}
        style={{ display: "none" }} // Hide the file input element
      />
      <Button
        color="primary"
        variant="text"
        startIcon={<CameraAltIcon />}
        sx={{ marginTop: 1, fontSize: "1rem" }}
        onClick={handleClick} // Call handleClick when the button is clicked
      >
        Update Profile Image
      </Button>
      {selectedImage && (
        <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
      )}
      <Box mt={2} display="flex" justifyContent="center">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#6870fa",
            color: "white",
            fontSize: "1rem",
            "&:hover": {
              backgroundColor: "#3e4396",
            },
          }}
        >
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default EditProfile;
