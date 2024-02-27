import { Avatar, Box, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";

function ViewUser() {
  const { id } = useParams();

  // Updated user details
  const userDetails = {
    "Organization/Company Name": "VENTURE COMMUNITY SERVICES",
    "Organization Email": "kbujiriri@venturecs.org",
    "Profit/Non-Profit": "nonprofit",
    "Years in Business": "null Years", // Assuming "null" is part of the data
    "Started In": "June 19, 2014",
    "Owned, Affiliated etc": "jjjjjjj",
    "Organization Street Address": "345 MAIN STREET",
    "City/State": "Abbeville",
    Country: "United States",
    "Service to provide to JCGN": "soooco",
    "Full name of Person to Contact": "klllll",
    Title: "jjkjmnnn",
    "Organization/Company Mission": "lkkkkk",
  };

  const handleSubmit = (event) => {
    // Your form submission logic goes here
    event.preventDefault();
    // Example: console.log("Form submitted");
  };

  return (
    <Box m="20px" height="70vh" overflow="auto" paddingRight="20px">
      {" "}
      {/* Box with height and vertical scrolling */}
      <Header
        title={`View Organization ${id}`}
        subtitle="Status Active or Not"
      />
      <Grid container spacing={3}>
        {/* First column for user image */}
        <Grid item xs={8} md={2} ml={10} mr={7} textAlign="center">
          <Avatar
            alt="User"
            src={"/public/assets"}
            sx={{ width: 150, height: 150 }}
          />
        </Grid>
        {/* Second column for field labels and user details */}
        <Grid item xs={12} md={8} mr={2}>
          <form onSubmit={handleSubmit}>
            {" "}
            {/* Form with onSubmit handler */}
            {Object.entries(userDetails).map(([field, value]) => (
              <Grid container spacing={1} key={field}>
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    fontWeight="bold"
                    sx={{ fontSize: "1rem", marginBottom: "8px" }} // Increase font size and add bottom margin
                  >
                    {field}:
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{ fontSize: "1.1rem", marginBottom: "8px" }} // Increase font size and add bottom margin
                  >
                    {value}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ViewUser;
