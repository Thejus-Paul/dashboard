import './login.css';
import CustomerServiceImg from './customer-service.png';
import { useHistory } from 'react-router';
import { useState } from 'react';

export default function Login() {
    const history = useHistory();

    const [emailAddress, SetEmailAddress] = useState("");
    const [password, SetPassword] = useState("");

    const handleResponse = (e) => {
        e.preventDefault();
        history.push('/home')
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
                            <span className="hyperlink"><span className="secure">https</span>://dashboard.vercel.app</span>
                        </span>
                    </div>
                    <form onSubmit={handleResponse}>
                        <div className="input-box">
                            <label htmlFor="email">Email</label>
                            <input 
                            aria-label="Enter your Email ID:" 
                            type="email" 
                            name="email"
                            onChange={(e) => SetEmailAddress(e.target.value)}
                            />
                        </div>
                        <div className="input-box">
                            <label htmlFor="password">Password</label>
                            <input 
                            aria-label="Enter your Password:" 
                            type="password" 
                            name="password" 
                            onChange={(e) => SetPassword(e.target.value)}
                            />
                        </div>
                        <button className="login-btn" type="submit">log in</button>
                    </form>
                    <div className="additional-features">
                        <a href="/forgot_password">Forgot Password</a>
                        <span>Not on Sup Port yet? <a href="/sign_up">Register</a></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
