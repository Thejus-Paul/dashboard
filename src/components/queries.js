import { useState } from 'react';
import './queries.css';

const Queries = () => {
    const [queries, setQueries] = useState([{
        message: "What are your offers?",
        time: 1622255697778
    },
    {
        message: "Can you mention all discounts you provide?",
        time: 1522255497778
    },
    {
        message: "Can I order online?",
        time: 1522255597778
    },
    {
        message: "Can you mention your working hours?",
        time: 1522255697778
    },
    {
        message: "Do you have cashew cookies?",
        time: 1422255697778
    }
]);
    return(
        <div className="queries">
            <span className="title">Customer Queries</span>
            <span className="subtitle">The queries that were left unresolved can be found here. You may click <code>Reply</code> to respond to each message.</span>
            {/* <div className="buttons">
                <button className="outline-btn">Negotiation</button>
                <button className="outline-btn">Payment</button>
                <button className="outline-btn">Delivery</button>
                <button className="outline-btn">Discounts</button>
                <button className="outline-btn">Quality - Manufacturing</button>
                <button className="outline-btn">Post Purchase Support</button>

            </div> */}
            <div className="queries-list">            
                { queries.map((query,index) => {
                        return(
                            <div className="query" key={index}>
                                <div className="body">
                                    <span className="message">
                                        <span>{query.message}</span> - <em>{new Date(query.time).toGMTString()}</em></span>
                                </div>
                            </div>
                        )})
                }
            </div>
        </div>
    )
}

export default Queries;