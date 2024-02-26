import { Box, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";

function ViewAppointment() {
  const { id } = useParams();

  // Example user details (replace with actual data retrieval logic)
  const userDetails = {
    fullName: "Mark Carson",
    emailAddress: "mark@mail.com",
    homeAddress: "House No.123",
    phoneNumber: "+1 101 202 303",
    appointmentDate: "September 20 2022",
    appointmentTime: "15:00:00",
    typeOfMeeting: "Meeting Abc",
    lengthOfMeeting: "1 Hour",
    purposeOfMeeting: "Confidential",
    locationOfMeeting: "ABC Location",
  };

  return (
    <Box m="20px" height="80vh" overflow="auto" paddingRight="20px">
      <Header title={`View Appointment ${id}`} subtitle="" />
      <Grid container spacing={2}>
        {Object.entries(userDetails).map(([field, value]) => (
          <Grid item xs={12} sm={6} key={field}>
            <Typography variant="h6" component="span">
              {field}:{" "}
            </Typography>
            <Typography component="span">{value}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ViewAppointment;
