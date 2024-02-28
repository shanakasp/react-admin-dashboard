import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Box,
  IconButton,
  MenuItem,
  Select,
  Tooltip,
  useTheme,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { mockDataContacts } from "../../data/mockData";
import { tokens } from "../../theme";

const SubscripttionPackage = () => {
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
    { field: "id", headerName: "S.NO" },
    { field: "registrarId", headerName: "Package ID", flex: 0.5 },
    { field: "name", headerName: "Package Name", flex: 1 },
    { field: "age", headerName: "Charges", flex: 1 },

    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => (
        <Select
          value={params.row.status}
          onChange={(event) =>
            handleStatusChange(params.row.id, event.target.value)
          }
        >
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Inactive">Inactive</MenuItem>
        </Select>
      ),
    },
    {
      headerName: "Actions",
      renderCell: (params) => (
        <Box>
          <Tooltip title="View">
            <Link to={`/subscription/viewsubcription/${params.row.id}`}>
              <IconButton
                onClick={() => handleViewClick(params.row.id, params.row.role)}
              >
                <VisibilityIcon />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip title="Edit">
            <Link to={`/subscription/editsubcription/${params.row.id}`}>
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
        <Header title="Subscription Package Management" subtitle="" />
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

export default SubscripttionPackage;
