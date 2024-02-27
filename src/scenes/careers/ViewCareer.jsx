import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";

function ViewCareer() {
  const { id } = useParams();

  // Example user details (replace with actual data retrieval logic)
  const userDetails = {
    Name: "Mark Carson",
    Location: "mark@mail.com",
    Content:
      "Sample Content 123 Sample Content 123 Sample Content 123 Sample Content 123 Sample Content 123 Sample Content 123 Sample Content 123 ",
  };

  return (
    <Box m="20px" height="80vh" overflow="auto" paddingRight="20px">
      <Header title={`View Career ${id}`} subtitle="Status On or Off" />
      <Box ml={"40px"}>
        {" "}
        <Grid container spacing={2}>
          {Object.entries(userDetails).map(([field, value]) => (
            <React.Fragment key={field}>
              <Grid item xs={1}>
                <Typography
                  variant="h5"
                  component="span"
                  fontWeight="bold" // Always make the field name bold
                  mt={3}
                >
                  {field}:
                </Typography>{" "}
              </Grid>
              <Grid item xs={11}>
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

export default ViewCareer;
