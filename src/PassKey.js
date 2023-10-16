import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from './herculeLogoNew.png';

import Card  from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

function PassKey(){

    return(
        <>
        
        <div>
        <AppBar position="fixed">
        <Toolbar style={{ paddingLeft: '20px',  backgroundColor:"#20A0D8" }}>
            <img src={Image}/>
        <Typography variant="h3" noWrap component="div" style={{ marginLeft: '40px',fontFamily: "Source Sans Pro", }}>
            PassKey Generator
          </Typography>
        </Toolbar>
      </AppBar>
      </div>
      <div style={{display:"flex", justifyContent:"center", alignItems:'center'}}>
      <Card sx={{  width: 270, height: 270 }}>
        <CardActionArea>
        <CardContent>

        </CardContent>
        </CardActionArea>
      </Card>
      </div> 
      
     </>
    )
};

export default PassKey;