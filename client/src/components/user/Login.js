import React, { Fragment, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'

import { useDispatch, useSelector } from 'react-redux'
import { login, clearErrors } from '../../actions/userActions'

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const dispatch = useDispatch();

    const { isAuthenticated, error, loading } = useSelector(state => state.auth);

    const navigate = useNavigate();

    useEffect(() => {

        if(isAuthenticated) {
            navigate('/devices')
        }

        if(error) {
            dispatch(clearErrors());
        }

    }, [dispatch, isAuthenticated, error, navigate])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))

    }

    return (
        <Fragment>
        {loading ? <Loader /> : (
            <Fragment>

            <MetaData title={'Login'} /> 

            <div className="row wrapper">
            <div className="col-10 col-lg-5">
                <form className="shadow-lg" onSubmit={submitHandler}>
                    <h1 className="mb-3">Login</h1>
                    <div className="form-group">
                        <label htmlFor="email_field">Email</label>
                        <input
                            type="email"
                            id="email_field"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password_field">Password</label>
                        <input
                            type="password"
                            id="password_field"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <Link to="/password/forgot" className="float-right mb-4">Forgot Password?</Link>

                    <button
                        id="login_button"
                        type="submit"
                        className="btn btn-block py-3"
                    >
                        LOGIN
                    </button>

                </form>
            </div>
        </div>      
            </Fragment>
        )
    }
        </Fragment>
    )
}

export default Login