import React from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Form from 'react-bootstrap/Form';
import Sidebar from './Sidebar2';
import Topbar from './Topbar';
export default function Viewprofile() {
    
    const { id } = useParams();

    const [profile, setprofile] = useState("")

    useEffect(() => {
        fetch(`https://63282709a2e90dab7bd970f7.mockapi.io/profile/${id}`, {
            method: "GET"
        })
            .then((data) => data.json())
            .then((data) => setprofile(data))
            .catch((e) => console.log(e))
    }, []);

    return (
        <div>
            {profile ? <EdituserprofileForm profile={profile} /> : "Loading..."}
        </div>
    )
}


function EdituserprofileForm({profile}) {

    const navigate = useNavigate();
    const [Firstname, setFirstName] = useState(profile.Firstname);
    const [Lastname, setLastName] = useState(profile.Lastname);
    const [date, setDate] = useState(profile.date);
    const [gender, setGender] = useState(profile.gender);
    const [email, setEmail] = useState(profile.email);
    const [phone, setPhone] = useState(profile.phone);
    const [jobtitle, setJobtitle] = useState(profile.jobtitle);
    const [experience, setExperience] = useState(profile.experience);

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
                <TextField onChange={(event) => setFirstName(event.target.value)}
                    label="First Name" type="name" value={Firstname} variant="standard" style={{marginBottom:"2rem"}}/><br></br> 

                <TextField onChange={(event) => setLastName(event.target.value)}
                    label="Last Name" type="name" value={Lastname} variant="standard" style={{marginBottom:"2rem"}}/><br></br>

                <TextField onChange={(event) => setDate(event.target.value)}
                    label="DOB" type="date" value={date} variant="standard" style={{marginBottom:"2rem"}}/><br></br>

                <Form.Select aria-label="Default select example" onSelect={(event) => setGender(event.target.value)} value={gender} style={{width:"10rem",marginBottom:"2rem"}}>
                    <option>Gender</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                </Form.Select>

                <TextField onChange={(event) => setEmail(event.target.value)}
                    label="Email" type="email" value={email} variant="standard" style={{marginBottom:"2rem"}}/><br></br>

                <TextField onChange={(event) => setPhone(event.target.value)}
                    label="Phone" type="name" value={phone} variant="standard" style={{marginBottom:"2rem"}}/><br></br>

                <TextField onChange={(event) => setJobtitle(event.target.value)}
                    label="Job Title" type="name" value={jobtitle} variant="standard" style={{marginBottom:"2rem"}}/><br></br>

                <TextField onChange={(event) => setExperience(event.target.value)}
                    label="Experience" type="name" value={experience} variant="standard" style={{marginBottom:"2rem"}}/><br></br>
 <Button className="add-button" onClick={() => navigate("/userprofile")}
                               variant="contained" style={{marginBottom:"5rem"}}>Close</Button>
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