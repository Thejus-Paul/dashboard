import { useState, useEffect } from 'react';
import './queries.css';

const Subscriptions = () => {
    const [subscriptions, setSubscriptions] = useState([]);
    useEffect(() => {
        fetch('https://sponge-imminent-text.glitch.me/cookiepoint/subscriptions')
        .then(response => response.json())
        .then(response => setSubscriptions(response.users));
    }, [subscriptions]);
    return(
        <div className="queries">
            <span className="title">Subscriptions</span>
            <span className="subtitle">This page lets you see all the subscribers who opted for notifications of new offers.</span>
            <div className="queries-list">            
                { subscriptions.length > 0 ? subscriptions.map((subscription,index) => {
                        return(
                            <div className="query" key={index}>
                                <div className="body">
                                    <span className="message">
                                        <span>{subscription.customer_name}</span> - <em>{subscription.customer_email}</em></span>
                                </div>
                            </div>
                        )}) : <p>Either the subscribers list is being fetched OR there aren't any subscribers.</p>
                }
            </div>
        </div>
    )
}

export default Subscriptions;