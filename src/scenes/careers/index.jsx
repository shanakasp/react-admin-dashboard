import {
  Edit as EditIcon,
  Visibility as VisibilityIcon,
} from "@mui/icons-material"; // Importing icons
import { Box, Button, IconButton, Tooltip, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { mockDataContacts } from "../../data/mockData";
import { tokens } from "../../theme";

const Careers = () => {
  const handleViewClick = (id) => {
    // Handle view action
    console.log("View clicked for id:", id);
  };

  const handleEditClick = (id) => {
    // Handle edit action
    console.log("Edit clicked for id:", id);
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Title",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Location",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Date Time",
      flex: 1,
    },

    {
      headerName: "Actions",

      renderCell: (params) => (
        <Box>
          <Tooltip title="View">
            <Link to={`/appointment/view/${params.row.id}`}>
              {" "}
              {/* Construct URL dynamically */}
              <IconButton>
                <VisibilityIcon />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip title="Edit">
            <IconButton onClick={() => handleEditClick(params.row.id)}>
              <EditIcon />
            </IconButton>
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
        <Header title="Careers Management" subtitle="Managing the careers" />
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
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Careers;
