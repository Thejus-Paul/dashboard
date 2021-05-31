import './chatBots.css';
import WhatsAppIcon from './whatsapp.svg';
import TelegramIcon from './telegram.svg';
import WebsiteIcon from './globe.svg';

const ChatBots = () => {
    return(
        <div className="queries">
            <span className="title">Choose one platform to get started</span>
            <div className="chatbot-cards">
                <button className="chatbot">
                    <img className="image" src={WhatsAppIcon} alt="WhatsApp" />
                    <span className="name">WhatsApp</span>
                </button>
                <button className="chatbot">
                    <img className="image" src={TelegramIcon} alt="Telegram" />
                    <span className="name">Telegram</span>
                </button>
                <button className="chatbot">
                    <img className="image" src={WebsiteIcon} alt="Website" />
                    <span className="name">Website</span>
                </button>
            </div>
        </div>
    )
}

export default ChatBots;