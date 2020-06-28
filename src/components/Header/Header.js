import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../../images/logo2.png';
import userPhoto from '../../images/ICON/Group 2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../SignUp/useAuth';

const Header = (props) => {

    const auth = useAuth();

    return (
        <nav className='navbar navbar-expand navbar-light bg-white py-2  sticky-top'>
            <div className="container">
                <Link to='/' className='navbar-brand'>
                    <img src={Logo} alt="Red onion logo" />
                </Link>

                <ul className='navbar-nav align-items-center'>
                    <li className='nav-item active'>
                        <Link to='/checkout' className='nav-link'>
                            <FontAwesomeIcon icon={faCartArrowDown} />
                            <span className='badge bg-light'>{props.cart.length}</span>
                        </Link>
                    </li>

                    <li className='nav-item'>
                        {
                            auth.user ?
                                <Link to='/checkout' className='nav-link'>
                                    {auth.user.displayName}
                                    <img className='ml-3' src={auth.user.photoURL ? auth.user.photoURL : userPhoto} width="35px" alt="" />
                                </Link>
                                :
                                <Link to='/signup' className='nav-link'>Login</Link>
                        }
                    </li>

                    <li className='nav-item'>
                        {
                            auth.user ?
                                <Link to='/' className='nav-link'>
                                    <button onClick={() => { auth.signOut() }}
                                        className='btn btn-danger btn-rounded'
                                    >
                                        Sign Out
                                </button>
                                </Link>
                                :
                                <Link to='/signup' className='nav-link'>
                                    <button
                                        className='btn btn-danger btn-rounded'
                                    >
                                        Sign Up
                                    </button>
                                </Link>
                        }
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;