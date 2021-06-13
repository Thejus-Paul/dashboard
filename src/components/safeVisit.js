import React, { useState, useEffect } from 'react';
import { TimePicker } from "@material-ui/pickers";
import './queries.css';

const SafeVisit = () => {
    const [selectedStartTime, handleStartTimeChange] = useState(new Date());
    const [selectedEndTime, handleEndTimeChange] = useState(new Date());
    const [visitors, setVisitors] = useState([]);
    const [visitorDuration, setVisitorDuration] = useState(0);
    const visitorCount = visitors.length;
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_SUP_PORT_API}/cookiepoint/safe_visit`)
        .then(response => response.json())
        .then(response => setVisitors(response.visitors));
    }, [visitors]);

    useEffect(() => {
        setVisitorDuration(calcDuration())
    }, [selectedStartTime,selectedEndTime]);

    const calcDuration = () => {
        try {
            let minVisitorDuration = 30;
            let endHour = selectedEndTime.c.hour;
            let startHour = selectedStartTime.c.hour;
            let endMinute = selectedEndTime.c.minute;
            let startMinute = selectedStartTime.c.minute;

            if(endMinute >= startMinute) {
                let hours = endHour - startHour;
                let minutes = endMinute - startMinute;
                let totalMinutes = (hours * 60) + minutes;
                let calc = Math.round(totalMinutes/visitorCount);
                if(calc < minVisitorDuration) {
                    return calc;
                }
                return minVisitorDuration;
            } else {
                let hours = endHour - startHour - 1;
                endMinute += 60;
                let minutes = endMinute - startMinute;
                let totalMinutes = (hours * 60) + minutes;
                let calc = Math.round(totalMinutes/visitorCount);
                if(calc < minVisitorDuration) {
                    return calc;
                }
                return minVisitorDuration;
            }
        } catch (error) {
            console.log(error)
        }
    }
    calcDuration()
    return(
        <div className="queries">
            <span className="title">Safe COVID Visit</span>
            <span className="subtitle">Please set the operational time in order to allocate visitor's time.</span>
            <div className="queries-list">
            <form className="product-form">
            <TimePicker
                clearable
                ampm={false}
                label="Start Time"
                value={selectedStartTime}
                onChange={handleStartTimeChange}
            /> &nbsp;&nbsp;&nbsp;&nbsp;
            <TimePicker
                clearable
                ampm={false}
                label="End Time"
                value={selectedEndTime}
                onChange={handleEndTimeChange}
            />&nbsp;&nbsp;&nbsp;
            </form><br />
            </div>
            <table className="order-items" style={{width:"100%"}}>
                <thead>
                    <tr key={999999}>
                        <th>Visitors</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                {
                    visitors.map((visitor,index) => 
                        <tr key={index}>
                            <td>{visitor.name}</td>
                            <td>{`${visitorDuration} mins`}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default SafeVisit;