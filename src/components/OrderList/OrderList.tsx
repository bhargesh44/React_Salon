import React from "react";
import "./orderList.css";
// import { AgGridReact } from "ag-grid-react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

// import "ag-grid-community/dist/styles/ag-grid.css";
// import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Button, Grid, Typography } from "@mui/material";
export default function OrderList(props: any) {
  const { handleClose } = props;
  const data = [
    {
      id: 1,
      productName: "facial package-1",
      productDescription: "facial package-1",
      employeeName: "a",
      timeReq: "a",
      qty: "1",
      price: "$100.00",
    },
    {
      id: 2,
      productName: "facial package-2",
      productDescription: "facial package-1",
      employeeName: "a",
      timeReq: "a",
      qty: "1",
      price: "$350.00",
    },
    {
      id: 3,
      productName: "facial package-3",
      productDescription: "facial package-1",
      employeeName: "a",
      timeReq: "a",
      qty: "1",
      price: "$250.00",
    },
    {
      id: 4,
      productName: "facial package-4",
      productDescription: "facial package-1",
      employeeName: "a",
      timeReq: "a",
      qty: "1",
      price: "$250.00",
    },
    {
      id: 5,
      productName: "facial package-5",
      productDescription: "facial package-1",
      employeeName: "a",
      timeReq: "a",
      qty: "1",
      price: "$250.00",
    },
    {
      id: 6,
      productName: "new year package-1",
      productDescription: "facial packages",
      employeeName: "a",
      timeReq: "a",
      qty: "1",
      price: "$3000.00",
    },
  ];
  const columns: GridColDef[] = [
    {
      headerName: "Product Name",
      field: "productName",
      width: 250,
    },
    {
      headerName: "Product Description",
      field: "productDescription",
      width: 250,
    },
    {
      headerName: "Employee Name",
      field: "employeeName",
      width: 250,
    },
    {
      headerName: "Time Req",
      field: "timeReq",
      width: 150,
    },
    {
      headerName: "Qty",
      field: "qty",
      width: 190,
    },
    {
      headerName: "Price",
      field: "price",
      width: 150,
    },
    {
      headerName: "Action",
      field: "id",
      width: 120,

      renderCell: () => {
        const onClick = () => {
          window.confirm("you want to select this data!!");
        };
        return (
          <Button variant="outlined" color="success" onClick={onClick}>
            Select
          </Button>
        );
      },
    },
  ];

  return (
    <div>
      <Typography variant="h5">Billing List</Typography>
      <Grid container mt={1} height="50px" className="grid-wrap-back">
        <input placeholder="Customer" className="customer_mobile_input_wrap" />
        <Button variant="text" className="btn">
          Find by Customer
        </Button>
        <input placeholder="Mobile" className="customer_mobile_input_wrap" />
        <Button variant="text" className="btn">
          Find by Mobile
        </Button>
        <Button variant="text" className="booking_order_btn">
          Booking Order
        </Button>
        <Button variant="text" className="quick_order_btn">
          Quick Orders
        </Button>
        <Button variant="text" className="close_btn_wrap" onClick={handleClose}>
          Close
        </Button>
      </Grid>
      <Grid container mb={2} height="10px" className="second_grid_wrap"></Grid>

      <Grid container>
        {/* <div
          className="ag-theme-alpine"
          style={{ width: "100%", height: "600px" }}
        >
          <AgGridReact
            rowData={data}
            columnDefs={columns}
            defaultColDef={defaultColDef}
            animateRows={true}
          />
        </div> */}

        <div style={{ height: 600, width: "100%" }}>
          <DataGrid rows={data} columns={columns} pageSize={5} />
        </div>
      </Grid>
    </div>
  );
}
