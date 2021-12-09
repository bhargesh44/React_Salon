import React from "react";
import { Button, Grid, Typography, TextField } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import "./dashBoard.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import Booking from "../Booking/Booking";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import ListIcon from "@mui/icons-material/List";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import QuickOrder from "../QuickOrder/QuickOrder";
import OrderList from "../OrderList/OrderList";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  bgcolor: "background.paper",
  boxShadow: 24,
  pl: 2,
  pr: 2,
  pb: 2,
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
  const [openQuickOrder, setOpenQuickOrder] = React.useState(false);
  const [openOrderList, setOpenOrderList] = React.useState(false);
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleOpen = () => setOpenBooking(true);
  const handleClose = () => setOpenBooking(false);
  const handleOpen1 = () => setOpenQuickOrder(true);
  const handleClose1 = () => setOpenQuickOrder(false);
  const handleOpen2 = () => setOpenOrderList(true);
  const handleClose2 = () => setOpenOrderList(false);
  return (
    <div>
      <Grid
        container
        direction="row"
        display="flex"
        justifyContent="start"
        mt={2}
        mb={2}
        className="grid-wrap"
      >
        <Grid item lg={8} md={8} sm={8} xs={8}>
          <Grid container>
            <Grid item lg={4}>
              <Typography variant="subtitle1" style={{ marginLeft: "50px" }}>
                Customer:
                <span style={{ color: "#90EE90", fontSize: "14px" }}>abc</span>
              </Typography>
            </Grid>
            <Grid item lg={4}>
              <Typography variant="subtitle1">
                Date Of Sale:
                <span style={{ color: "#90EE90", fontSize: "14px" }}>
                  Dec 17,2021
                </span>
              </Typography>
            </Grid>
            <Grid item lg={4}>
              <Typography variant="subtitle1">
                Appointment on:
                <span style={{ color: "#90EE90", fontSize: "14px" }}>
                  Dec 17,2021
                </span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container direction="row" spacing={2}>
        <Grid item lg={8} md={8} sm={8} xs={8}>
          <div
            className="ag-theme-alpine"
            style={{ height: 700, width: "100%", paddingLeft: "8px" }}
          >
            <AgGridReact
              rowData={data}
              columnDefs={columns}
              defaultColDef={defaultColDef}
              animateRows={true}
            />
          </div>

          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            size="small"
            sx={{ mt: 1, mb: 1, width: "100%", pl: 1 }}
            InputProps={{ disableUnderline: true }}
            placeholder="Customer"
          />
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={4}>
          <Button
            variant="contained"
            style={{
              width: "100%",
              height: "75px",
              marginBottom: 5,
              background: "#383b39",
            }}
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
            onClick={handleOpen1}
            style={{ width: "50%", height: "75px", color: "black" }}
          >
            Quick Sale
          </Button>
          <Button
            variant="outlined"
            onClick={handleOpen2}
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
              marginBottom: 2,
              color: "orange",
              fontWeight: "bold",
              background: "#383b39",
            }}
          >
            7
          </Button>
          <Button
            variant="contained"
            style={{
              width: "33%",
              height: "75px",
              marginBottom: 2,
              color: "orange",
              fontWeight: "bold",
              background: "#383b39",
            }}
          >
            8
          </Button>
          <Button
            variant="contained"
            style={{
              width: "33%",
              height: "75px",
              marginBottom: 2,
              color: "orange",
              fontWeight: "bold",
              background: "#383b39",
            }}
          >
            9
          </Button>
          <Button
            variant="contained"
            style={{
              width: "33%",
              height: "75px",
              marginBottom: 2,
              color: "orange",
              fontWeight: "bold",
              background: "#383b39",
            }}
          >
            4
          </Button>
          <Button
            variant="contained"
            style={{
              width: "33%",
              height: "75px",
              marginBottom: 2,
              color: "orange",
              fontWeight: "bold",
              background: "#383b39",
            }}
          >
            5
          </Button>
          <Button
            variant="contained"
            style={{
              width: "33%",
              height: "75px",
              marginBottom: 2,
              color: "orange",
              fontWeight: "bold",
              background: "#383b39",
            }}
          >
            6
          </Button>
          <Button
            variant="contained"
            style={{
              width: "33%",
              height: "75px",
              marginBottom: 2,
              color: "orange",
              fontWeight: "bold",
              background: "#383b39",
            }}
          >
            1
          </Button>
          <Button
            variant="contained"
            style={{
              width: "33%",
              height: "75px",
              marginBottom: 2,
              color: "orange",
              fontWeight: "bold",
              background: "#383b39",
            }}
          >
            2
          </Button>
          <Button
            variant="contained"
            style={{
              width: "33%",
              height: "75px",
              marginBottom: 2,
              color: "orange",
              fontWeight: "bold",
              background: "#383b39",
            }}
          >
            3
          </Button>
          <Button
            variant="contained"
            style={{
              width: "33%",
              height: "75px",
              marginBottom: 2,
              color: "orange",
              fontWeight: "bold",
              background: "#383b39",
            }}
          >
            .
          </Button>
          <Button
            variant="contained"
            style={{
              width: "33%",
              height: "75px",
              marginBottom: 2,
              color: "orange",
              fontWeight: "bold",
              background: "#383b39",
            }}
          >
            0
          </Button>
          <Button
            variant="contained"
            style={{
              width: "33%",
              height: "75px",
              marginBottom: 2,
              color: "orange",
              fontWeight: "bold",
              background: "#383b39",
            }}
          >
            C
          </Button>
          <Button
            variant="outlined"
            style={{
              width: "100%",
              height: "75px",
              marginBottom: 2,
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

      <Modal open={openBooking} onClose={handleClose}>
        <Box sx={style}>
          <Booking handleClose={handleClose} />
        </Box>
      </Modal>
      <Modal open={openQuickOrder} onClose={handleClose1}>
        <Box sx={style}>
          <QuickOrder handleClose={handleClose1} />
        </Box>
      </Modal>
      <Modal open={openOrderList} onClose={handleClose2}>
        <Box sx={style}>
          <OrderList handleClose={handleClose2} />
        </Box>
      </Modal>
    </div>
  );
}
