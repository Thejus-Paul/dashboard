import { useState } from 'react';
import './complaints.css';

const Complaints = () => {
    const [complaints, setComplaints] = useState([{
            name: "Thejus Paul",
            place: "Maradu",
            message: "The cookies tasted good but, I had ordered 5 cookies and only 3 cookies were delivered.",
            phone: 9633009041,
            api: 'IdWchAkl3C'
        },{
            name: "Antony Clinton",
            place: "Fort Kochi",
            message: "The cookies you delivered tasted very bad.",
            phone: 9633009041,
            api: 'IdWchAkl3C'
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
                                    <span className="heading">{complaint.name + ', ' + complaint.place}</span>
                                </div>
                                <div className="body">
                                    <span className="message">{complaint.message}</span>
                                    <div className="actions">
                                        <button className="outline-btn">Call</button>
                                        <button className="outline-btn">Reply</button>
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