import React from "react";
import { Button, Grid, Typography, TextField } from "@mui/material";
// import { AgGridReact } from "ag-grid-react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import "./dashBoard.css";

// import "ag-grid-community/dist/styles/ag-grid.css";
// import "ag-grid-community/dist/styles/ag-theme-alpine.css";

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
      width: 150,
    },
    {
      headerName: "Action",
      field: "id",
      width: 120,

      renderCell: () => {
        const onClick = () => {
          window.confirm("you want to delete this data!!");
        };
        return (
          <Button variant="text" color="success" onClick={onClick}>
            Delete
          </Button>
        );
      },
    },
  ];

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
              <Typography variant="subtitle1" marginLeft="50px">
                Customer:
                <span className="span_wrap">abc</span>
              </Typography>
            </Grid>
            <Grid item lg={4}>
              <Typography variant="subtitle1">
                Date Of Sale:
                <span className="span_wrap">Dec 17,2021</span>
              </Typography>
            </Grid>
            <Grid item lg={4}>
              <Typography variant="subtitle1">
                Appointment on:
                <span className="span_wrap">Dec 17,2021</span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container direction="row" spacing={2}>
        <Grid item lg={8} md={8} sm={8} xs={8}>
          {/* <div
            className="ag-theme-alpine"
            style={{ height: 700, width: "100%", paddingLeft: "8px" }}
          >
            <AgGridReact
              rowData={data}
              columnDefs={columns}
              defaultColDef={defaultColDef}
              animateRows={true}
            />
          </div> */}

          <div style={{ height: 700, width: "100%", paddingLeft: "8px" }}>
            <DataGrid rows={data} columns={columns} pageSize={5} />
          </div>

          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            className="amount_input"
            size="small"
            InputProps={{ disableUnderline: true }}
            placeholder="Enter Amount"
          />
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={4}>
          <Button variant="contained" className="list_icon_btn">
            <ListIcon color="primary" />
          </Button>
          <Button
            variant="outlined"
            className="new_quick_btn"
            onClick={handleOpen}
          >
            New Booking
          </Button>
          <Button
            variant="outlined"
            className="new_quick_btn"
            onClick={handleOpen1}
          >
            Quick Sale
          </Button>
          <Button
            variant="outlined"
            className="order_list_btn"
            onClick={handleOpen2}
          >
            <ListIcon color="primary" /> Order List
          </Button>
          <Button variant="outlined" className="order_more_btn">
            <AddCircleOutlineRoundedIcon color="success" /> Order More
          </Button>
          <Button variant="contained" className="calc_btn">
            7
          </Button>
          <Button variant="contained" className="calc_btn">
            8
          </Button>
          <Button variant="contained" className="calc_btn">
            9
          </Button>
          <Button variant="contained" className="calc_btn">
            4
          </Button>
          <Button variant="contained" className="calc_btn">
            5
          </Button>
          <Button variant="contained" className="calc_btn">
            6
          </Button>
          <Button variant="contained" className="calc_btn">
            1
          </Button>
          <Button variant="contained" className="calc_btn">
            2
          </Button>
          <Button variant="contained" className="calc_btn">
            3
          </Button>
          <Button variant="contained" className="calc_btn">
            .
          </Button>
          <Button variant="contained" className="calc_btn">
            0
          </Button>
          <Button variant="contained" className="calc_btn">
            C
          </Button>
          <Button variant="outlined" className="payment_btn">
            Payment
          </Button>
          <Button variant="outlined" className="function_other_btn">
            <PendingOutlinedIcon color="success" /> functions
          </Button>
          <Button variant="outlined" className="function_other_btn">
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
