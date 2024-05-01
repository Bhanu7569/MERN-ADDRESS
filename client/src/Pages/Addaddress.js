import React from 'react';
import { useState } from 'react';
import { AiOutlineContacts } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import axios from 'axios'

import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Addaddress = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post('http://localhost:5000/create', {name, email, phone, address})
      if(data.error){
        toast.error(data.error)
      }else{
        setName('')
        setEmail('')
        setPhone('')
        setAddress('')
        toast.success("Address Created");
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="container-sm">
      <Link to={'/'}><AiOutlineContacts size={32} /></Link>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label" required>Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label" required>Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label" required>Phone</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => {
              if (e.target.value.length <= 10) {
                setPhone(e.target.value);
              }
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <textarea
            className="form-control"
            id="address"
            rows="3"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Add Address</button>
      </form>
    </div>

  )
}

export default Addaddress
