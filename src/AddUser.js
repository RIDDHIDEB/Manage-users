import React,{useState} from 'react'
import Button from '@mui/material/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddUser.css';
import { TextField,Typography } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

const modalHeaderStyle = {
  fontSize: '30px',
  fontWeight: 'bold',
  color: '#66ccf1',
};

function AddUser() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <React.Fragment>
      <Button variant='contained' onClick={handleShow}>Add Users</Button>

      <Modal size='md' show={show} onHide={handleClose} centered>
        <div className='modal-style'>
        <Typography style={modalHeaderStyle}>Add New User</Typography>
        <Modal.Body >
        <form className='form' >
          <div className="row">
            <div className="col">
              <div className="form-group" >
              <TextField name="username" label="username" variant="outlined" fullWidth margin="normal"/>
              </div>
            </div>
            
              <div className="form-group">
              <TextField name="firstname" label="firstname" variant="outlined" fullWidth margin="normal"/>
              </div>
            </div>

            <div className="form-group">
              <TextField name="lastname" label="lastname" variant="outlined" fullWidth margin="normal"/>
              </div>
            

            <div className="form-group">
            <TextField name="email" label="email" variant="outlined" fullWidth margin="normal"/>
              </div>

            <div className="form-group">
            <InputLabel id="demo-simple-select-standard-label">Is Active</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Is Active"
                fullWidth margin="normal">
                <MenuItem><em>none</em></MenuItem>
                <MenuItem value={10}>True</MenuItem>
                <MenuItem value={20}>False</MenuItem>
                
              </Select>
              </div>
            
            </form> 
            </Modal.Body>
            
                <Button variant="contained" className='modal-button'>Add User</Button>
            
        </div>
      </Modal>

    </React.Fragment>
);
}

export default AddUser;
