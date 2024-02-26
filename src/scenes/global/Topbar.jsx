import { ArrowDropDownCircleOutlined } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ColorModeContext, tokens } from "../../theme";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      backgroundColor={colors.primary[400]}
      p={2}
    >
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <img
          alt="profile-user"
          width="100px"
          height="100px"
          src={`../../assets/logo.png`}
          style={{ cursor: "pointer", borderRadius: "50%" }}
        />
      </Box>

      {/* ICONS */}
      <Box>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon style={{ fontSize: "1.8rem" }} />
          ) : (
            <LightModeOutlinedIcon style={{ fontSize: "1.8rem" }} />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon style={{ fontSize: "1.8rem" }} />
        </IconButton>

        <IconButton
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginRight="20px"
        >
          <img
            alt="profile-user"
            width="50px"
            height="50px"
            src={`../../assets/user.png`}
            style={{ cursor: "pointer", borderRadius: "50%" }}
          />

          <Typography
            variant="h4"
            color={colors.grey[100]}
            fontWeight="bold"
            sx={{ m: "10px" }}
            onClick={handleClick}
          >
            Admin User <ArrowDropDownCircleOutlined />
            <Typography variant="h5" color={colors.greenAccent[500]}>
              Admin
            </Typography>
          </Typography>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              component={Link}
              to="/profile"
              onClick={handleClose}
              style={{ fontSize: "larger" }}
            >
              <IconButton>
                <AccountCircleIcon />
              </IconButton>
              My Profile
            </MenuItem>
            <MenuItem onClick={handleClose} style={{ fontSize: "larger" }}>
              <IconButton>
                <ExitToAppIcon />
              </IconButton>
              Logout
            </MenuItem>
          </Menu>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
