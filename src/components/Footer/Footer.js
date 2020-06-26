import React from 'react';
import './Footer.css';
import whiteLogo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-color py-3'>
            <div className='container'>
                <div className='row footer-top py-5'>
                    <div className='col-md-6 mb-5'>
                        <img src={whiteLogo} alt="white-logo" />
                    </div>
                    <div className='col-md-3'>
                        <ul className='list-unstyled'>
                            <li><Link to='/about'>About Online Food</Link></li>
                            <li><Link to='/blog'>Read Our Blog</Link></li>
                            <li><Link to='/signup'>Sign up to deliver</Link></li>
                            <li><Link to='/restaurants'>Add your restaurant</Link></li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <ul className="list-unstyled">
                            <li><Link to='/help'>Get Help</Link></li>
                            <li><Link to='/faq'>Read FAQ</Link></li>
                            <li><Link to='/cities'>View All Cities</Link></li>
                            <li><Link to='/restaurants'>Restaurants near me</Link></li>
                        </ul>
                    </div>
                </div>

                <div className='footer-bottom d-flex justify-content-between'>
                    <small className='text-secondary'>Copyright &copy; 2020 Red Onion Online Food. Proudly created by <span>❤️</span>
                        <span><a className='text-color' href="https://github.com/PriontoAbdullah"> Prionto Abdullah</a></span>
                    </small>
                    <ul className="list-inline">
                        <li className="list-inline-item ml-3"><Link to='/policy'>Privacy Policy</Link></li>
                        <li className="list-inline-item  ml-3"><Link to='/terms'>Terms of Use</Link></li>
                        <li className="list-inline-item  ml-3"><Link to='/pricing'>Pricing</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;