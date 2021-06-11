import { useState, useEffect } from 'react';
import './queries.css';

const Queries = () => {
    const [queries, setQueries] = useState([]);
    useEffect(() => {
        fetch('https://sponge-imminent-text.glitch.me/cookiepoint/queries')
        .then(response => response.json())
        .then(response => setQueries((response.queries).reverse()));
    }, [queries]);

    return(
        <div className="queries">
            <span className="title">Customer Queries</span>
            <span className="subtitle">The queries that were left unresolved can be found here. You can call the customer to resolve their queries. You may also update the abstract for the future customers.</span>
            <div className="queries-list">            
                { queries.length > 0 ? queries.map((query,index) => {
                        return(
                            <div className="query" key={index}>
                                <div className="body">
                                    <span className="message">
                                        <span>{query.unanswered_qa_text}</span> - {query.customer_name} <em>{new Date(query.time).toGMTString()}</em></span>
                                        <a href={`tel:${query.customer_mob_no}`} className="outline-btn">Call</a>
                                </div>
                            </div>
                        )}) : <em>Either the query list is being fetched OR there aren't any queries at the moment.</em>
                }
            </div>
        </div>
    )
}

export default Queries;