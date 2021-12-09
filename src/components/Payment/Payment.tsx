import { Typography, Grid, Button, TextField } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import React from "react";

export default function Payment(props: any) {
  const { handleClose } = props;
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
  ];
  const defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };
  return (
    <div>
      <Typography variant="h5">Payment </Typography>
      <Grid
        container
        style={{ background: "white", height: "50px", color: "black" }}
      >
        <Typography variant="subtitle2" style={{ margin: "8px" }}>
          Date Of Sale: <span style={{ color: "red" }}>Dec 17,2021</span>
        </Typography>
        <Typography variant="subtitle2" style={{ margin: "8px" }}>
          Appointment on: <span style={{ color: "red" }}>Dec 17,2021</span>
        </Typography>
        <Typography variant="subtitle2" style={{ margin: "8px" }}>
          Bill No: <span style={{ color: "red" }}>4</span>
        </Typography>
        <Typography variant="subtitle2" style={{ margin: "8px" }}>
          Order Type: <span style={{ color: "red" }}>BOK</span>
        </Typography>
        <Typography variant="subtitle2" style={{ margin: "8px" }}>
          Table No: <br />
          <span style={{ color: "red" }}>Table-03</span>
        </Typography>
        <Typography variant="subtitle2" style={{ margin: "8px" }}>
          Customer: <span style={{ color: "red" }}>max customer06</span>
        </Typography>
        <Button
          variant="contained"
          onClick={handleClose}
          style={{
            height: "25px",
            background: "orange",
            borderRadius: "15px",
            marginTop: "15px",
            marginBottom: "15px",
            marginLeft: "150px",
          }}
        >
          Close
        </Button>
      </Grid>

      <Grid container mt={2} pt={1} pb={1} style={{ background: "#b4d9c9" }}>
        <Grid item lg={6}>
          <Grid container>
            <Grid item lg={4}>
              <Typography
                variant="subtitle2"
                padding={1}
                style={{ width: "50%" }}
              >
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
            <Grid item lg={3}>
              <Typography
                variant="subtitle2"
                padding={1}
                style={{ fontWeight: "bold", textAlign: "end" }}
              >
                $4200.00
              </Typography>
              <Typography
                variant="subtitle2"
                padding={1}
                style={{ fontWeight: "bold", textAlign: "end" }}
              >
                $0.00
              </Typography>
              <Typography
                variant="subtitle2"
                padding={1}
                style={{ fontWeight: "bold", textAlign: "end" }}
              >
                $5.00
              </Typography>
              <Typography
                variant="subtitle2"
                padding={1}
                style={{ fontWeight: "bold", textAlign: "end" }}
              >
                $4410.00
              </Typography>
              <Typography
                variant="subtitle2"
                padding={1}
                style={{ fontWeight: "bold", textAlign: "end" }}
              >
                $0.00
              </Typography>
              <Typography
                variant="subtitle2"
                padding={1}
                style={{ fontWeight: "bold", textAlign: "end" }}
              >
                $0.00
              </Typography>
              <Typography
                variant="subtitle2"
                padding={1}
                style={{
                  fontWeight: "bold",
                  color: "purple",
                  textAlign: "end",
                }}
              >
                $4410.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6}>
          <Grid container sx={{ marginTop: "3px" }}>
            <Grid item lg={6}>
              <Button
                variant="contained"
                style={{
                  width: "30%",
                  height: "75px",
                  marginBottom: 2,
                  marginRight: 2,
                  color: "orange",
                  fontWeight: "bold",
                  background: "white",
                }}
              >
                7
              </Button>
              <Button
                variant="contained"
                style={{
                  width: "30%",
                  height: "75px",
                  marginBottom: 2,
                  marginRight: 2,
                  color: "orange",
                  fontWeight: "bold",
                  background: "white",
                }}
              >
                8
              </Button>
              <Button
                variant="contained"
                style={{
                  width: "30%",
                  height: "75px",
                  marginBottom: 2,
                  marginRight: 2,
                  color: "orange",
                  fontWeight: "bold",
                  background: "white",
                }}
              >
                9
              </Button>
              <Button
                variant="contained"
                style={{
                  width: "30%",
                  height: "75px",
                  marginBottom: 2,
                  marginRight: 2,
                  color: "orange",
                  fontWeight: "bold",
                  background: "white",
                }}
              >
                4
              </Button>
              <Button
                variant="contained"
                style={{
                  width: "30%",
                  height: "75px",
                  marginBottom: 2,
                  marginRight: 2,
                  color: "orange",
                  fontWeight: "bold",
                  background: "white",
                }}
              >
                5
              </Button>
              <Button
                variant="contained"
                style={{
                  width: "30%",
                  height: "75px",
                  marginBottom: 2,
                  marginRight: 2,
                  color: "orange",
                  fontWeight: "bold",
                  background: "white",
                }}
              >
                6
              </Button>
              <Button
                variant="contained"
                style={{
                  width: "30%",
                  height: "75px",
                  marginBottom: 2,
                  marginRight: 2,
                  color: "orange",
                  fontWeight: "bold",
                  background: "white",
                }}
              >
                1
              </Button>
              <Button
                variant="contained"
                style={{
                  width: "30%",
                  height: "75px",
                  marginBottom: 2,
                  marginRight: 2,
                  color: "orange",
                  fontWeight: "bold",
                  background: "white",
                }}
              >
                2
              </Button>
              <Button
                variant="contained"
                style={{
                  width: "30%",
                  height: "75px",
                  marginBottom: 2,
                  marginRight: 2,
                  color: "orange",
                  fontWeight: "bold",
                  background: "white",
                }}
              >
                3
              </Button>
              <Button
                variant="contained"
                style={{
                  width: "30%",
                  height: "75px",
                  marginBottom: 2,
                  marginRight: 2,
                  color: "orange",
                  fontWeight: "bold",
                  background: "white",
                }}
              >
                .
              </Button>
              <Button
                variant="contained"
                style={{
                  width: "30%",
                  height: "75px",
                  marginBottom: 2,
                  marginRight: 2,
                  color: "orange",
                  fontWeight: "bold",
                  background: "white",
                }}
              >
                0
              </Button>
              <Button
                variant="contained"
                style={{
                  width: "30%",
                  height: "75px",
                  marginBottom: 2,
                  marginRight: 2,
                  color: "orange",
                  fontWeight: "bold",
                  background: "white",
                }}
              >
                C
              </Button>
            </Grid>
            <Grid item lg={6}>
              <Grid
                container
                ml={3}
                display="flex"
                direction="column"
                justifyContent="center"
                p={2}
                sx={{
                  background: "white",
                  width: "80%",
                }}
              >
                <Button
                  variant="contained"
                  style={{
                    background: "#3a946d",
                    height: "50px",
                    marginBottom: 5,
                  }}
                >
                  Cash
                </Button>
                <Button
                  variant="contained"
                  style={{
                    background: "#3a946d",
                    height: "75px",
                    marginBottom: 5,
                  }}
                >
                  Credit Card
                </Button>
                <Button
                  variant="contained"
                  style={{
                    background: "#3a946d",
                    height: "75px",
                    marginBottom: 5,
                  }}
                >
                  Currency Payment
                </Button>
                <Button
                  variant="contained"
                  style={{
                    background: "#3a946d",
                    height: "75px",
                    marginBottom: 5,
                  }}
                >
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
        <div className="ag-theme-alpine" style={{ height: 300, width: "100%" }}>
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
