import React from 'react'

import Topbar from './Topbar'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const Dashboard = () => {
    let navigate = useNavigate();
    const studentLogin=()=>{
  
    navigate("/userprofile")
   } 
   const teachersLogin=()=>{
    navigate("/user")
   }
  return (
    <div id="wrapper">
 
  <div id="content-wrapper" class="d-flex flex-column">
                
  <div id="content">
   
    <Topbar/>
                <div class="container-fluid"style={{display:"flex",justifyContent:"space-between",padding:"5rem 25rem",alignItems:"center"}}>
                <div class="row">
    <div class="col">
    <Card sx={{ width: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            user login
          </Typography>
          <Typography variant="body2" color="text.secondary">
           please click here to login to profile
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={teachersLogin}>
          Login
        </Button>
      </CardActions>
    </Card>
    </div>
    <div class="col">
    <Card sx={{ width: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           profile login
          </Typography>
          <Typography variant="body2" color="text.secondary">
          please click here to login to profile
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={studentLogin}>
          Login
        </Button>
      </CardActions>
    </Card>
    </div>
  </div>
               
    
                    

                  

                </div>
                </div>
                </div>
                </div>
          
            
            
  )
}

export default Dashboard










