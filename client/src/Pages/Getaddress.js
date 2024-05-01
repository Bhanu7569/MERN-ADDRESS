import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/getaddress')
      .then((res) => {
        setUserDetails(res.data); // Set user details using res.data
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }, []);

  const DeleteTask = (id) =>{
    axios.delete("http://localhost:5000/deleteaddress/" + id).then(res=> {console.log(res.data)
    window.location.reload()
  })
  }

  return (
    <div className="container mt-5">
      <Link to={'/add'}><FaPlusCircle size={32} /></Link>
      <h2>User Details</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {userDetails.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td><button className='btn btn-danger' onClick={(e)=>DeleteTask(user._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;
