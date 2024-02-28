import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { tokens } from "../../theme";

import { mockDataContacts } from "../../data/mockData";

const PaymentLogs = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "User ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Payment Date",
      type: "date",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },

    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },

    {
      field: "city",
      headerName: "Payment Type",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Amount",
      flex: 0.5,
    },
  ];

  return (
    <Box m="20px">
      <Header title="Payment Logs" subtitle="" />
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

export default PaymentLogs;
