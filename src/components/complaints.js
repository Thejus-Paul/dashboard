import { useState, useEffect } from 'react';
import './complaints.css';

const Complaints = () => {
    const [complaints, setComplaints] = useState([{
            source: "Telegram",
            customerName: "Thejus Paul",
            subject: "Title",
            complaint: "The cookies tasted good but, I had ordered 5 cookies and only 3 cookies were delivered.",
            username: "fyproj"
        },{
            source: "Telegram",
            customerName: "Clinton",
            subject: "Title",
            complaint: "The cookies tasted good but, I had ordered 5 cookies and only 3 cookies were delivered.",
            phone: 9633009041
        }
    ]);

    return(
        <div className="complaints">
            <span className="title">Customer Complaints</span>
            <span className="subtitle">Your customers expression of dissatisfaction can be found here</span>
            <div className="buttons">
                <button className="outline-btn">WhatsApp</button>
                <button className="outline-btn">Telegram</button>
                <button className="outline-btn">Website</button>
            </div>

            <div className="complaints-list">            
                { complaints.map((complaint,index) => {
                        return(
                            <div className="complaint" key={index}>
                                <div className="header">
                                    <span className="heading">{complaint.subject + ' - ' + complaint.customerName}</span>
                                </div>
                                <div className="body">
                                    <span className="message">{complaint.complaint}</span>
                                    <div className="actions">
                                        <a href={`tel:${complaint.phone}`} className="outline-btn">Call</a>
                                        <a href={`https://wa.me/${complaint.phone}`} className="outline-btn">Reply</a>
                                    </div>
                                </div>
                            </div>
                        )})
                }
            </div>
        </div>
    )
}

export default Complaints;