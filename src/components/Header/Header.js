import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
import Logo from '../../images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <nav className='navbar navbar-expand navbar-light bg-white fixed-top'>
            <div className="container">
                <Link to='/' className='navbar-brand'>
                    <img src={Logo} alt="Red onion logo" />
                </Link>

                <ul className='navbar-nav align-items-center'>
                    <li className='nav-item active'>
                        <Link to='/cart' className='nav-link'><FontAwesomeIcon icon={faCartArrowDown} /></Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/login' className='nav-link'>Login</Link>
                    </li>
                    <li className='nav-item'>
                        <a href="#" className='nav-link'>
                            <button className='btn btn-danger btn-rounded'>Sign Up</button>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;