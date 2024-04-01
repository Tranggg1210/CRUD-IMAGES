import React from 'react'
import './Header.scss';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className='header container'>
            <div className="wide container">
                <div className="header-logo">
                    <img src={logo} alt="" />
                </div>
                <nav className='header-nav'>
                    <NavLink to="/" activeClassName="active">Home</NavLink>
                    <NavLink to='/cna' activeClassName="active">Users</NavLink>
                    <NavLink to='/abc' activeClassName="active">Blogs</NavLink>
                    <NavLink to='/login' activeClassName="active">Login</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header