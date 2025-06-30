import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {register} from '../app/auth/authThunk';
import {Link} from 'react-router-dom';

function Register() {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const {name, email, password, confirmPassword} = formData;

    const handleChange =  (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        dispatch(register(formData))
    }

    return (
        <form className="main-content" onSubmit={handleSubmit}>
            <h1 className="sign-in-title">Sign In</h1>
            <div className="form-group">
                <label htmlFor="name" className="label">Name</label>
                <input
                    type="text"
                    id="name"
                    className="input-field"
                    name='name'
                    value={name}
                    onChange={handleChange}
                />
            </div>
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
            <div className="form-group">
                <label htmlFor="confirmPassword" className="label">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    className="input-field"
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                />
            </div>
            <button className="sign-in-button">Sign In</button>

            <div className="links">
                <p className="new-customer">
                    New customer?{' '}
                    <Link to={'/login'} className="create-account-link">
                        Create your account
                    </Link>
                </p>
                <p className="forgot-password">
                    Forgot Password?{' '}
                    <a href="#" className="reset-password-link">
                        Reset Password
                    </a>
                </p>
            </div>
        </form>
    );
}

export default Register;