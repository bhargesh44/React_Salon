import React from "react";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Box from "@mui/material/Box";

import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
export default function QuickOrder() {
  const data = [
    {
      productName: "a",
      qty: "a",
      rate: "a",
    },
    {
      productName: "a",
      qty: "a",
      rate: "a",
    },
    {
      productName: "a",
      qty: "a",
      rate: "a",
    },
    {
      productName: "a",
      qty: "a",
      rate: "a",
    },
    {
      productName: "a",
      qty: "a",
      rate: "a",
    },
  ];
  const columns = [
    {
      headerName: "Product Name",
      field: "productName",
    },
    {
      headerName: "Qty",
      field: "qty",
    },
    {
      headerName: "Rate",
      field: "rate",
    },

    {
      headerName: "Select",
      field: "id",
      cellRendererFramework: () => (
        <div>
          <DeleteForeverIcon
            color="error"
            onClick={() => window.confirm("You want to Delete this Data!!")}
          />
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
      <Typography variant="h5">Quick order</Typography>
      <Grid
        container
        mt={1}
        style={{ background: "black", height: "50px", color: "white" }}
      >
        <Grid item lg={8}>
          <Typography variant="subtitle1" style={{ marginLeft: "25px" }}>
            Oder no :
          </Typography>
        </Grid>
        <Grid item lg={4}>
          <Button variant="text">Update</Button>
          <Button variant="text" style={{ marginLeft: "50px" }}>
             Close
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        mb={2}
        style={{ background: "orange", height: "10px" }}
      ></Grid>

      <Box
        component="span"
        sx={{
          display: "flex",
          justifyContent: "center",
          border: "outset",
        }}
      >
        <Grid container>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Grid container>
              <div
                className="ag-theme-alpine"
                style={{ height: 500, width: "100%" }}
              >
                <AgGridReact
                  rowData={data}
                  columnDefs={columns}
                  defaultColDef={defaultColDef}
                  animateRows={true}
                />
              </div>
            </Grid>
            <Grid container>
              <Grid item lg={6}>
                <input
                  placeholder="Enter Item Barcode"
                  style={{ width: "100%", height: "25px", marginTop: "25px" }}
                />
              </Grid>
              <Grid item lg={6}>
                <FormControl
                  style={{
                    marginLeft: "20px",
                    marginTop: "25px",
                    width: "90%",
                    marginBottom: "25px",
                  }}
                >
                  <InputLabel htmlFor="my-input">Select Chair</InputLabel>
                  <Select id="my-input">
                    <MenuItem value="table-01">Table-01</MenuItem>
                    <MenuItem value="table-02">Table-02</MenuItem>
                    <MenuItem value="table-03">Table-03</MenuItem>
                    <MenuItem value="table-04">Table-04</MenuItem>
                    <MenuItem value="table-05">Table-05</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Grid container>
              <Box
                component="span"
                sx={{
                  width: "100px",
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid grey",
                  marginX: 2,
                  marginY: 1,
                }}
              >
                <Button>Hair Cut</Button>
              </Box>
              <Box
                component="span"
                sx={{
                  width: "100px",
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid grey",

                  marginY: 1,
                }}
              >
                <Button>Bath</Button>
              </Box>
            </Grid>

            <Grid container>
              <Box
                component="span"
                sx={{
                  width: "90px",
                  height: "110px",
                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid grey",
                  marginLeft: 2,
                  marginY: 1,
                }}
              >
                <Button>Hair Cut</Button>
              </Box>
              <Box
                component="span"
                sx={{
                  width: "90px",
                  height: "110px",
                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid grey",

                  marginLeft: 1,
                  marginY: 1,
                }}
              >
                <Button>Bath</Button>
              </Box>
              <Box
                component="span"
                sx={{
                  width: "90px",
                  height: "110px",
                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid grey",
                  marginLeft: 1,

                  marginY: 1,
                }}
              >
                <Button>Bath</Button>
              </Box>
              <Box
                component="span"
                sx={{
                  width: "90px",
                  height: "110px",
                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid grey",
                  marginLeft: 1,

                  marginY: 1,
                }}
              >
                <Button>Bath</Button>
              </Box>
              <Box
                component="span"
                sx={{
                  width: "90px",
                  height: "110px",
                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid grey",
                  marginLeft: 1,

                  marginY: 1,
                }}
              >
                <Button>Bath</Button>
              </Box>
              <Box
                component="span"
                sx={{
                  width: "90px",
                  height: "110px",
                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid grey",
                  marginLeft: 1,

                  marginY: 1,
                }}
              >
                <Button>Bath</Button>
              </Box>
              <Box
                component="span"
                sx={{
                  width: "90px",
                  height: "110px",
                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid grey",
                  marginLeft: 1,

                  marginY: 1,
                }}
              >
                <Button>Bath</Button>
              </Box>
            </Grid>

            <Grid container>
              <Box
                component="span"
                sx={{
                  width: "90px",
                  height: "110px",
                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid grey",
                  marginLeft: 2,
                  marginY: 1,
                }}
              >
                <Button>Hair Cut</Button>
              </Box>
              <Box
                component="span"
                sx={{
                  width: "90px",
                  height: "110px",
                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid grey",

                  marginLeft: 1,
                  marginY: 1,
                }}
              >
                <Button>Bath</Button>
              </Box>
              <Box
                component="span"
                sx={{
                  width: "90px",
                  height: "110px",
                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid grey",
                  marginLeft: 1,

                  marginY: 1,
                }}
              >
                <Button>Bath</Button>
              </Box>
              <Box
                component="span"
                sx={{
                  width: "90px",
                  height: "110px",
                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid grey",
                  marginLeft: 1,

                  marginY: 1,
                }}
              >
                <Button>Bath</Button>
              </Box>
              <Box
                component="span"
                sx={{
                  width: "90px",
                  height: "110px",
                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid grey",
                  marginLeft: 1,

                  marginY: 1,
                }}
              >
                <Button>Bath</Button>
              </Box>
              <Box
                component="span"
                sx={{
                  width: "90px",
                  height: "110px",
                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid grey",
                  marginLeft: 1,

                  marginY: 1,
                }}
              >
                <Button>Bath</Button>
              </Box>
              <Box
                component="span"
                sx={{
                  width: "90px",
                  height: "110px",
                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid grey",
                  marginLeft: 1,

                  marginY: 1,
                }}
              >
                <Button>Bath</Button>
              </Box>
            </Grid>

            <Grid container>
              <Box
                component="span"
                sx={{
                  width: "90px",
                  height: "110px",
                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid grey",
                  marginLeft: 2,
                  marginY: 1,
                }}
              >
                <Button>Hair Cut</Button>
              </Box>
              <Box
                component="span"
                sx={{
                  width: "90px",
                  height: "110px",
                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid grey",

                  marginLeft: 1,
                  marginY: 1,
                }}
              >
                <Button>Bath</Button>
              </Box>
              <Box
                component="span"
                sx={{
                  width: "90px",
                  height: "110px",
                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid grey",
                  marginLeft: 1,

                  marginY: 1,
                }}
              >
                <Button>Bath</Button>
              </Box>
              <Box
                component="span"
                sx={{
                  width: "90px",
                  height: "110px",
                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid grey",
                  marginLeft: 1,

                  marginY: 1,
                }}
              >
                <Button>Bath</Button>
              </Box>
              <Box
                component="span"
                sx={{
                  width: "90px",
                  height: "110px",
                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid grey",
                  marginLeft: 1,

                  marginY: 1,
                }}
              >
                <Button>Bath</Button>
              </Box>
              <Box
                component="span"
                sx={{
                  width: "90px",
                  height: "110px",
                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid grey",
                  marginLeft: 1,

                  marginY: 1,
                }}
              >
                <Button>Bath</Button>
              </Box>
              <Box
                component="span"
                sx={{
                  width: "90px",
                  height: "110px",
                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid grey",
                  marginLeft: 1,

                  marginY: 1,
                }}
              >
                <Button>Bath</Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Grid container mt={2} ml={5}>
        <Grid item lg={2}>
          <Typography variant="subtitle1">Total Qty</Typography>
          <span>0.00</span>
        </Grid>
        <Grid item lg={2}>
          <Typography variant="subtitle1">Sub Total </Typography>
          <span>$1800.00</span>
        </Grid>
        <Grid item lg={2}>
          <Typography variant="subtitle1">Balance</Typography>
          <span>$1800.00</span>
        </Grid>
      </Grid>
    </div>
  );
}
