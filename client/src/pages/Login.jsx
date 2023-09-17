// Login.jsx

import { useState } from "react";
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: '',
    role: 'parent', // Default to 'parent' role
  })

  const loginUser = async (e) => {
    e.preventDefault()
    const { email, password, role } = data
    try {
      const { data } = await axios.post('/login', {
        email,
        password,
        role // Include the selected role in the request
      });
      if (data.error) {
        toast.error(data.error)
      } else {
        setData({}); // Clear the form
        if (role === 'parent') {
          navigate('/Dashboard') // Navigate to the Parent dashboard
        } else if (role === 'child') {
          navigate('/client/src/pages/ChildDashboard.jsx') // Navigate to the Child dashboard
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input type='text' placeholder='enter email...' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
        <label>Password</label>
        <input type='password' placeholder='enter password...' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
        <label>Role</label>
        <select value={data.role} onChange={(e) => setData({ ...data, role: e.target.value })}>
          <option value="parent">Parent</option>
          <option value="child">Child</option>
        </select>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}
