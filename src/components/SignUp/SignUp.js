import React, { useState } from 'react';
import './SignUp.css';
import Logo from '../../images/logo2.png';
import Auth from './useAuth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import LogIn from './LogIn';

const SignUp = () => {

    const [returningUser, setReturningUser] = useState(false);
    const { register, handleSubmit, watch, errors } = useForm();

    const auth = Auth();

    const onSubmit = user => {
        if (returningUser) {
            if (user.email && user.password) {
                auth.signIn(user.email, user.password);
            }
        }
        else {
            if (user.name && user.email && user.password && user.confirmPassword) {
                auth.signUp(user.email, user.confirmPassword, user.name);
            }
        }
    }

    const returnUser = () => setReturningUser(false)

    return (
        <div>
            {returningUser ?
                <LogIn
                    onSubmit={onSubmit}
                    returnUser={returnUser}
                >
                </LogIn>

                :

                <div className="sign-up">
                    <div className="container">
                        <div className="logo text-center py-2">
                            <Link to="/">
                                <img src={Logo} alt="" />
                            </Link>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="py-3">

                            <div className="form-group">
                                <input
                                    name="name"
                                    className="form-control"
                                    ref={register({ required: true })}
                                    placeholder="Name"
                                />
                                {
                                    errors.name && <span className="error">Name is required</span>
                                }
                            </div>

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
                                <input
                                    type="password"
                                    name="confirm_password"
                                    className="form-control"
                                    ref={register({
                                        validate: (value) => value === watch('password')
                                    })}
                                    placeholder="Confirm Password"
                                />
                                {
                                    errors.confirm_password && <span className="error">Passwords don't match.</span>
                                }
                            </div>

                            <div className="form-group">
                                <button
                                    className="btn btn-danger btn-block"
                                    type="submit"
                                >
                                    Sign Up
                                </button>
                            </div>

                            <div className='text-center my-0'>
                                <label> or </label>
                            </div>

                            <button
                                className='btn btn-danger  btn-block'
                                onClick={auth.signInWithGoogle}
                            >
                                Sign in with Google
                            </button>

                            <div className="option text-center my-3">
                                <label
                                    onClick={() => setReturningUser(true)}
                                >
                                    Already Have an Account
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </div>

    );
};

export default SignUp;