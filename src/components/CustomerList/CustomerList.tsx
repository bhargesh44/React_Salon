import { Grid, Typography, Button, TextField } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

// import { AgGridReact } from "ag-grid-react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

// import "ag-grid-community/dist/styles/ag-grid.css";
// import "ag-grid-community/dist/styles/ag-theme-alpine.css";
export default function CustomerList(props: any) {
  const { handleClose } = props;
  const data = [
    {
      id: 1,
      customerCode: "101",
      customerName: "max customer-01",
      customerMobile: "9874563211",
    },
    {
      id: 2,
      customerCode: "102",
      customerName: "max customer-02",
      customerMobile: "8855221144",
    },
    {
      id: 3,
      customerCode: "103",
      customerName: "max customer-03",
      customerMobile: "7788996655",
    },
    {
      id: 4,
      customerCode: "104",
      customerName: "max customer-04",
      customerMobile: "9988556677",
    },
    {
      id: 5,
      customerCode: "105",
      customerName: "max customer-05",
      customerMobile: "8899665577",
    },
    {
      id: 6,
      customerCode: "106",
      customerName: "max customer-06",
      customerMobile: "8855227744",
    },
  ];
  const columns: GridColDef[] = [
    {
      headerName: "Customer Code",
      field: "customerCode",
      width: 150,
    },
    {
      headerName: "Customer Name",
      field: "customerName",
      width: 250,
    },
    {
      headerName: "Customer Mobile",
      field: "customerMobile",
      width: 250,
    },
    {
      headerName: "Action",
      field: "id",
      width: 100,

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

  return (
    <div>
      <Grid container>
        <Grid item lg={6} className="color-wrap">
          <Typography variant="h6" fontWeight={600}>
            Choose a Customer
          </Typography>
        </Grid>
        <Grid item lg={6} display="flex" justifyContent="end">
          <CloseIcon onClick={handleClose} />
        </Grid>
      </Grid>

      <Grid container mt={4} ml={5}>
        <Typography variant="h5" fontWeight={600}>
          Select Orders
        </Typography>
      </Grid>

      <Grid container mt={4} ml={5}>
        <Grid item lg={6}>
          <Grid container>
            <Grid item lg={6}>
              <Typography variant="subtitle1" fontWeight={600}>
                Find Customer
              </Typography>

              <TextField
                hiddenLabel
                sx={{ mt: 1, mb: 1 }}
                id="filled-hidden-label-small"
                size="small"
                InputProps={{ disableUnderline: true }}
                placeholder="Customer"
              />
            </Grid>
            <Grid item lg={6}>
              <Typography variant="subtitle1" fontWeight={600}>
                Find Mobile
              </Typography>

              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                size="small"
                sx={{ mt: 1, mb: 1 }}
                InputProps={{ disableUnderline: true }}
                placeholder="Mobile"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={6}></Grid>
      </Grid>

      <Grid container mt={4}>
        <Grid item lg={8} md={8} sm={8} xs={8}>
          {/* <div
            className="ag-theme-alpine"
            style={{ height: 400, width: "100%" }}
          >
            <AgGridReact
              rowData={data}
              columnDefs={columns}
              defaultColDef={defaultColDef}
              animateRows={true}
            />
          </div> */}

          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={data}
              columns={columns}
              pageSize={5}
              // filterModel={{
              //   items: [
              //     {
              //       columnField: "customerName",
              //       operatorValue: "contains",
              //       value: "max customer-04",
              //     },
              //   ],
              // }}
            />
          </div>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={4}></Grid>
      </Grid>
    </div>
  );
}
