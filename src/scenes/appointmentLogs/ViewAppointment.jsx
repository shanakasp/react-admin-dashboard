import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";

function ViewAppointment() {
  const { id } = useParams();

  const userDetails = {
    "Full Name": "Mark Carson",
    "Email Address": "mark@mail.com",
    "Home Address": "House No.123",
    "Phone Number": "+1 101 202 303",
    "Appointment Date": "September 20 2022",
    "Appointment Time": "15:00:00",
    "Type of Meeting": "Meeting Abc",
    "Length of Meeting": "1 Hour",
    "Purpose of Meeting": "Confidential",
    "Location of Meeting": "ABC Location",
  };

  return (
    <Box m="20px" height="80vh" overflow="auto" paddingRight="20px">
      <Header title={`View Appointment ${id}`} subtitle="" />
      <Box ml="40px">
        <Grid container spacing={2}>
          {Object.entries(userDetails).map(([field, value]) => (
            <React.Fragment key={field}>
              <Grid item xs={2}>
                <Typography
                  variant="h5"
                  component="span"
                  fontWeight="bold"
                  mt={3}
                >
                  {field}:
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography variant="h6" component="span" mt={3} mr={-5}>
                  {value}
                </Typography>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default ViewAppointment;
