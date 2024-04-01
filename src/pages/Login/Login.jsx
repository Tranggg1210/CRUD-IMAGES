import React, { useState } from 'react'
import './Login.scss'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const handleLogin = async(e) => {
        e.preventDefault();
        const res = await axios.post('https://reqres.in/api/login', {
            "username": "eve.holt@reqres.in",
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        })
        if(res.status === 200 ){
            localStorage.setItem('user-token', res.data.token);
            navigate("/")
        }

    }
    return (
        <div className='login container'>
            <div className="wide wapper">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="form-item">
                        <input type="email" name="email" id="email" placeholder='Email' autoComplete="username" required value={user.email} onChange={e => setUser({email:  e.target.value, password: user.password})}/>
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="form-item">
                        <input type="password" name="password" id="password" placeholder='Password' autoComplete="current-password" required value={user.password} onChange={e => setUser({email: user.email, password: e.target.value})}/>
                        <i className="fa-solid fa-lock"></i>
                    </div>
                    <Link to="" className='forgot-password-link'>Forgot password?</Link>
                    <button type='submit' className='btn-login'>Login</button>
                    <p>Don't have an account? <Link to="/signup" className='register-link'>Register</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login