import './chatBots.css';

const ChatBots = () => {
    return(
        <div className="queries">
            <span className="title">Choose one platform to get started</span>
            <div className="chatbot-cards">
                <button className="chatbot">
                    <img className="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/150px-WhatsApp.svg.png" alt="WhatsApp" />
                    <span className="name">WhatsApp</span>
                </button>
                <button className="chatbot">
                    <img className="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/150px-Telegram_2019_Logo.svg.png" alt="Telegram" />
                    <span className="name">Telegram</span>
                </button>
                <button className="chatbot">
                    <img className="image" src="https://www.ci.lowell.or.us/sites/default/files/imageattachments/administration/page/193/international-websites-web-icon.png" alt="Website" />
                    <span className="name">Website</span>
                </button>
            </div>
        </div>
    )
}

export default ChatBots;