import './dashboard.css';
import {BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Bar,ResponsiveContainer, PieChart, Pie, Legend} from 'recharts';
import CookiesIcon from './cookies.svg';
import WhatsAppIcon from './whatsapp.svg';
import TelegramIcon from './telegram.svg';
import WebsiteIcon from './globe.svg';

const Dashboard = () => {
    const username = window.localStorage.getItem("username");
    const satisfactionData = [
        {
          "name": "Very Unsatisfied",
          "value": 3,
          "fill": "#ff5252"
        },
        {
            "name": "Unsatisfied",
            "value": 5,
            "fill": "#FFAB40"
          },
          {
            "name": "Neutral",
            "value": 2,
            "fill": "#B0BEC5"
          },
          {
            "name": "Satisfied",
            "value": 10,
            "fill": "#00BFA5"
          },
          {
            "name": "Very Satisfied",
            "value": 19,
            "fill": "#00C853"
          }
      ];
      const intentData = [
        { name: "Negotiation", value: 400, fill: "#ff8a80" },
        { name: "Payment", value: 300, fill: "#FF80AB" },
        { name: "Delivery", value: 300, fill: "#EA80FC" },
        { name: "Discounts", value: 200, fill: "#B388FF" },
        { name: "Quality - Manufacturing", value: 200, fill: "#8C9EFF" },
        { name: "Post Purchase Support", value: 200, fill: "#82B1FF" }
      ];
      
    return(
        <div className="dashboard no-scroll">
            <div className="col">
                <span className="title">Welcome {username.split(' ')[0]}!</span>
                <div className="cards">
                    <div className="name-card">
                        <span className="company-details">
                            <img className="icon" src={CookiesIcon} alt="CookiePoint Icon" />
                            <span className="name">Cookie Point</span>
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
                <div className="intent-card">
                    <span className="title">Intents</span>
                    <ResponsiveContainer>
                        <PieChart>
                        <Pie dataKey="value" data={intentData} label />
                        <Tooltip />
                        <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="cards">
                    <div className="satisfaction-card">
                        <span className="title">Customer Satisfaction Score</span>
                        <BarChart width={325} height={250} data={satisfactionData}>
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