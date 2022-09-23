import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { tableData } from './data';
import { border, borderRadius } from '@mui/system';

const columns = [
  { field: 'id', headerName: 'ID', width: 150,    cellClassName: 'super-app-theme--cell'},
  {
    field: 'summary',
    headerName: 'Summary',
    width: 450,
    editable: true,
    cellClassName: 'super-app--cell'
  },
  {
    field: 'mode',
    headerName: 'Mode',
    width: 120,
    editable: true,
    cellClassName: 'super-app-data--cell'
  }
];


export default function DataTable() {
  return (
    <div style={{ height: 350, width: '105%', overflow:"hidden"}}>
      <DataGrid
        rows={tableData}
        columns={columns}
        getRowHeight={() => 'auto'} getEstimatedRowHeight={() => 250}
        checkboxSelection
        rowsPerPageOptions={[]} 
        sx={{
            '&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell': { py: '4px' },
            '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': { py: '10px' },
            '&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': { py: '15px'},
            '& .super-app-theme--cell': {
                color: 'rgb(47, 119, 207)',
                fontFamily:'regular',
                fontSize:'13px',
                fontWeight: '600',
              },
              '& .super-app--cell':{
                fontFamily:'regular',
                fontSize:'12.5px',
                color:'#5e5959',
                fontWeight: '600',
              },
            '& .super-app-data--cell':{
                marginTop:"1.5rem",
                width:"1px !important",
                height:"30px !important",
               fontFamily:'bold',
               padding:"0 1rem",
               border:"1px solid black",
               borderRadius:'7px'
            }
          }}
      />
    </div>
  );
}