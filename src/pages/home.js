import { BrowserRouter as Router, Route, Switch, NavLink, useHistory } from 'react-router-dom';
import './home.css';

import Dashboard from '../components/dashboard';
import Description from '../components/description'
import Catalog from '../components/catalog';
import Feedbacks from '../components/feedbacks';
import Queries from '../components/queries';
import ChatBots from '../components/chatBots';
import Complaints from '../components/complaints';

const Home = (props) => {
    const username = window.localStorage.getItem("username");
    const history = useHistory();
    
    return(
        <div className="container">
            <div className="header">
                <span className="title">SUP PORT</span>
                <div className="user">
                    <img className="image" src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Ffree-vector%2Fman-profile-cartoon_18591-58482.jpg&f=1&nofb=1`} alt="user-icon" />
                    <span className="name">{username}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/></svg> 
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

                    <NavLink exact className="hyperlink" activeClassName="active" to='/home/feedbacks' onClick={() => { history.push('/home/feedbacks'); window.location.reload()}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/></svg> 
                    <span className="location">Returned Orders</span>
                    </NavLink>

                    <NavLink exact className="hyperlink" activeClassName="active" to='/home/queries' onClick={() => { history.push('/home/queries'); window.location.reload()}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/></svg> 
                    <span className="location">Queries</span>
                    </NavLink>

                    <NavLink exact className="hyperlink" activeClassName="active" to='/home/chat_bots' onClick={() => { history.push('/home/chat_bots'); window.location.reload()}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/></svg> 
                    <span className="location">Chat Bots</span>
                    </NavLink>

                    <NavLink exact className="hyperlink" activeClassName="active" to='/home/complaints' onClick={() => { history.push('/home/complaints'); window.location.reload()}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>  
                    <span className="location">Complaints</span>
                    </NavLink>
                </div>
                <div className="content">
                    <Router>
                        <Switch>
                            <Route  path="/home/description" component={Description} />
                            <Route  path="/home/catalog" component={Catalog} />
                            <Route  path="/home/feedbacks" component={Feedbacks} />
                            <Route  path="/home/queries" component={Queries} />
                            <Route  path="/home/chat_bots" component={ChatBots} />
                            <Route  path="/home/complaints" component={Complaints} />
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