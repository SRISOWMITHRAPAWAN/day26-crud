import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Topbar from './Topbar';
import Sidebar from './Sidebar';
const CreateUser = () => {
    const [Firstname, setFirstName] = useState("");
    const [Lastname, setLastName] = useState("");
    const [date, setDate] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate();

    return (

        <div id="wrapper">
 <Sidebar/>
        <div id="content-wrapper" class="d-flex flex-column">
                      
        <div id="content">
         
          <Topbar/>
                      <div class="container-fluid">
                      <div class="row">
          <div class="col">
          <div>
            <div className="add-user" style={{marginTop:"100px", marginLeft:"180px"}}>
                <TextField onChange={(event) => setFirstName(event.target.value)}
                    label="First Name" type="name" variant="standard" style={{marginBottom:"2rem"}}/><br></br>

                <TextField onChange={(event) => setLastName(event.target.value)}
                    label="Last Name" type="name" variant="standard" style={{marginBottom:"2rem"}}/><br></br>

                <TextField onChange={(event) => setDate(event.target.value)}
                    label="DOB" type="date" variant="standard" style={{marginBottom:"2rem"}}/><br></br>

                <TextField onChange={(event) => setEmail(event.target.value)}
                    label="Email" type="email" variant="standard" style={{marginBottom:"2rem"}}/><br></br>

                <TextField onChange={(event) => setPhone(event.target.value)}
                    label="Phone" type="number" variant="standard" style={{marginBottom:"2rem"}}/><br></br>

                     <Button className="add-button" onClick={() => {
          const newuser = {
            Firstname: Firstname,
            Lastname:Lastname,
            date:date,
            email: email,
            phone: phone
                   
          };
          
          fetch("https://63282709a2e90dab7bd970f7.mockapi.io/users",{
            method: "POST",
            body: JSON.stringify(newuser),
            headers: {
              "Content-Type": "application/json",
            }
          })
          .then((data) => data.json())         
          .then(() => navigate("/user"));                  
        }} 
          variant="contained" style={{marginBottom:"2rem"}}>Add user</Button>
            </div>
             
       
        </div>
          </div>
        </div>
                     
          
                          
      
                        
      
                      </div>
                      </div>
                      </div>
                      </div>


      
    )
}

export default CreateUser;


