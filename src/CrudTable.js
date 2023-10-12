import * as React from 'react';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';
import { Button,Typography } from '@mui/material';
import AddUser from './AddUser';

export default function CrudTable() {
  const [data,setData]= React.useState([
    { id: 1, action:'', username: 'riddhi', role: 'React.js', fullname:'Riddhideb Chakraborty', email:'rchakraborty@entiovi.com', profileimage:'NA', createdat:'12/10/2023'},
    { id: 2, action:'', username: 'admin1', role: 'Node.js', fullname:'admin1', email:'admin1@gmail.com', profileimage:'--', createdat:'NA'},
    { id: 3, action:'', username: 'admin2', role: 'Frontend', fullname:'admin2', email:'admin2@gmail.com', profileimage:'--', createdat:'NA'},
    { id: 4, action:'', username: 'admin3', role: 'Backend', fullname:'admin3', email:'admin3@gmail.com', profileimage:'--', createdat:'NA'},
    { id: 5, action:'', username: 'admin4', role: 'UI/UX', fullname:'admin4', email:'admin4@gmail.com', profileimage:'--', createdat:'NA'},
  ]);

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };
  
const columns = [
  { field: 'action', headerName: 'Action', width: 250, renderCell:(params)=>(
    <div style={{display:"flex",gap:"10px"}}>
    <Button variant='contained'>Edit</Button>
    <Button variant='contained' color='error' onClick={() => handleDelete(params.row.id)}>Delete</Button>
    </div>
  ) },
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


const CustomToolbar=()=> {
  return (
    <>
    <GridToolbarContainer style={{backgroundColor:"black"}}>
      <GridToolbarColumnsButton style={{color:"white"}}/>
      <GridToolbarFilterButton style={{color:"white"}}/>
      <GridToolbarDensitySelector style={{color:"white"}}/>
      <GridToolbarExport style={{color:"white"}}/>
    </GridToolbarContainer>
    
    </>
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
     
      
    <div style={{ height: '100vh', width: '100vw' }}>
      <DataGrid
        rows={data}
        columns={columns}
        slots={{
          toolbar: CustomToolbar,
        }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}>
        </DataGrid>
    </div>
    </>
  );
}