import { Typography, Grid, Button, TextField } from "@mui/material";
// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/dist/styles/ag-grid.css";
// import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import "./payment.css";
export default function Payment(props: any) {
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
    },
    {
      headerName: "Price",
      field: "price",
      width: 130,
    },
  ];

  return (
    <div>
      <Typography variant="h5">Payment </Typography>
      <Grid container className="head_grid">
        <Typography variant="subtitle2" margin="8px">
          Date Of Sale: <span className="color_span">Dec 17,2021</span>
        </Typography>
        <Typography variant="subtitle2" margin="8px">
          Appointment on: <span className="color_span">Dec 17,2021</span>
        </Typography>
        <Typography variant="subtitle2" margin="8px">
          Bill No: <span className="color_span">4</span>
        </Typography>
        <Typography variant="subtitle2" margin="8px">
          Order Type: <span className="color_span">BOK</span>
        </Typography>
        <Typography variant="subtitle2" margin="8px">
          Table No: <br />
          <span className="color_span">Table-03</span>
        </Typography>
        <Typography variant="subtitle2" margin="8px">
          Customer: <span className="color_span">max customer06</span>
        </Typography>
        <Button variant="contained" onClick={handleClose} className="close_btn">
          Close
        </Button>
      </Grid>

      <Grid container mt={2} pt={1} pb={1} className="box_grid">
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <Grid container>
            <Grid item lg={4} md={4} sm={4} xs={4}>
              <Typography variant="subtitle2" padding={1} width="50%">
                Sub Total:
              </Typography>
              <Typography variant="subtitle2" padding={1}>
                Discount:
              </Typography>
              <Typography variant="subtitle2" padding={1}>
                TAX(UAE VAT):(5%)
              </Typography>
              <Typography variant="subtitle2" padding={1}>
                Bill Amount:
              </Typography>
              <Typography variant="subtitle2" padding={1}>
                Advance Paid:
              </Typography>
              <Typography variant="subtitle2" padding={1}>
                Paid Amount:
              </Typography>
              <Typography variant="subtitle2" padding={1}>
                Balance:
              </Typography>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
              <Typography
                variant="subtitle2"
                padding={1}
                fontWeight="bold"
                textAlign="end"
              >
                $4200.00
              </Typography>
              <Typography
                variant="subtitle2"
                padding={1}
                fontWeight="bold"
                textAlign="end"
              >
                $0.00
              </Typography>
              <Typography
                variant="subtitle2"
                padding={1}
                fontWeight="bold"
                textAlign="end"
              >
                $5.00
              </Typography>
              <Typography
                variant="subtitle2"
                padding={1}
                fontWeight="bold"
                textAlign="end"
              >
                $4410.00
              </Typography>
              <Typography
                variant="subtitle2"
                padding={1}
                fontWeight="bold"
                textAlign="end"
              >
                $0.00
              </Typography>
              <Typography
                variant="subtitle2"
                padding={1}
                fontWeight="bold"
                textAlign="end"
              >
                $0.00
              </Typography>
              <Typography
                variant="subtitle2"
                padding={1}
                fontWeight="bold"
                textAlign="end"
                color="purple"
              >
                $4410.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Grid container sx={{ marginTop: "3px" }}>
            <Grid item lg={6} md={6} sm={6} xs={6}>
              <Button variant="contained" className="calc_btn1">
                7
              </Button>
              <Button variant="contained" className="calc_btn1">
                8
              </Button>
              <Button variant="contained" className="calc_btn1">
                9
              </Button>
              <Button variant="contained" className="calc_btn1">
                4
              </Button>
              <Button variant="contained" className="calc_btn1">
                5
              </Button>
              <Button variant="contained" className="calc_btn1">
                6
              </Button>
              <Button variant="contained" className="calc_btn1">
                1
              </Button>
              <Button variant="contained" className="calc_btn1">
                2
              </Button>
              <Button variant="contained" className="calc_btn1">
                3
              </Button>
              <Button variant="contained" className="calc_btn1">
                .
              </Button>
              <Button variant="contained" className="calc_btn1">
                0
              </Button>
              <Button variant="contained" className="calc_btn1">
                C
              </Button>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6}>
              <Grid
                container
                ml={3}
                display="flex"
                direction="column"
                justifyContent="center"
                p={2}
                width="80%"
                className="box_background"
              >
                <Button variant="contained" className="box_cash_btn">
                  Cash
                </Button>
                <Button variant="contained" className="box_btn">
                  Credit Card
                </Button>
                <Button variant="contained" className="box_btn">
                  Currency Payment
                </Button>
                <Button variant="contained" className="box_btn">
                  Customer Account
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        variant="filled"
        size="small"
        sx={{ mt: 2, mb: 2 }}
        InputProps={{ disableUnderline: true }}
        placeholder="Enter Amount"
      />
      <Grid container>
        {/* <div className="ag-theme-alpine" style={{ height: 300, width: "100%" }}>
          <AgGridReact
            rowData={data}
            columnDefs={columns}
            defaultColDef={defaultColDef}
            animateRows={true}
          />
        </div> */}

        <div style={{ height: 300, width: "100%" }}>
          <DataGrid rows={data} columns={columns} pageSize={5} />
        </div>
      </Grid>
    </div>
  );
}
