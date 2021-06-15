import { useState, useEffect } from 'react';
import './queries.css';

const ReturnOrders = () => {
    const [returns, setReturns] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_SUP_PORT_API}/cookiepoint/returns`)
        .then(response => response.json())
        .then(response => setReturns((response.orders).reverse()));
    }, [returns]);

    const proceedRequest = (index) => {
        let updatedReturns = returns[index];
        returns.splice(index,1);
        updatedReturns["status"] = "Approved";
        returns.push(updatedReturns)
        fetch(`${process.env.REACT_APP_SUP_PORT_API}/cookiepoint/returns`, {
            method: 'post',
            mode: 'cors',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(returns.reverse())
        }).then(setReturns(returns));
    }

    const discardRequest = (index) => {
        let updatedReturns = returns[index];
        returns.splice(index,1);
        updatedReturns["status"] = "Discarded";
        returns.push(updatedReturns)
        fetch(`${process.env.REACT_APP_SUP_PORT_API}/cookiepoint/returns`, {
            method: 'post',
            mode: 'cors',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(returns.reverse())
        }).then(setReturns(returns));
    }

    return(
        <div className="queries">
            <span className="title">Return Orders</span>
            <span className="subtitle">All the return requests for your products can be found here.</span>
            <div className="queries-list">            
                { returns.length > 0 ? returns.map((return_order,index) => {
                        return(
                            <div className="query" key={index}>
                                <div className="body">
                                    <span className="message">
                                        <span>#{return_order.order_id}</span> - {return_order.return_reason} <em>{return_order.customer_name}</em></span>
                                        <div className="actions">
                                        {
                                            return_order.status === "Approved" || return_order.status === "Discarded" ? 
                                            (return_order.status === "Approved" ? 
                                            <>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#2ecc71" width="24" height="24" viewBox="0 0 18 18"><path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4z"/></svg>
                                                <font color="#2ecc71">{return_order.status}</font>
                                            </> : <>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#e74c3c" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                                                <font color="e74c3c">{return_order.status}</font>
                                            </>) :
                                            <>
                                                <a href={`tel:${return_order.customer_mob_no}`} style={{backgroundColor: 'transparent'}}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2980b9" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>								
                                                </a>
                                                <button style={{backgroundColor: 'transparent'}} onClick={() => proceedRequest(index)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#2ecc71" width="24" height="24" viewBox="0 0 18 18"><path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4z"/></svg>								
                                                </button>
                                                <button style={{backgroundColor: 'transparent'}} onClick={() => discardRequest(index)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#e74c3c" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                                                </button>
                                            </>
                                        }
                                        </div>
                                </div>
                            </div>
                        )}) : <em>Either the return orders list is being fetched OR there aren't any return requests at the moment.</em>
                }
            </div>
        </div>
    )
}

export default ReturnOrders;