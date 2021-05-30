import './dashboard.css';
import CookiesIcon from './cookies.svg';
import WhatsAppIcon from './whatsapp.svg';
import TelegramIcon from './telegram.svg';
import WebsiteIcon from './globe.svg';

const Dashboard = () => {
    return(
        <div className="dashboard">
            <span className="title">Welcome John!</span>
            <div className="col">
                <div className="cards">
                    <div className="name-card">
                        <span className="company-details">
                            <img className="icon" src={CookiesIcon} alt="CookiePoint Icon" />
                            <span className="name">Cookie Point</span>
                        </span>
                        <span className="chat-bots">
                            <div className="chat-bot">
                                <img className="icon" src={WhatsAppIcon} alt="WhatsApp" />
                                <span>Enabled</span>
                            </div>
                            <div className="chat-bot">
                                <img className="icon" src={TelegramIcon} alt="Telegram" />
                                <span>Enabled</span>
                            </div>
                            <div className="chat-bot">
                                <img className="icon" src={WebsiteIcon} alt="Website" />
                                <span>Enabled</span>
                            </div>
                        </span>
                    </div>
                    
                </div>
                <div className="cards">
                    <div className="sm-card">
                        <span className="subtitle">Total Queries</span>
                        <span className="value">3</span>
                    </div>
                    <div className="sm-card">
                        <span className="subtitle">Complaints</span>
                        <span className="value">2</span>
                    </div>
                    <div className="sm-card">
                        <span className="subtitle">Feedbacks</span>
                        <span className="value">0</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;