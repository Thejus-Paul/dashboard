import React, { useState, useEffect } from 'react';
import { DateTimePicker } from "@material-ui/pickers";
import './queries.css';

const Negotiation = () => {
    const [selectedDate, handleDateChange] = useState(new Date().getTime());
    const [availableTimings, setAvailableTimings] = useState([]);
    const [bookedTimings, setBookedTimings] = useState([
        {
            "customer_name":"Vishnu Pradeep",
            "customer_mob_no": 9633009041,
            "time": 1624095600000
        }
    ]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SUP_PORT_API}/cookiepoint/available`)
        .then(response => response.json())
        .then(response => setAvailableTimings(response.timings));
    }, [availableTimings]);
/* 
    useEffect(() => {
        fetch(`${process.env.REACT_APP_SUP_PORT_API}/cookiepoint/available`)
        .then(response => response.json())
        .then(response => setAvailableTimings(response.timings));
    }, [availableTimings]); */

    const handleResponse = (event) => {
        event.preventDefault();
        availableTimings.push(typeof(selectedDate) === "number" ? {time: selectedDate} : {time: selectedDate.ts});
        fetch(`${process.env.REACT_APP_SUP_PORT_API}/cookiepoint/available`, {
            method: 'post',
            mode: 'cors',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(availableTimings)
        }).then(setAvailableTimings(availableTimings));
    }
    
    return(
        <div className="queries">
            <span className="title">Customer Negotiations</span>
            <span className="subtitle">Your upcoming customer negotiations can be found here.</span>
            <div className="queries-list">
            <form className="product-form" onSubmit={handleResponse}>
                <DateTimePicker
                    value={selectedDate}
                    disablePast
                    onChange={handleDateChange}
                    label="Available Date"
                    showTodayButton
                />
                <button className="submit-btn" type="submit">Add as Available</button>
            </form> <br />
            <span className="subtitle">Available Timings</span>
                { availableTimings.length > 0 ? availableTimings.map((data,index) => {
                        return(
                            <div className="query" key={index}>
                                <div className="body">
                                    <span className="message">
                                        <span>{new Date(data.time).toString()}</span>
                                    </span>
                                </div>
                            </div>
                        )}) : <p>Either the available timings are being fetched OR there aren't any.</p>
                }
                <hr />
                <span className="subtitle">Upcoming Schedule</span>
                { bookedTimings.length > 0 ? bookedTimings.map((data,index) => {
                        return(
                            <div className="query" key={index}>
                                <div className="body">
                                    <span className="message">
                                        <span>
                                            A meeting has been scheduled with <strong>{data.customer_name}</strong> at </span>
                                            {`${new Date(data.time).toDateString()} ${new Date(data.time).getHours()}:${new Date(data.time).getMinutes()}`} &nbsp;
                                    </span>
                                    <div className="actions">
                                        <a href={`tel:${data.customer_mob_no}`} style={{backgroundColor: 'transparent'}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2980b9" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>								
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}) : <em>Either the upcoming negotiations are being fetched OR there aren't any.</em>
                }
            </div>
        </div>
    )
}

export default Negotiation;