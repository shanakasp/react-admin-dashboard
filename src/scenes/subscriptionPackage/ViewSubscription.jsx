import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";

function ViewSubscription() {
  const { id } = useParams();

  // Example user details (replace with actual data retrieval logic)
  const userDetails = {
    Package_Name: "Membership Card Age 12-17",
    Amount: "$115",
    Features: "Sample Feature 123 , Sample Feature 1 , Sample Feature 231",
    For_Age: "12-17 Years Old",
    Status: "Active",
    Subscription_Note: "",
  };

  return (
    <Box m="20px" height="80vh" overflow="auto" paddingRight="20px">
      <Header title={`View Subscription ${id}`} subtitle="" />
      <Box ml={"40px"}>
        {" "}
        <Grid container spacing={2}>
          {Object.entries(userDetails).map(([field, value]) => (
            <React.Fragment key={field}>
              <Grid item xs={2}>
                <Typography
                  variant="h5"
                  component="span"
                  fontWeight="bold" // Always make the field name bold
                  mt={3}
                >
                  {field}:
                </Typography>{" "}
              </Grid>
              <Grid item xs={10}>
                <Typography variant="h5" component="span" mt={3} mr={2}>
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

export default ViewSubscription;
