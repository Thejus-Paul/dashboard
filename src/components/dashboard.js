import './dashboard.css';
import {BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Bar} from 'recharts';
import CookiesIcon from './cookies.svg';
import WhatsAppIcon from './whatsapp.svg';
import TelegramIcon from './telegram.svg';
import WebsiteIcon from './globe.svg';



const Dashboard = () => {
    const data = [
        {
          "name": "Very Unsatisfied",
          "value": 3,
          "fill": "#BF360C"
        },
        {
            "name": "Unsatisfied",
            "value": 5,
            "fill": "#F57F17"
          },
          {
            "name": "Neutral",
            "value": 2,
            "fill": "#607D8B"
          },
          {
            "name": "Satisfied",
            "value": 10,
            "fill": "#009688"
          },
          {
            "name": "Very Satisfied",
            "value": 19,
            "fill": "#4CAF50"
          }
      ];
    return(
        <div className="dashboard">
            <div className="col">
                <span className="title">Welcome John!</span>
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
                        <span className="subtitle">Queries</span>
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
                <div className="cards">
                    <div className="sm-card" id="calendar">

                    </div>
                </div>
            </div>
            <div className="col">
                <div className="cards">
                    <div className="satisfaction-card">
                        <span className="title">Customer Satisfaction Score</span>
                        <BarChart width={750} height={300} data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" />
                        </BarChart>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;