import React from "react";

import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Button, Grid, Typography } from "@mui/material";
export default function OrderList() {
  const data = [
    {
      productName: "a",
      productDescription: "a",
      employeeName: "a",
      timeReq: "a",
      qty: "1",
      price: "$100.00",
    },
    {
      productName: "a",
      productDescription: "a",
      employeeName: "a",
      timeReq: "a",
      qty: "1",
      price: "$100.00",
    },
    {
      productName: "a",
      productDescription: "a",
      employeeName: "a",
      timeReq: "a",
      qty: "1",
      price: "$100.00",
    },
    {
      productName: "a",
      productDescription: "a",
      employeeName: "a",
      timeReq: "a",
      qty: "1",
      price: "$100.00",
    },
    {
      productName: "a",
      productDescription: "a",
      employeeName: "a",
      timeReq: "a",
      qty: "1",
      price: "$100.00",
    },
  ];
  const columns = [
    {
      headerName: "Product Name",
      field: "productName",
    },
    {
      headerName: "Product Description",
      field: "productDescription",
    },
    {
      headerName: "Employee Name",
      field: "employeeName",
    },
    {
      headerName: "Time Req",
      field: "timeReq",
    },
    {
      headerName: "Qty",
      field: "qty",
    },
    {
      headerName: "Price",
      field: "price",
    },
    {
      headerName: "Actions",
      field: "id",
      cellRendererFramework: () => (
        <div>
          <Button
            variant="text"
            color="success"
            onClick={() => window.confirm("You want to Delete this Data!!")}
          >
            Delete
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
      <Typography variant="h5">Billing List</Typography>
      <Grid
        container
        mt={1}
        style={{ background: "black", height: "50px", color: "white" }}
      >
        <input
          style={{
            margin: "10px",
            width: "20%",
            height: "25px",
            background: "#636466",
            border: "2px solid green",
            color: "white",
          }}
        />
        <Button variant="text">Find by Customer</Button>
        <input
          style={{
            margin: "10px",
            width: "20%",
            height: "25px",
            background: "#636466",
            border: "2px solid green",
            color: "white",
          }}
        />
        <Button variant="text">Find by Mobile</Button>
        <Button variant="text" style={{ marginLeft: "25px" }}>
          Booking Order
        </Button>
        <Button
          variant="text"
          style={{
            marginLeft: "25px",
            marginTop: "5px",
            height: "40px",
            border: "2px solid white",
          }}
        >
          Quick Orders
        </Button>
        <Button variant="text" style={{ marginLeft: "25px" }}>
          Close
        </Button>
      </Grid>
      <Grid
        container
        mb={2}
        style={{ background: "orange", height: "10px" }}
      ></Grid>

      <Grid container>
        <div
          className="ag-theme-alpine"
          style={{ width: "100%", height: "600px" }}
        >
          <AgGridReact
            rowData={data}
            columnDefs={columns}
            defaultColDef={defaultColDef}
            animateRows={true}
          />
        </div>
      </Grid>
    </div>
  );
}
