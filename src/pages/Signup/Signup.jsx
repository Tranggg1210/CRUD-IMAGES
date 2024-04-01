import React, { useState } from 'react'
import '../Login/Login.scss'
import './Signup.scss'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Signup() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const handleSignup = async(e) => {
        e.preventDefault();
        const res = await axios.post('https://reqres.in/api/register',{
            "username": "eve.holt@reqres.in",
            "email": "eve.holt@reqres.in",
            "password": "pistol"
          })
        if(res.status === 200 ){
            localStorage.setItem('user-token', res.data.token);
            navigate("/")
        }
    }
    return (
        <div className='login container'>
            <div className="wide wapper">
                <div className="signup-close" onClick={() => navigate('/login')}>
                   <i className="fa-solid fa-xmark"></i>
                </div>
                <h1>Signup</h1>
                <form onSubmit={handleSignup}>
                    <div className="form-item">
                        <input type="email" name="email" id="email" placeholder='Email' autoComplete="username" required value={user.email} onChange={e => setUser({email:  e.target.value, password: user.password})}/>
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="form-item">
                        <input type="password" name="password" id="password" placeholder='Password' autoComplete="current-password" required value={user.password} onChange={e => setUser({email: user.email, password: e.target.value})}/>
                        <i className="fa-solid fa-lock"></i>
                    </div>
                    <button type='submit' className='btn-login'>Signup</button>
                    <p>You have an account? <Link to="/login" className='register-link'>Login</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Signup