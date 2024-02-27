import { Avatar, Box, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";

function ViewUser() {
  const { id } = useParams();

  // Updated user details
  const userDetails = {
    "Full Name": "John Doe",
    "Email Address": "johndoe@example.com",
    Age: "35",
    Gender: "Male",
    Occupation: "Software Engineer",
    "Date of Birth": "January 15, 1989",
    "Phone No.": "+1 123 456 7890",
    "City/State": "Anytown",
    Country: "USA",
    "Home Address": "123 Main Street",
  };

  return (
    <Box p="20px">
      <Header title={`View User ${id}`} subtitle="Status Active or Not" />
      <Grid container spacing={3}>
        {/* First column for user image */}
        <Grid item xs={8} md={2} ml={10} mr={10} textAlign="center">
          <Avatar
            alt="User"
            src={"/public/assets"}
            sx={{ width: 150, height: 150 }}
          />
        </Grid>
        {/* Second column for field labels and user details */}
        <Grid item xs={12} md={8}>
          {Object.entries(userDetails).map(([field, value]) => (
            <Grid container spacing={1} key={field}>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="subtitle1"
                  component="div"
                  fontWeight="bold"
                  sx={{ fontSize: "1.2rem" }} // Increase font size
                >
                  {field}:
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ fontSize: "1.3rem" }}
                >
                  {value}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default ViewUser;
