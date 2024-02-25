import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { mockDataTeam } from "../../data/mockData";
import { tokens } from "../../theme";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "Status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin"}
            {access === "manager"}
            {access === "user"}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="User Management" subtitle="Managing the users" />

      <Link to={"createuser"}>
        {" "}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#6870fa",
            color: "white",
            marginRight: 3,
            fontSize: "16px",
            "&:hover": {
              backgroundColor: "#3e4396", // Change to green color on hover
            },
          }}
        >
          Add New User
        </Button>
      </Link>
      <Link to={"addneworg"}>
        {" "}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#6870fa",
            color: "white",
            marginRight: 2,
            fontSize: "16px",
            "&:hover": {
              backgroundColor: "#3e4396", // Change to green color on hover
            },
          }}
        >
          Add New Organization
        </Button>
      </Link>

      {/* DataGrid */}
      <Box
        m="40px 0 0 0"
        height="51vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            fontSize: "1rem", // Adjust the font size here
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.greenAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.greenAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
