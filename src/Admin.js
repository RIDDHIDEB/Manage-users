import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers ,faKey as faGoPasskeyFill} from '@fortawesome/free-solid-svg-icons';
import AppBar from '@mui/material/AppBar';
import { CardActionArea } from '@mui/material';
import Image from './herculeLogoNew.png';
import { Link } from 'react-router-dom';

function ResponsiveDrawer(props) {
  const colorfulIconStyle = {
    color: '#66ccf1', // You can change the color to any color you like
  };
  
  return (
    <div style={{ padding: '40px' }}>
      <AppBar position="fixed">
        <Toolbar style={{ paddingLeft: '20px',  backgroundColor:"#20A0D8" }}>
        <img src={Image}/>
        <Typography variant="h3" noWrap component="div" style={{ marginLeft: '40px',fontFamily: "Source Sans Pro", }}>
            Admin Console
          </Typography>
        </Toolbar>
      </AppBar>
      <main style={{ padding: '30px' }}>
       <Toolbar/>
       <div style={{}}>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }} >

        <Link to='/crudtable' style={{textDecoration:'none'}}>
        <Card sx={{ flex: 1, width: 270, marginRight: '20px' }}>
          <CardActionArea>
            <div style={{display:"flex",justifyContent:"space-around"}}>
            <FontAwesomeIcon icon={faUsers} size="3x" style={colorfulIconStyle} />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" style={{fontFamily: "Source Sans Pro"}}>
                Users
              </Typography>
              <Typography variant="h6" component="div" style={{fontFamily: "Source Sans Pro"}}>
                Add or update users
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Link>

        <Link to='/passkey' style={{textDecoration:'none'}}>
          <Card sx={{ flex: 1, width: 270,padding:"9px" }}>
            <CardActionArea>
            <div style={{display:"flex",justifyContent:"space-around"}}>
            <FontAwesomeIcon icon={faGoPasskeyFill} size="2x" style={colorfulIconStyle} />
            </div>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" style={{fontFamily: "Source Sans Pro"}}>
                  PassKey
                </Typography>
                <Typography variant="h6" component="div" style={{fontFamily: "Source Sans Pro"}}>
                  Add passkey
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Link>
          </div>
          </div>
      </main>
      </div>
  );

}

ResponsiveDrawer.propTypes = {

  window: PropTypes.func,

};

export default ResponsiveDrawer;