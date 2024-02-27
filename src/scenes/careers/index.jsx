import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, Button, IconButton, Tooltip, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { mockDataContacts } from "../../data/mockData";
import { tokens } from "../../theme";

const Careers = () => {
  const [data, setData] = useState(
    mockDataContacts.map((item) => ({
      ...item,
      role: Math.random() < 0.5 ? "User" : "Organization", // randomly assign User or Organization
      status: Math.random() < 0.5 ? "Active" : "Inactive", // randomly assign Active or Inactive
    }))
  );

  const handleViewClick = (id, role) => {
    console.log(`View clicked for ${role} with id:`, id);
  };

  const handleEditClick = (id, role) => {
    console.log(`Edit clicked for ${role} with id:`, id);
  };

  const handleStatusChange = (id, newStatus) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, status: newStatus };
      }
      return item;
    });
    setData(updatedData);
    console.log("Status changed for id:", id, "New status:", newStatus);
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "S. NO" },
    { field: "name", headerName: "Title", flex: 1 },
    { field: "phone", headerName: "Date Time", flex: 1 },
    { field: "email", headerName: "Location", flex: 1 },

    {
      headerName: "Actions",
      renderCell: (params) => (
        <Box>
          <Tooltip title="View">
            <Link to={`/careers/viewcareer/${params.row.id}`}>
              <IconButton
                onClick={() => handleViewClick(params.row.id, params.row.role)}
              >
                <VisibilityIcon />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip title="Edit">
            <Link to={`/careers/editcareer/${params.row.id}`}>
              <IconButton
                onClick={() => handleEditClick(params.row.id, params.row.role)}
              >
                <EditIcon />
              </IconButton>
            </Link>
          </Tooltip>
        </Box>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="20px"
      >
        <Header title="User Management" subtitle="Managing the users" />
        <Box>
          <Link to={"/careers/newcareer"} style={{ marginRight: "10px" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#6870fa",
                color: "white",
                fontSize: "16px",
                "&:hover": {
                  backgroundColor: "#3e4396",
                },
              }}
            >
              Add a New Career
            </Button>
          </Link>
        </Box>
      </Box>

      <Box
        m="10px 0 0 0"
        height="55vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            fontSize: "14px",
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={data}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Careers;
