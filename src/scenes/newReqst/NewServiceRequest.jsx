import { Visibility as VisibilityIcon } from "@mui/icons-material"; // Importing icons
import { Box, IconButton, Tooltip, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { mockDataContacts } from "../../data/mockData";
import { tokens } from "../../theme";

const NewServiceRequest = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleViewClick = (id) => {
    // Handle view action
    console.log("View clicked for id:", id);
  };

  const handleEditClick = (id) => {
    // Handle edit action
    console.log("Edit clicked for id:", id);
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },

    {
      field: "name",
      headerName: "Full Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "dateSubmitted",
      headerName: "Date Submitted",
      flex: 1,
    },

    {
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => (
        <Box>
          <Tooltip title="View">
            <Link to={`/newserviceuser/view/${params.row.id}`}>
              {" "}
              {/* Construct URL dynamically */}
              <IconButton>
                <VisibilityIcon />
              </IconButton>
            </Link>
          </Tooltip>
        </Box>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="New Service Requests Submitted By Users" subtitle="" />
      <Box
        m="0 0 0 0"
        height="60vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            fontSize: "16px",
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
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default NewServiceRequest;
