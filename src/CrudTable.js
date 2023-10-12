import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';
import { Button,Typography, TextField } from '@mui/material';
import AddUser from './AddUser';

export default function CrudTable() {
const columns = [
  { field: 'action', headerName: 'Action', width: 250 },
  { field: 'username', headerName: 'Username', width: 250 },
  { field: 'role', headerName: 'Role', width: 250 },
  
  {
    field: 'fullName',
    headerName: 'Full Name',
    width: 280,
    valueGetter: (params) =>
      `${params.row.fullname || ''} `
  },
  { field: 'email', headerName: 'Email', width: 280 },
  { field: 'profileimage', headerName: 'Profile Image', width: 250 },
  { field: 'createdat', headerName: 'Created At', width: 250 },
];

const rows = [
  { id: 1, action:'', username: 'riddhi', role: 'React.js', fullname:'Riddhideb Chakraborty', email:'rchakraborty@entiovi.com', profileimage:'NA', createdat:'12/10/2023'},
  { id: 2, action:'', username: 'admin1', role: 'Node.js', fullname:'admin1', email:'admin1@gmail.com', profileimage:'NA', createdat:'NA'},
  { id: 3, action:'', username: 'admin2', role: 'Frontend', fullname:'admin2', email:'admin2@gmail.com', profileimage:'NA', createdat:'NA'},
  { id: 4, action:'', username: 'admin3', role: 'Backend', fullname:'admin3', email:'admin3@gmail.com', profileimage:'NA', createdat:'NA'},
  { id: 5, action:'', username: 'admin4', role: 'UI/UX', fullname:'admin4', email:'admin4@gmail.com', profileimage:'NA', createdat:'NA'},
];

const CustomToolbar=()=> {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

  return (
    <>
      <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"aliceblue"}}>
      <Typography variant='h3' gutterBottom>Manage Users</Typography>
      <div style={{display:"flex",alignItems:"center",padding:"10px"}}>
      <Button variant='contained' color='error' style={{marginRight:"10px"}}>User Roles</Button>
      <AddUser/>
      </div>
      </div>
     
      
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{
          toolbar: CustomToolbar,
        }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}/>
    </div>
    </>
  );
}