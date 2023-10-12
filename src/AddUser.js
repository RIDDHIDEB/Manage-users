import React,{useState} from 'react'
import Button from '@mui/material/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddUser.css';
import { TextField,Typography } from '@mui/material';

function AddUser() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <React.Fragment>
      <Button variant='contained' onClick={handleShow}>Add Users</Button>

      <Modal size='md' show={show} onHide={handleClose} centered>
        <div className='modal-style'>
        <Typography style={{fontSize:'30px',fontWeight:'bold'}}>Add New User</Typography>
        <Modal.Body >
        <form className='form' >
          <div className="row">
            <div className="col">
              <div className="form-group" >
              <TextField name="username" label="username" variant="outlined" fullWidth margin="normal"/>
              </div>
            </div>
            
              <div className="form-group">
              <TextField name="fullname" label="fullname" variant="outlined" fullWidth margin="normal"/>
              </div>
            </div>

            <div className="form-group">
            <TextField name="email" label="email" variant="outlined" fullWidth margin="normal"/>
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
