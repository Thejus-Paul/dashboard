import { useState } from 'react';
import './queries.css';

const Queries = () => {
    const [queries, setQueries] = useState([{
        message: "What are your offers?",
        api: 'IdWchAkl3C'
    },
    {
        message: "Can you mention your working hours?",
        api: 'IdWchAkl3C'
    },
    {
        message: "Do you have cashew cookies?",
        api: 'IdWchAkl3C'
    }
]);
    return(
        <div className="queries">
            <span className="title">Customer Queries</span>
            <span className="subtitle">The queries that were left unresolved can be found here. You may click <code>Reply</code> to respond to each message.</span>
            <div className="buttons">
                <button className="outline-btn">Negotiation</button>
                <button className="outline-btn">Payment</button>
                <button className="outline-btn">Delivery</button>
                <button className="outline-btn">Discounts</button>
                <button className="outline-btn">Quality - Manufacturing</button>
                <button className="outline-btn">Post Purchase Support</button>

            </div>
            <div className="queries-list">            
                { queries.map((query,index) => {
                        return(
                            <div className="query" key={index}>
                                <div className="body">
                                    <span className="message">{query.message}</span>
                                    <div className="actions">
                                        <button className="submit-btn">Reply</button>
                                        <button className="clear-btn">Discard</button>
                                    </div>
                                </div>
                            </div>
                        )})
                }
            </div>
        </div>
    )
}

export default Queries;