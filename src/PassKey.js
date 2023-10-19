import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from './herculeLogoNew.png';

import Card  from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, FormControl, InputLabel, Input, IconButton, InputAdornment, Button} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function PassKey(){

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const buttonStyle = {
    backgroundColor: '#20A0D8',
    color: '#fff', 
    margin: '10px', 
    borderRadius: '5px', 
    padding: '10px 23px',
    fontSize: '12px', 
    cursor: 'pointer',
    alignItems:"center", 
  };

  const buttonContainer = {
    display:"flex",
  }

    return(
        <>
        
        <div style={{height:'300px'}}>
        <AppBar position="fixed">
        <Toolbar style={{ paddingLeft: '20px',  backgroundColor:"#20A0D8" }}>
            <img src={Image}/>
        <Typography variant="h3" noWrap component="div" style={{ marginLeft: '40px',fontFamily: "Source Sans Pro", }}>
            PassKey Generator
          </Typography>
        </Toolbar>
      </AppBar>
      </div>
      <div style={{display:"flex", justifyContent:"center", alignItems:'center', boxShadow:''}}>
      <Card sx={{  width: 570, height: 270 }}>
        <CardActionArea>
        <Typography gutterBottom variant="h6" component="div" style={{fontFamily: "Source Sans Pro",paddingTop:"40px"}}>
          Generate Your Passkey:
        </Typography>
        <CardContent>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
                }
              />
          </FormControl>
          <div style={buttonContainer}>
            <Button style={buttonStyle}>
              Generate
            </Button>
            <Button style={buttonStyle}>
              update
            </Button>
          </div>
        </CardContent>
        </CardActionArea>
      </Card>
      </div> 
      
     </>
    )
};

export default PassKey;