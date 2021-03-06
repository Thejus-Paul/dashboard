import CryptoJS from 'crypto-js';
import './login.css';
import CustomerServiceImg from './customer-service.png';
import { useHistory } from 'react-router';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Login(props) {
    const history = useHistory();
    const isLoggedIn = window.localStorage.getItem("username") ? true : false;
    if(isLoggedIn) {
        history.push('/home');
    }

    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    const handleResponse = (e) => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_SUP_PORT_API}/support/login`, {
            method: 'post',
            mode: 'cors',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                password: password, 
                email: emailAddress
            })
        }).then(res => res.json())
        .then(res => {
            try {
                if(res.email === emailAddress && res.password === password) {
                    window.localStorage.setItem("username", res.username);
                    history.push('/home');
                }
            } catch (error) {
                console.log(error)
            }
        });
        //history.push('/home')
    }
    return(
        <div className="login">
            <div className="info-card">
                <img src={CustomerServiceImg} alt="Customer Service" height="400px" />
                <span className="title">SUP PORT</span>
                <span className="subtitle">A dashboard to customize the features of SUP PORT system.</span>
                <div className="contact"></div>
            </div>
            <div className="input-card">
                <div className="form">
                    <span className="title">Log in</span>
                    <div className="verify">
                        <span className="text">Please check that you are visiting the correct URL.</span>
                        <span className="link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg> 
                            <span className="hyperlink"><span className="secure">https</span>://sup-port.vercel.app</span>
                        </span>
                    </div>
                    <form onSubmit={handleResponse}>
                        <div className="input-box">
                            <label htmlFor="email">Email</label>
                            <input 
                            aria-label="Enter your Email ID:" 
                            type="email" 
                            name="email"
                            onChange={(e) => setEmailAddress(CryptoJS.SHA3(CryptoJS.SHA512(e.target.value).toString()).toString())}
                            />
                        </div>
                        <div className="input-box">
                            <label htmlFor="password">Password</label>
                            <input 
                            aria-label="Enter your Password:" 
                            type="password" 
                            name="password" 
                            onChange={(e) => setPassword(CryptoJS.SHA3(CryptoJS.SHA512(e.target.value).toString()).toString())}
                            />
                        </div>
                        <button className="login-btn" type="submit">Login</button>
                    </form>
                    <div className="additional-features">
                        <span>Not on Sup Port yet?&nbsp;
                            <NavLink exact to='/register'>Register</NavLink>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
