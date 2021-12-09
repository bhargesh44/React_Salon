import React from "react";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Box from "@mui/material/Box";

import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
export default function QuickOrder(props: any) {
  const { handleClose } = props;
  const [table, setTable] = React.useState("");
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
  const handleChanges = (event: SelectChangeEvent) => {
    setTable(event.target.value as string);
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
          <Button variant="text" className="btn">
            Update
          </Button>
          <Button
            variant="text"
            className="btn"
            onClick={handleClose}
            style={{ marginLeft: "50px" }}
          >
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
                  style={{ width: "100%", height: "32px", marginTop: "25px" }}
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
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={table}
                    label="select chair"
                    onChange={handleChanges}
                    size="small"
                  >
                    <MenuItem value="table-01">select chair</MenuItem>
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
