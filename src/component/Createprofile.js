import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Sidebar from './Sidebar2';
import Topbar from './Topbar';
const Createprofile = () => {

    const [Firstname, setFirstName] = useState("");
    const [Lastname, setLastName] = useState("");
    const [date, setDate] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [jobtitle, setJobtitle] = useState("");
    const [experience, setExperience] = useState("");
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
       <div style={{fontWeight:"bolder",marginBottom:"2rem"}}>USER DATA</div>
       <div>
            <div className="add-user" style={{marginTop:"100px", marginLeft:"180px"}}>
       
            <div>
            <div className="add-user" style={{marginTop:"100px", marginLeft:"180px"}}>
                <TextField onChange={(event) => setFirstName(event.target.value)}
                    label="First Name" type="name" variant="standard" style={{marginBottom:"2rem"}}/><br></br>

                <TextField onChange={(event) => setLastName(event.target.value)}
                    label="Last Name" type="name" variant="standard" style={{marginBottom:"2rem"}}/><br></br>

                <TextField onChange={(event) => setDate(event.target.value)}
                    label="DOB" type="date" variant="standard" style={{marginBottom:"2rem"}}/><br></br>

                <Form.Select aria-label="Default select example" onSelect={(event) => setGender(event.target.value)}style={{marginBottom:"2rem",width:"10rem"}}>
                    <option>Gender</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                </Form.Select>

                <TextField onChange={(event) => setEmail(event.target.value)}
                    label="Email" type="email" variant="standard" style={{marginBottom:"2rem"}}/><br></br>

                <TextField onChange={(event) => setPhone(event.target.value)}
                    label="Phone" type="name" variant="standard" style={{marginBottom:"2rem"}}/><br></br>

                <TextField onChange={(event) => setJobtitle(event.target.value)}
                    label="Job Title" type="name" variant="standard" style={{marginBottom:"2rem"}}/><br></br>

                <TextField onChange={(event) => setExperience(event.target.value)}
                    label="Experience" type="name" variant="standard" style={{marginBottom:"2rem"}}/><br></br>
                    <Button className="add-button" onClick={() => {
          const newuserprofile = {
            Firstname: Firstname,
            Lastname:Lastname,
            date:date,
            gender:gender,
            email: email,
            phone: phone,
            jobtitle:jobtitle,      
            experience:experience         
          };
          
          fetch("https://63282709a2e90dab7bd970f7.mockapi.io/profile",{
            method: "POST",
            body: JSON.stringify(newuserprofile),
            headers: {
              "Content-Type": "application/json",
            }
          })
          .then((data) => data.json())         
          .then(() => navigate("/userprofile"));                  
        }} 
          variant="contained" style={{marginBottom:"5rem"}}>Add user profile</Button>
            </div>
             
        
        </div>


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

export default Createprofile;