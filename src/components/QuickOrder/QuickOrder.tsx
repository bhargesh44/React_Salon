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
  TextField,
} from "@mui/material";

import "./quickOrder.css";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Box from "@mui/material/Box";

// import { AgGridReact } from "ag-grid-react";

// import "ag-grid-community/dist/styles/ag-grid.css";
// import "ag-grid-community/dist/styles/ag-theme-alpine.css";
export default function QuickOrder(props: any) {
  const { handleClose } = props;
  const [table, setTable] = React.useState("");
  const data = [
    { id: 1, productName: "abcsdg", qty: "1", rate: "$500.00" },
    { id: 2, productName: "aerahgwerw", qty: "1", rate: "$50.00" },
    { id: 3, productName: "arthjrtj", qty: "1", rate: "$500.00" },
    { id: 4, productName: "ajhrttrtrt", qty: "1", rate: "$500.00" },
    { id: 5, productName: "atrjrtf", qty: "1", rate: "$250.00" },
  ];
  const columns: GridColDef[] = [
    {
      headerName: "Product Name",
      field: "productName",
      width: 175,
    },
    {
      headerName: "Qty",
      field: "qty",
      width: 175,
    },
    {
      headerName: "Rate",
      field: "rate",
      width: 175,
    },

    {
      headerName: "Select",
      field: "id",
      width: 175,
      renderCell: () => {
        const onClick = () => {
          window.confirm("you want to delete this data!!");
        };
        return <DeleteForeverIcon color="error" onClick={onClick} />;
      },
    },
  ];

  const handleChanges = (event: SelectChangeEvent) => {
    setTable(event.target.value as string);
  };
  return (
    <div>
      <Typography variant="h5">Quick order</Typography>
      <Grid container mt={1} height="50px" className="grid_back">
        <Grid item lg={8}>
          <Typography variant="subtitle1" marginLeft="25px">
            Oder no :
          </Typography>
        </Grid>
        <Grid item lg={4}>
          <Button variant="text" className="update_btn">
            Update
          </Button>
          <Button variant="text" className="close_btn1" onClick={handleClose}>
            Close
          </Button>
        </Grid>
      </Grid>
      <Grid container mb={2} height="10px" className="second_grid_back"></Grid>

      <Box component="span" display="flex" justifyContent="center">
        <Grid container>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Grid container>
              {/* <div
                className="ag-theme-alpine"
                style={{ height: 500, width: "100%" }}
              >
                <AgGridReact
                  rowData={data}
                  columnDefs={columns}
                  defaultColDef={defaultColDef}
                  animateRows={true}
                />
              </div> */}

              <div style={{ height: 500, width: "100%" }}>
                <DataGrid rows={data} columns={columns} pageSize={5} />
              </div>
            </Grid>
            <Grid container>
              <Grid item lg={6}>
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  className="barcode_input"
                  size="small"
                  InputProps={{ disableUnderline: true }}
                  placeholder="Enter Item Barcode"
                />
              </Grid>
              <Grid item lg={6}>
                <FormControl className="chair-wrap">
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
              marginLeft="18px"
              marginBottom="10px"
              spacing={2}
            >
              {[0, 1].map((value) => (
                <Grid key={value} item>
                  <Paper className="paper-wrap-2">
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
                    <Paper className="paper-wrap-3">
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
          <Typography variant="subtitle1" fontWeight="bold">
            Total Qty
          </Typography>
          <span>0.00</span>
        </Grid>
        <Grid item lg={2}>
          <Typography variant="subtitle1" fontWeight="bold">
            Sub Total{" "}
          </Typography>
          <span>$1800.00</span>
        </Grid>
        <Grid item lg={2}>
          <Typography variant="subtitle1" fontWeight="bold">
            Balance
          </Typography>
          <span>$1800.00</span>
        </Grid>
      </Grid>
    </div>
  );
}
