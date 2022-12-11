import React from 'react';
import { useEffect, useState } from 'react';
import Topbar from './Topbar';
import Sidebar from'./Sidebar'


import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const User = () => {

    const [users, setUser] = useState([]);
    const navigate = useNavigate();

    function getUser() {
        fetch("https://63282709a2e90dab7bd970f7.mockapi.io/users", {
          method: "GET"
        })
          .then((data) => data.json())
          .then((res) => setUser(res))         
          .catch((e) => console.log(e));
      }
    
      useEffect(() => getUser() , []);

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
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">DOB</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th>Edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.Firstname}</td>
                <td>{user.Lastname}</td>
                <td>{user.date}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td><IconButton onClick={() => navigate(`/edit-user/${user.id}`)} color="secondary">
                    <EditIcon />
                  </IconButton>
                </td>
                <td><IconButton onClick={() => navigate(`/delete-user/${user.id}`)} color="error">
                    <DeleteIcon />
                  </IconButton>
                  </td>
              </tr>)
          })}
        </tbody>
      </table>
    </div>
    
    
    </div>
  </div>
               
    
                    

                  

                </div>
                </div>
                </div>
                </div>
         
 
  )
}

export default User;