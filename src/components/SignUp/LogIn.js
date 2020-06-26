import React from 'react';
import Logo from '../../images/logo2.png';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const LogIn = (props) => {
    const { register, handleSubmit, errors } = useForm();

    return (
        <div className="sign-up">
            <div className="container">
                <div className="logo text-center py-2">
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                <div>
                    <h1 className='lead text-center py-3'>Welcome back!</h1>
                </div>
                <form onSubmit={handleSubmit(props.onSubmit)} className="py-3">

                    <div className="form-group">
                        <input
                            name="email"
                            className="form-control"
                            ref={register({ required: true })}
                            placeholder="Email"
                        />
                        {
                            errors.email && <span className="error">Email is required</span>
                        }
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            ref={register({ required: true })}
                            placeholder="Password"
                        />
                        {
                            errors.password && <span className="error">Password is required</span>
                        }
                    </div>

                    <div className="form-group">
                        <button
                            className="btn btn-danger btn-block"
                            type="submit"
                        >
                            Sign In
                        </button>
                    </div>

                    <div className="option text-center">
                        <label
                            onClick={props.returnUser}
                        >
                            Create a new Account
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogIn;