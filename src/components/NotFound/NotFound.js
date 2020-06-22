import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-page d-flex align-items-center text-center">
            <div className="container">
                <h1 className="display-6">404 Error!</h1>
                <h3 className="lead mb-sm-4">Page Not Found</h3>
                <Link className="btn btn-danger btn-rounded" to="/">Back to Home</Link>
            </div>
        </div>
    );
};

export default NotFound;