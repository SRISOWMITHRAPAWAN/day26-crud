import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Deleteuser = () => {
    
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://63282709a2e90dab7bd970f7.mockapi.io/users/${id}`, {
      method: "DELETE",
    })     
      .then(() => navigate("/user"));
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default Deleteuser;