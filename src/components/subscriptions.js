import { useState, useEffect } from 'react';
import CsvDownload from 'react-json-to-csv';
import './queries.css';

const Subscriptions = () => {
    const [subscriptions, setSubscriptions] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_SUP_PORT_API}/cookiepoint/subscriptions`)
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
                 <CsvDownload className="submit-btn buttons" data={subscriptions} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="24" height="24" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
                    Generate CSV
                 </CsvDownload>
            </div>
        </div>
    )
}

export default Subscriptions;