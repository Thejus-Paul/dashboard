import { useHistory } from "react-router-dom";
import './dashboard.css';

const Dashboard = () => {
    const history = useHistory();
    return(
        <div className="dashboard">
            <div className="row">
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
                    <div className="sm-card">
                        <span className="subtitle">WhatsApp</span>
                        <span className="value">Disabled</span>
                    </div>
                    <div className="sm-card">
                        <span className="subtitle">Telegram</span>
                        <span className="value">Enabled</span>
                    </div>
                    <div className="sm-card">
                        <span className="subtitle">Website Chatbot</span>
                        <span className="value">Enabled</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;