import React, {useState} from 'react';
import '../assets/login.css'
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {login} from "../app/auth/authThunk";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const {email, password} = formData;

    const handleChange = (ev) => {
        setFormData({
            ...formData,
            [ev.target.name]: ev.target.value,
        })
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        dispatch(login(formData)).then(() => {
            navigate('/products');
        })
    }

    return (
        <form className="main-content" onSubmit={handleSubmit}>
            <h1 className="sign-in-title">Sign In</h1>
            <div className="form-group">
                <label htmlFor="email" className="label">Email</label>
                <input
                    type="email"
                    id="email"
                    className="input-field"
                    name='email'
                    value={email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password" className="label">Password</label>
                <input
                    type="password"
                    id="password"
                    className="input-field"
                    name='password'
                    value={password}
                    onChange={handleChange}
                />
            </div>
            <button className="sign-in-button">Sign In</button>

            <div className="links">
                <p className="new-customer">
                    New customer?{' '}
                    <Link to={'/register'} className="create-account-link">
                        Create your account
                    </Link>
                </p>
                <p className="forgot-password">
                    Forgot Password?{' '}
                    <Link to={'/forget'} className="reset-password-link">
                        Reset Password
                    </Link>
                </p>
            </div>
        </form>
    );
}

export default Login;