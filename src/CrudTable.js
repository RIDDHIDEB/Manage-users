import React, { useState } from 'react';
import { Table, TableBody, TableCell,Typography, TableContainer, TableHead, TableRow, Paper, Button,TextField} from '@mui/material';
import AddUser from './AddUser';

const CrudTable = () => {
  // Sample data (you can replace this with your own data)
  const [data, setData] = useState([
    {id:1, action:'action',username:'riddhi', role: 'react.js ',fullname:'riddhideb chakraborty',email:'rchakraborty@entiovi.com',profileimage:'none',createdat:'none' },
    {id:2, action:'action',username:'admin1', role: 'node.js ',fullname:'admin1',email:'admin1@entiovi.com',profileimage:'none',createdat:'none'  },
    {id:3, action:'action',username:'admin2', role: 'SQL ',fullname:'admin2',email:'admin2@entiovi.com',profileimage:'none',createdat:'none'  },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  // Function to delete an item
  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const filteredData = data.filter((item) =>
  item.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
  item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
  item.fullname.toLowerCase().includes(searchQuery.toLowerCase()) ||
  item.email.toLowerCase().includes(searchQuery.toLowerCase())
);

  return (
    <>
    

    <div>
      <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"aliceblue"}}>
      <Typography variant='h3' gutterBottom>Manage Users</Typography>
      <div style={{display:"flex",alignItems:"center",padding:"10px"}}>
      <Button variant='contained' color='error' style={{marginRight:"10px"}}>User Roles</Button>
      <AddUser/>
      </div>
      </div>
    <div style={{display:"flex",flexDirection:"row-reverse"}}>
    
      <TextField
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ width:"300px",marginRight:"10px" }} 
      /></div>
    
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow >
              <TableCell>Actions</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Fullname</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Profile Image</TableCell>
              <TableCell>CreatedAt</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                <Button variant='contained' style={{marginRight:"10px"}}>
                Edit 
                </Button>
                <Button  variant='contained' color='error' onClick={() => handleDelete(item.id)}>
                Delete 
                </Button>
                </TableCell>
                <TableCell>{item.username}</TableCell>
                <TableCell>{item.role}</TableCell>
                <TableCell>{item.fullname}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.profileimage}</TableCell>
                <TableCell>{item.createdat}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      </div> 
      
    </>
  );
};

export default CrudTable;