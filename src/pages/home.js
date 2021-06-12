import { BrowserRouter as Router, Route, Switch, NavLink, useHistory } from 'react-router-dom';
import './home.css';

import Dashboard from '../components/dashboard';
import Description from '../components/description'
import Catalog from '../components/catalog';
import Feedbacks from '../components/feedbacks';
import Queries from '../components/queries';
import ChatBots from '../components/chatBots';
import Complaints from '../components/complaints';
import Offers from '../components/offers';
import Subscriptions from '../components/subscriptions';
import ReturnOrders from '../components/returnOrders';
import CancelOrders from '../components/cancelOrders';
import Orders from '../components/orders';
import { useState } from 'react';

const Home = (props) => {
    const username = window.localStorage.getItem("username");
    const [settingsOpen, setSettingsOpen] = useState(false);
    const history = useHistory();
    if(!username) {
        history.push('/login');
    }

    const dropDownMenu = () => {
        if(settingsOpen) {
            document.getElementsByClassName("additional-settings")[0].style.display = "flex";
            setSettingsOpen(false);
        } else {
            document.getElementsByClassName("additional-settings")[0].style.display = "none";
            setSettingsOpen(true);
        }
    }

    const onLogout = () => {
        window.localStorage.removeItem("username");
        history.push('/login');
    }
    
    return(
        <div className="container">
            <div className="header">
                <span className="title">SUP PORT</span>
                <div className="user" >
                    <img className="image" src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Ffree-vector%2Fman-profile-cartoon_18591-58482.jpg&f=1&nofb=1`} alt="user-icon" />
                    <span className="name">{username}</span>
                    <svg onClick={dropDownMenu}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/></svg> 
                    <div className="additional-settings">
                    <span className="setting">
                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>
                        <span className="name">Settings</span>
                    </span>
                    <span className="setting" id="logout" onClick={onLogout}>
                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>
                        <span className="name">Logout</span>
                    </span>
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="nav">
                    <NavLink exact className="hyperlink" activeClassName="active" to='/home'  onClick={() => { history.push('/home'); window.location.reload()}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg> 
                        <span className="location">Dashboard</span>
                    </NavLink>

                    <NavLink exact className="hyperlink" activeClassName="active" to='/home/description' onClick={() => { history.push('/home/description'); window.location.reload()}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg> 
                        <span className="location">Description</span>
                    </NavLink>

                    <NavLink exact className="hyperlink" activeClassName="active" to='/home/catalog' onClick={() => { history.push('/home/catalog'); window.location.reload()}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"/></svg>								
                        <span className="location">Catalog</span>
                    </NavLink>

                    <NavLink exact className="hyperlink" activeClassName="active" to='/home/offers' onClick={() => { history.push('/home/offers'); window.location.reload()}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/></svg>
                        <span className="location">Offers</span>
                    </NavLink>

                    <NavLink exact className="hyperlink" activeClassName="active" to='/home/queries' onClick={() => { history.push('/home/queries'); window.location.reload()}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/></svg> 
                        <span className="location">Queries</span>
                    </NavLink>

                    <NavLink exact className="hyperlink" activeClassName="active" to='/home/orders' onClick={() => { history.push('/home/orders'); window.location.reload()}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"/></svg>
                        <span className="location">Orders</span>
                    </NavLink>

                    <NavLink exact className="hyperlink" activeClassName="active" to='/home/return_orders' onClick={() => { history.push('/home/return_orders'); window.location.reload()}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>
                        <span className="location">Returns</span>
                    </NavLink>

                    <NavLink exact className="hyperlink" activeClassName="active" to='/home/cancel_orders' onClick={() => { history.push('/home/cancel_orders'); window.location.reload()}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18"><path d="M9 1C4.58 1 1 4.58 1 9s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4 10.87L11.87 13 9 10.13 6.13 13 5 11.87 7.87 9 5 6.13 6.13 5 9 7.87 11.87 5 13 6.13 10.13 9 13 11.87z"/></svg>
                        <span className="location">Cancellations</span>
                    </NavLink>

                    <NavLink exact className="hyperlink" activeClassName="active" to='/home/subscriptions' onClick={() => { history.push('/home/subscriptions'); window.location.reload()}}>
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/></svg>
                        <span className="location">Subscriptions</span>
                    </NavLink>

                    <NavLink exact className="hyperlink" activeClassName="active" to='/home/complaints' onClick={() => { history.push('/home/complaints'); window.location.reload()}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>  
                        <span className="location">Complaints</span>
                    </NavLink>
                </div>
                <div className="content">
                    <Router>
                        <Switch>
                            <Route path="/home/description" component={Description} />
                            <Route path="/home/catalog" component={Catalog} />
                            <Route path="/home/feedbacks" component={Feedbacks} />
                            <Route path="/home/queries" component={Queries} />
                            <Route path="/home/chat_bots" component={ChatBots} />
                            <Route path="/home/complaints" component={Complaints} />
                            <Route path="/home/subscriptions" component={Subscriptions} />
                            <Route path="/home/offers" component={Offers} />
                            <Route path="/home/return_orders" component={ReturnOrders} />
                            <Route path="/home/cancel_orders" component={CancelOrders} />
                            <Route path="/home/orders" component={Orders} />
                            <Route exact path="/home/" component={Dashboard} />
                        </Switch>
                    </Router>
                </div>
            </div>
            <div className="footer">
                <span>
                    <img src={`https://www.pngrepo.com/png/203226/180/flash-thunder.png`} alt="Powered" />
                    By SUP PORT
                </span>
            </div>
        </div>
    );
}

export default Home;