import { useState, useEffect } from 'react';
import './complaints.css';

const Complaints = () => {
    const [complaints, setComplaints] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_SUP_PORT_API}/cookiepoint/complaints`)
        .then(response => response.json())
        .then(response => setComplaints((response.complaints).reverse()));
    }, [complaints]);

    const proceedRequest = (index) => {
        let updatedReturns = complaints[index];
        complaints.splice(index,1);
        updatedReturns["isClosed"] = "true";
        complaints.push(updatedReturns)
        fetch(`${process.env.REACT_APP_SUP_PORT_API}/cookiepoint/complaints`, {
            method: 'post',
            mode: 'cors',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(complaints.reverse())
        }).then(setComplaints(complaints));
    }

    return(
        <div className="complaints">
            <span className="title">Customer Complaints</span>
            <span className="subtitle">Your customers expression of dissatisfaction can be found here</span>

            <div className="complaints-list">            
                { complaints.length > 0 ? complaints.map((complaint,index) => {
                        return(
                            <div className="complaint" key={index}>
                                <div className="header">
                                    <span className="heading">{complaint.complaint_title}</span>
                                </div>
                                <div className="body">
                                    <span className="message">{complaint.complaint_text} <em>- {complaint.customer_name}</em></span>
                                    <div className="actions">
                                    {
                                            complaint.isClosed ? 
                                            <>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#2ecc71" width="24" height="24" viewBox="0 0 18 18"><path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4z"/></svg>
                                            <font color="#2ecc71">Closed</font>
                                            </> :
                                            <>
                                                <a href={`tel:${complaint.customer_mob_no}`} style={{backgroundColor: 'transparent'}}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2980b9" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>								
                                                </a>
                                                <button style={{backgroundColor: 'transparent'}} onClick={() => proceedRequest(index)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#2ecc71" width="24" height="24" viewBox="0 0 18 18"><path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4z"/></svg>								
                                                </button>
                                            </>
                                    }
                                        </div>
                                </div>
                            </div>
                        )}) : <em>Either the complaint list is being fetched OR there aren't any open complaints.</em>
                    } 
            </div>
        </div>
    )
}

export default Complaints;