import './feedbacks.css';

const Feedbacks = () => {
    return(
        <div className="feedbacks">
            <span className="title">Customer Feedbacks</span>
            <span className="subtitle">This section will lets you know whether your customers are satisfied with your product or service.</span>
            <div className="buttons">
                <button className="outline-btn">WhatsApp</button>
                <button className="outline-btn">Telegram</button>
                <button className="outline-btn">Website</button>
            </div>
        </div>
    )
}

export default Feedbacks;