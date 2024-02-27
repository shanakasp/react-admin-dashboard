import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import PlaylistPlayOutlinedIcon from "@mui/icons-material/PlaylistPlayOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

const Item = ({ title, to, icon, selected, setSelected, children }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleSubmenuToggle = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <>
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => {
          setSelected(title);
          handleSubmenuToggle();
        }}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
      {isSubmenuOpen && children}
    </>
  );
};

const Subtopic = ({ title, to, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
              textAlign: "left",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  JSBN
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box pl={!isCollapsed ? "20px" : undefined} alignItems="left">
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="User Management"
              to="/user"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Subscription Packages"
              to="/subscription"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Appointment Logs"
              to="/appointment"
              icon={<EventAvailableOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="New Requests From Users"
              to=""
              icon={<ListAltOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            >
              {" "}
              <Subtopic
                title="Forms Submitted By User"
                to="/formsuser"
                selected={selected}
                setSelected={setSelected}
              />
              <Subtopic
                title="New Service Requests"
                to="/newserviceuser"
                selected={selected}
                setSelected={setSelected}
              />
            </Item>

            <Item
              title="Careers"
              to="/careers"
              icon={<BusinessCenterOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Payment Logs"
              to="/paymentlogs"
              icon={<PaymentOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Event Management"
              to="/event"
              icon={<EmojiEventsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="CMS Management"
              to="/cms"
              icon={<SettingsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Sermons Management"
              to="/sermons"
              icon={<PlaylistPlayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Templates"
              to="/templates"
              icon={<PlaylistAddCheckOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Membership Card Module"
              to="/membership"
              icon={<LiveTvOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Feedbacks"
              to="/feedback"
              icon={<FeedbackOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="JCGN Churches"
              to="/churches"
              icon={<GroupOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Live Stream"
              to="/live"
              icon={<LiveTvOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Video Management"
              to="/videos"
              icon={<VideoLibraryOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Admin Service Management"
              to="/admin"
              icon={<SettingsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Blocks"
              to="/blocks"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
