import { Grid, Typography, Input, Button } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
export default function CustomerList() {
  const data = [
    {
      customerCode: "a",
      customerName: "a",
      customerMobile: "a",
    },
    {
      customerCode: "a",
      customerName: "a",
      customerMobile: "a",
    },
    {
      customerCode: "a",
      customerName: "a",
      customerMobile: "a",
    },
    {
      customerCode: "a",
      customerName: "a",
      customerMobile: "a",
    },
    {
      customerCode: "a",
      customerName: "a",
      customerMobile: "a",
    },
    {
      customerCode: "a",
      customerName: "a",
      customerMobile: "a",
    },
  ];
  const columns = [
    {
      headerName: "Customer Code",
      field: "customerCode",
    },
    {
      headerName: "Customer Name",
      field: "customerName",
    },
    {
      headerName: "Customer Mobile",
      field: "customerMobile",
    },

    {
      headerName: "Select",
      field: "id",
      cellRendererFramework: () => (
        <div>
          <Button
            variant="outlined"
            color="success"
            onClick={() => window.confirm("You want to Select this Data!!")}
          >
            Select
          </Button>
        </div>
      ),
    },
  ];

  const defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };
  return (
    <div>
      <Grid container>
        <Grid item lg={6}>
          <Typography variant="h5">Choose a Customer</Typography>
        </Grid>
        <Grid item lg={6} display="flex" justifyContent="end">
          <CloseIcon />
        </Grid>
      </Grid>

      <Grid container mt={4} ml={5}>
        <Typography variant="h4">Select Orders</Typography>
      </Grid>

      <Grid container mt={4} ml={5}>
        <Grid item lg={6}>
          <Grid container>
            <Grid item lg={6}>
              <Typography variant="h6">Find Customer</Typography>
              <Input placeholder="Customer" />
            </Grid>
            <Grid item lg={6}>
              <Typography variant="h6">Find Mobile</Typography>
              <Input placeholder="Mobile" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={6}></Grid>
      </Grid>

      <Grid container mt={4}>
        <Grid item lg={8} md={8} sm={8} xs={8}>
          <div
            className="ag-theme-alpine"
            style={{ height: 400, width: "100%" }}
          >
            <AgGridReact
              rowData={data}
              columnDefs={columns}
              defaultColDef={defaultColDef}
              animateRows={true}
            />
          </div>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={4}></Grid>
      </Grid>
    </div>
  );
}
