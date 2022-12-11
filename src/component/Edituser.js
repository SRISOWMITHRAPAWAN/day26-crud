import React from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function Edituser() {
    
    const { id } = useParams();

    const [user, setuser] = useState("")

    useEffect(() => {
        fetch(`https://63282709a2e90dab7bd970f7.mockapi.io/users/${id}`, {
            method: "GET"
        })
            .then((data) => data.json())
            .then((data) => setuser(data))
            .catch((e) => console.log(e))
    }, []);

    return (
        <div>
            {user ? <EdituserForm user={user} /> : "Loading..."}
        </div>
    )
}


function EdituserForm({ user }) {

    const navigate = useNavigate();
    const [Firstname, setFirstName] = useState(user.Firstname);
    const [Lastname, setLastName] = useState(user.Lastname);
    const [date, setDate] = useState(user.date);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    

    return (
        <div id="wrapper">
        <Sidebar/>
               <div id="content-wrapper" class="d-flex flex-column">
                             
               <div id="content">
                
                 <Topbar/>
                             <div class="container-fluid">
                             <div class="row">
                 <div class="col">
                 <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
       
                 <div>
            <div className="add-user" style={{marginTop:"100px", marginLeft:"180px"}}>
                <TextField onChange={(event) => setFirstName(event.target.value)}
                    label="First Name" type="name" value={Firstname} variant="standard" style={{marginBottom:"2rem"}}/> <br></br>

                <TextField onChange={(event) => setLastName(event.target.value)}
                    label="Last Name" type="name" value={Lastname} variant="standard" style={{marginBottom:"2rem"}}/><br></br>

                <TextField onChange={(event) => setDate(event.target.value)}
                    label="DOB" type="date" value={date} variant="standard" style={{marginBottom:"2rem"}}/><br></br>

                <TextField onChange={(event) => setEmail(event.target.value)}
                    label="Email" type="email" value={email} variant="standard" style={{marginBottom:"2rem"}}/><br></br>

                <TextField onChange={(event) => setPhone(event.target.value)}
                    label="Phone" type="number" value={phone} variant="standard" style={{marginBottom:"2rem"}}/><br></br>

<Button className="add-button" onClick={() => {
                const updateduser = {
                    Firstname: Firstname,
                    Lastname:Lastname,
                    date:date,
                    email: email,
                    phone: phone
                     
                };

                fetch(`https://63282709a2e90dab7bd970f7.mockapi.io/users/${user.id}`, {
                    method: "PUT",
                    body: JSON.stringify(updateduser),
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                    .then((data) => data.json())                    
                    .then(() => navigate("/user"));
            }}
                variant="contained">Update</Button>

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