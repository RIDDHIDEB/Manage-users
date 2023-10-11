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

  const [data, setData] = useState();

  const [newUser, setNewUser] = useState({
    username: '',
    fullname: '',
    email: '',
  });

  const handleNewUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleAddUser = () => {
    // Validate the form input here as needed
    // Add the new user to the data array
    setData([...data, { ...newUser, id: data.length + 1 }]);

    handleClose();

    setNewUser({
      username: '',
      fullname: '',
      email: '',
    });
  };



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
              <TextField name="username" label="Username" variant="outlined" fullWidth margin="normal" value={newUser.username}
            onChange={handleNewUserChange}/>
              </div>
            </div>
            
              <div className="form-group">
              <TextField name="fullname" label="fullname" variant="outlined" fullWidth margin="normal" value={newUser.fullname}
            onChange={handleNewUserChange}/>
              </div>
            </div>

            <div className="form-group">
            <TextField name="email" label="email" variant="outlined" fullWidth margin="normal" value={newUser.email}
            onChange={handleNewUserChange}/>
              </div>
            
            </form> 
            </Modal.Body>
            
                <Button variant="contained" className='modal-button' onClick={handleAddUser}>Add User</Button>
            
        </div>
      </Modal>

    </React.Fragment>
);
}

export default AddUser;
