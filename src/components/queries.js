import { useState, useEffect } from 'react';
import './queries.css';

const Queries = () => {
    const [queries, setQueries] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_SUP_PORT_API}/cookiepoint/queries`)
        .then(response => response.json())
        .then(response => setQueries((response.queries).reverse()));
    }, [queries]);

    const deleteItem = (index) => {
        queries.splice(index, 1);
        fetch(`${process.env.REACT_APP_SUP_PORT_API}/cookiepoint/queries`, {
            method: 'post',
            mode: 'cors',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(queries.reverse())
        }).then(setQueries(queries));
    }

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
                                        <span>{query.unanswered_qa_text}</span> - {query.customer_name} <em>{new Date(query.time).toString()}</em></span>
                                        <div className="actions">
                                        <a href={`tel:${query.customer_mob_no}`} style={{backgroundColor: 'transparent'}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2980b9" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>								
                                        </a>
                                        <button style={{backgroundColor: 'transparent'}} onClick={() => deleteItem(index)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#e63d3e" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>								
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}) : <em>Either the query list is being fetched OR there aren't any queries at the moment.</em>
                }
            </div>
        </div>
    )
}

export default Queries;