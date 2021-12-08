import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import Booking from "../Booking/Booking";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import ListIcon from "@mui/icons-material/List";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  width: "1500px",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function DashBoard() {
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Grid
        container
        direction="row"
        display="flex"
        justifyContent="start"
        mt={2}
        mb={2}
        style={{ background: "black", height: "30px", color: "white" }}
      >
        <Typography variant="h6" style={{ marginLeft: "50px" }}>
          Customer: <span style={{ color: "green" }}>abc</span>
        </Typography>
        <Typography variant="h6" style={{ marginLeft: "200px" }}>
          Date Of Sale: <span style={{ color: "green" }}>Dec 17,2021</span>
        </Typography>
        <Typography variant="h6" style={{ marginLeft: "200px" }}>
          Appointment on: <span style={{ color: "green" }}>Dec 17,2021</span>
        </Typography>
      </Grid>

      <Grid container direction="row" spacing={2}>
        <Grid item lg={8} md={8} sm={8} xs={8}>
          <div
            className="ag-theme-alpine"
            style={{ height: 700, width: "100%" }}
          >
            <AgGridReact
              rowData={data}
              columnDefs={columns}
              defaultColDef={defaultColDef}
              animateRows={true}
            />
          </div>

          <input
            placeholder="Enter Amount"
            style={{ width: "100%", height: "25px", marginTop: "25px" }}
          />
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={4}>
          <Button
            variant="contained"
            style={{ width: "100%", height: "75px", marginBottom: 5 }}
          >
            <ListIcon />
          </Button>
          <Button
            variant="outlined"
            onClick={handleOpen}
            style={{ width: "50%", height: "75px", color: "black" }}
          >
            New Booking
          </Button>
          <Button
            variant="outlined"
            style={{ width: "50%", height: "75px", color: "black" }}
          >
            Quick Sale
          </Button>
          <Button
            variant="outlined"
            style={{
              width: "100%",
              height: "75px",
              marginBottom: 5,
              marginTop: 5,
              color: "black",
            }}
          >
            <ListIcon color="primary" /> Order List
          </Button>
          <Button
            variant="outlined"
            style={{
              width: "100%",
              height: "75px",
              marginBottom: 5,
              color: "black",
            }}
          >
            <AddCircleOutlineRoundedIcon color="success" /> Order More
          </Button>
          <Button
            variant="contained"
            style={{
              width: "33%",
              height: "75px",
              marginBottom: 5,
              color: "orange",
              fontWeight: "bold",
            }}
          >
            7
          </Button>
          <Button
            variant="contained"
            style={{
              width: "33%",
              height: "75px",
              marginBottom: 5,
              color: "orange",
              fontWeight: "bold",
            }}
          >
            8
          </Button>
          <Button
            variant="contained"
            style={{
              width: "33%",
              height: "75px",
              marginBottom: 5,
              color: "orange",
              fontWeight: "bold",
            }}
          >
            9
          </Button>
          <Button
            variant="contained"
            style={{
              width: "33%",
              height: "75px",
              marginBottom: 5,
              color: "orange",
              fontWeight: "bold",
            }}
          >
            4
          </Button>
          <Button
            variant="contained"
            style={{
              width: "33%",
              height: "75px",
              marginBottom: 5,
              color: "orange",
              fontWeight: "bold",
            }}
          >
            5
          </Button>
          <Button
            variant="contained"
            style={{
              width: "33%",
              height: "75px",
              marginBottom: 5,
              color: "orange",
              fontWeight: "bold",
            }}
          >
            6
          </Button>
          <Button
            variant="contained"
            style={{
              width: "33%",
              height: "75px",
              marginBottom: 5,
              color: "orange",
              fontWeight: "bold",
            }}
          >
            1
          </Button>
          <Button
            variant="contained"
            style={{
              width: "33%",
              height: "75px",
              marginBottom: 5,
              color: "orange",
              fontWeight: "bold",
            }}
          >
            2
          </Button>
          <Button
            variant="contained"
            style={{
              width: "33%",
              height: "75px",
              marginBottom: 5,
              color: "orange",
              fontWeight: "bold",
            }}
          >
            3
          </Button>
          <Button
            variant="contained"
            style={{
              width: "33%",
              height: "75px",
              marginBottom: 5,
              color: "orange",
              fontWeight: "bold",
            }}
          >
            .
          </Button>
          <Button
            variant="contained"
            style={{
              width: "33%",
              height: "75px",
              marginBottom: 5,
              color: "orange",
              fontWeight: "bold",
            }}
          >
            0
          </Button>
          <Button
            variant="contained"
            style={{
              width: "33%",
              height: "75px",
              marginBottom: 5,
              color: "orange",
              fontWeight: "bold",
            }}
          >
            C
          </Button>
          <Button
            variant="outlined"
            style={{
              width: "100%",
              height: "75px",
              marginBottom: 5,
              color: "black",
            }}
          >
            Payment
          </Button>
          <Button
            variant="outlined"
            style={{ width: "50%", height: "75px", color: "black" }}
          >
            <PendingOutlinedIcon color="success" /> functions
          </Button>
          <Button
            variant="outlined"
            style={{ width: "50%", height: "75px", color: "black" }}
          >
            <PendingOutlinedIcon color="success" /> Others
          </Button>
        </Grid>
      </Grid>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Booking />
        </Box>
      </Modal>
    </div>
  );
}