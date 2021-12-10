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
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import React, { useState } from "react";
import "./booking.css";
import moment from "moment";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { TimePicker } from "@mui/lab";

// import { AgGridReact } from "ag-grid-react";

// import "ag-grid-community/dist/styles/ag-grid.css";
// import "ag-grid-community/dist/styles/ag-theme-alpine.css";

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
      width: 125,
    },
    {
      headerName: "Product Description",
      field: "productDescription",
      width: 125,
    },
    {
      headerName: "Employee Name",
      field: "employeeName",
      width: 125,
    },
    {
      headerName: "Time Req",
      field: "timeReq",
      width: 75,
    },
    {
      headerName: "Qty",
      field: "qty",
      width: 95,
    },
    {
      headerName: "Price",
      field: "price",
      width: 75,
    },
    {
      headerName: "Action",
      field: "id",
      width: 60,

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
  const handleOpen1 = () => setOpenPayment(true);
  const handleClose1 = () => setOpenPayment(false);
  const handleChanges = (event: SelectChangeEvent) => {
    setTable(event.target.value as string);
  };

  const handleChange = (event: any) => {
    setGender(event.target.value);
  };

  return (
    <div>
      <Typography variant="h5" fontWeight={600}>
        Booking
      </Typography>
      <Grid container mt={1} height={50} className="grid_wrap">
        <Grid item lg={8}>
          <Typography variant="subtitle1" marginLeft="25px">
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
      <Grid container mb={2} height={10} className="second_grid"></Grid>

      <Box
        component="span"
        display="flex"
        justifyContent="center"
        border="1px solid grey"
        pt="15px"
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
                  marginBottom="10px"
                  fontSize={16}
                  fontWeight={600}
                >
                  Customers*
                </Typography>
                <Input placeholder="Customer Name" className="customer_input" />
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleOpen}
                  className="list_btn"
                >
                  List
                </Button>
              </Grid>
              <Grid item lg={4} md={4} sm={4} xs={4} mb={2}>
                <Typography
                  variant="subtitle1"
                  marginBottom="10px"
                  fontSize={16}
                  fontWeight={600}
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
                    marginBottom="10px"
                    fontSize={16}
                    fontWeight={600}
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
                    marginBottom="10px"
                    fontSize={16}
                    fontWeight={600}
                    marginLeft="30px"
                  >
                    Gender
                  </Typography>
                  <FormControl className="gender">
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
                    marginBottom="10px"
                    fontSize={16}
                    fontWeight={600}
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
                    marginBottom="10px"
                    fontSize={16}
                    fontWeight={600}
                    marginTop="10px"
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
                    marginBottom="10px"
                    fontSize={16}
                    fontWeight={600}
                    marginTop="10px"
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
                    marginBottom="10px"
                    marginTop="10px"
                    marginLeft="20px"
                    fontSize={16}
                    fontWeight={600}
                  >
                    Chair:
                  </Typography>

                  <FormControl className="chair">
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

              <Grid container mt={1}>
                {/* <div
                  className="ag-theme-alpine"
                  style={{ height: 350, width: "100%" }}
                >
                  <AgGridReact
                    rowData={data}
                    columnDefs={columns}
                    defaultColDef={defaultColDef}
                    animateRows={true}
                  />
                </div> */}

                <div style={{ height: 350, width: "100%" }}>
                  <DataGrid rows={data} columns={columns} pageSize={5} />
                </div>
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Grid
              container
              justifyContent="flex-start"
              marginLeft="18px"
              marginBottom="10px"
              spacing={2}
            >
              {[0, 1].map((value) => (
                <Grid key={value} item>
                  <Paper className="paper-wrap">
                    <Box
                      component="span"
                      display="flex"
                      justifyContent="center"
                      marginY={2}
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
                    <Paper className="paper-wrap-1">
                      <Box
                        component="span"
                        display="flex"
                        justifyContent="center"
                        marginY={2}
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
