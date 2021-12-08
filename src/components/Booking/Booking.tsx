import {
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import React, { useState } from "react";
import "./booking.css";
import moment from "moment";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { TimePicker } from "@mui/lab";

import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CustomerList from "../CustomerList/CustomerList";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  width: "1200px",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Booking() {
  const [startDate, setStartDate] = useState<any>(null);
  const [timeFrom, setTimeFrom] = useState<any>(null);
  const [timeTo, setTimeTo] = useState<any>(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
      <Typography variant="h5">Booking</Typography>
      <Grid
        container
        style={{ background: "black", height: "50px", color: "white" }}
      >
        <Grid item lg={8}>
          <Typography variant="subtitle1" style={{ marginLeft: "25px" }}>
            Booking no :
          </Typography>
        </Grid>
        <Grid item lg={4}>
          <Button variant="text" className="btn">
            Update
          </Button>
          <Button variant="text" className="btn">
            Payment
          </Button>
          <Button variant="text" className="btn">
            Edit
          </Button>
          <Button variant="text" className="btn">
            <CloseIcon />
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
          border: "1px solid grey",
        }}
      >
        <Grid container>
          <Grid
            item
            lg={6}
            md={6}
            sm={6}
            xs={6}
            direction="row"
            display="flex"
            justifyContent="start"
          >
            <Grid container ml={1} mb={2}>
              <Grid item lg={8} md={8} sm={8} xs={8} mb={2}>
                <Typography variant="h6" style={{ marginBottom: "10px" }}>
                  Customers*
                </Typography>
                <Input
                  placeholder="Customer Name"
                  style={{ width: "350px", marginRight: "10px" }}
                />
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleOpen}
                >
                  List
                </Button>
              </Grid>
              <Grid item lg={4} md={4} sm={4} xs={4} mb={2}>
                <Typography variant="h6" style={{ marginBottom: "10px" }}>
                  Contact Number*
                </Typography>
                <Input type="number" placeholder="Contact Number" disabled />
              </Grid>

              <Grid container>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                  <Typography variant="h6" style={{ marginBottom: "10px" }}>
                    Appointment Date
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Choose Date"
                      value={startDate}
                      onChange={(newStartDate) => {
                        setStartDate(moment(newStartDate).format("YYYY-MM-DD"));
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                  <Typography
                    variant="h6"
                    style={{ marginLeft: "20px", marginBottom: "10px" }}
                  >
                    Gender
                  </Typography>
                  <FormControl style={{ marginLeft: "20px", width: "50%" }}>
                    <InputLabel htmlFor="my-input">Gender</InputLabel>
                    <Select id="my-input" disabled>
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                  <Typography variant="h6" style={{ marginBottom: "10px" }}>
                    Source From
                  </Typography>

                  <Input type="text" placeholder="Source From" />
                </Grid>
              </Grid>

              <Grid container>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    variant="h6"
                    style={{ marginBottom: "10px", marginTop: "10px" }}
                  >
                    Time From :
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      label="Time From"
                      value={timeFrom}
                      onChange={(newValue) => {
                        setTimeFrom(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    variant="h6"
                    style={{
                      marginBottom: "10px",
                      marginTop: "10px",
                    }}
                  >
                    Time To:
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      label="Time To"
                      value={timeTo}
                      onChange={(newValue) => {
                        setTimeTo(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    variant="h6"
                    style={{
                      marginBottom: "10px",
                      marginTop: "10px",
                      marginLeft: "20px",
                    }}
                  >
                    Chair:
                  </Typography>

                  <FormControl style={{ marginLeft: "20px", width: "50%" }}>
                    <InputLabel htmlFor="my-input">Chair</InputLabel>
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

              <Grid container>
                <div
                  className="ag-theme-alpine"
                  style={{ height: 350, width: "100%" }}
                >
                  <AgGridReact
                    rowData={data}
                    columnDefs={columns}
                    defaultColDef={defaultColDef}
                    animateRows={true}
                  />
                </div>
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
                  marginX: 3,
                  marginY: 2,
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

                  marginY: 2,
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
                  marginLeft: 3,
                  marginY: 2,
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
                  marginY: 2,
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

                  marginY: 2,
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

                  marginY: 2,
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

                  marginY: 2,
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

                  marginY: 2,
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

                  marginY: 2,
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
                  marginLeft: 3,
                  marginY: 2,
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
                  marginY: 2,
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

                  marginY: 2,
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

                  marginY: 2,
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

                  marginY: 2,
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

                  marginY: 2,
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

                  marginY: 2,
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
                  marginLeft: 3,
                  marginY: 2,
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
                  marginY: 2,
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

                  marginY: 2,
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

                  marginY: 2,
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

                  marginY: 2,
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

                  marginY: 2,
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

                  marginY: 2,
                }}
              >
                <Button>Bath</Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <CustomerList />
        </Box>
      </Modal>
    </div>
  );
}

export default Booking;
