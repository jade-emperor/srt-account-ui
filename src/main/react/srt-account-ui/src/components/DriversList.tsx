import { Box } from "@mui/material";
import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import React, { useEffect, useState } from "react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { getAllDrivers } from "services/DriverService";

export const DriversList = () => {

    const [rows, setRows] = useState<any[]>([]);
    const colDefs:ColDef[] = [{field: "id", headerName: "Driver #"},
        {field: "driverName", headerName: "Driver Name"},
        {field: "driverAddress", headerName: "Address"},
        {field: "phoneNumber", headerName: "Contact"},
        {field: "gender", headerName: "Gender"}
    ];

    useEffect(() => {
      getAllDrivers().then(data => {
        setRows(data);
      }).catch(err => {
        console.warn("Error fetching drivers list: ", err);
      })
    }, [])

    return (
        <div style={{height: "calc(100vh - 100px)", width: '100%'}} className="ag-theme-alpine">
            <AgGridReact rowData={rows} columnDefs={colDefs} />
        </div>
    )
}