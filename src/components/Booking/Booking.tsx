import {
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
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
import makeStyles from "@mui/styles/makeStyles";
import Payment from "../Payment/Payment";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  width: "60%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  pl: 2,
  pb: 2,
  pr: 2,
};

const genders = [
  {
    value: "M",
    label: "Male",
  },
  {
    value: "F",
    label: "Female",
  },
  {
    value: "O",
    label: "Other",
  },
];

const useStyles = makeStyles((theme: any) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    width: 100,
  },
  dense: {},
  menu: {
    width: 100,
  },
}));

function Booking(props: any) {
  const { handleClose } = props;
  const classes = useStyles();
  const [openPayment, setOpenPayment] = React.useState(false);
  const [table, setTable] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [startDate, setStartDate] = useState<any>(null);
  const [timeFrom, setTimeFrom] = useState<any>(null);
  const [timeTo, setTimeTo] = useState<any>(null);

  const [openList, setOpenList] = React.useState(false);
  const handleOpen = () => setOpenList(true);
  const Close = () => setOpenList(false);
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
  const handleOpen1 = () => setOpenPayment(true);
  const handleClose1 = () => setOpenPayment(false);
  const handleChanges = (event: SelectChangeEvent) => {
    setTable(event.target.value as string);
  };

  const handleChange = (event: any) => {
    setGender(event.target.value);
  };

  const defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };
  return (
    <div>
      <Typography variant="h5" style={{ fontWeight: 600 }}>
        Booking
      </Typography>
      <Grid
        container
        mt={1}
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
          <Button variant="text" className="btn" onClick={handleOpen1}>
            Payment
          </Button>
          <Button variant="text" className="btn">
            Edit
          </Button>
          <Button variant="text" onClick={handleClose} className="btn">
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
          pt: "15px",
        }}
      >
        <Grid container mt={1}>
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
                <Typography
                  variant="subtitle1"
                  style={{
                    marginBottom: "10px",
                    fontSize: "14",
                    fontWeight: "600",
                  }}
                >
                  Customers*
                </Typography>
                <Input
                  placeholder="Customer Name"
                  style={{ width: "80%", marginRight: "10px" }}
                />
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleOpen}
                  style={{ borderRadius: "12px" }}
                >
                  List
                </Button>
              </Grid>
              <Grid item lg={4} md={4} sm={4} xs={4} mb={2}>
                <Typography
                  variant="subtitle1"
                  style={{
                    marginBottom: "10px",
                    fontSize: "14",
                    fontWeight: "600",
                  }}
                >
                  Contact Number*
                </Typography>
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  placeholder="Contact Number"
                  variant="filled"
                  size="small"
                  InputProps={{ disableUnderline: true }}
                />
              </Grid>

              <Grid container>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                  <Typography
                    variant="subtitle1"
                    style={{
                      marginBottom: "10px",
                      fontSize: "14",
                      fontWeight: "600",
                    }}
                  >
                    Appointment Date
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Choose Date"
                      value={startDate}
                      onChange={(newStartDate) => {
                        setStartDate(moment(newStartDate).format("YYYY-MM-DD"));
                      }}
                      renderInput={(params) => (
                        <TextField size="small" {...params} />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                  <Typography
                    variant="subtitle1"
                    style={{
                      marginLeft: "30px",
                      marginBottom: "10px",
                      fontSize: "14",
                      fontWeight: "600",
                    }}
                  >
                    Gender
                  </Typography>
                  <FormControl style={{ width: "50%", marginLeft: "30px" }}>
                    <TextField
                      style={{ marginTop: "0px" }}
                      id="outlined-select-gender"
                      select
                      label={gender === "" ? "Gender" : ""}
                      className={classes.textField}
                      value={gender}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: false }}
                      SelectProps={{
                        MenuProps: {
                          className: classes.menu,
                        },
                      }}
                      size="small"
                      margin="normal"
                      variant="outlined"
                    >
                      {genders.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                  <Typography
                    variant="subtitle1"
                    style={{
                      marginBottom: "10px",
                      fontSize: "14",
                      fontWeight: "600",
                    }}
                  >
                    Source From
                  </Typography>

                  <Input type="text" placeholder="Source From" />
                </Grid>
              </Grid>

              <Grid container>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    variant="subtitle1"
                    style={{
                      marginBottom: "10px",
                      marginTop: "10px",
                      fontSize: "14",
                      fontWeight: "600",
                    }}
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
                      renderInput={(params) => (
                        <TextField size="small" {...params} />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    variant="subtitle1"
                    style={{
                      marginBottom: "10px",
                      marginTop: "10px",
                      fontSize: "14",
                      fontWeight: "600",
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
                      renderInput={(params) => (
                        <TextField size="small" {...params} />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                  <Typography
                    variant="subtitle1"
                    style={{
                      marginBottom: "10px",
                      marginTop: "10px",
                      marginLeft: "20px",
                      fontSize: "14",
                      fontWeight: "600",
                    }}
                  >
                    Chair:
                  </Typography>

                  <FormControl style={{ marginLeft: "20px", width: "50%" }}>
                    <InputLabel id="demo-simple-select-label">table</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={table}
                      label="table"
                      onChange={handleChanges}
                      size="small"
                    >
                      <MenuItem value={10}>Table-01</MenuItem>
                      <MenuItem value={20}>Table-02</MenuItem>
                      <MenuItem value={30}>Table-03</MenuItem>
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
            <Grid
              container
              justifyContent="flex-start"
              sx={{ marginLeft: "18px", marginBottom: "10px" }}
              spacing={2}
            >
              {[0, 1].map((value) => (
                <Grid key={value} item>
                  <Paper
                    sx={{
                      height: 100,
                      width: 100,
                      border: "1px solid gray",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginY: 2,
                      }}
                    >
                      <Button>salon creams</Button>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
            <Grid item xs={11}>
              <Grid container justifyContent="center" spacing={1}>
                {[
                  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                  18, 19, 20,
                ].map((value) => (
                  <Grid key={value} item>
                    <Paper
                      sx={{ height: 100, width: 75, border: "1px solid gray" }}
                    >
                      {" "}
                      <Box
                        component="span"
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          marginY: 2,
                        }}
                      >
                        <Button>Hair Cut</Button>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Modal open={openList} onClose={handleClose}>
        <Box sx={style}>
          <CustomerList handleClose={Close} />
        </Box>
      </Modal>
      <Modal open={openPayment} onClose={handleClose1}>
        <Box sx={style}>
          <Payment handleClose={handleClose1} />
        </Box>
      </Modal>
    </div>
  );
}

export default Booking;
