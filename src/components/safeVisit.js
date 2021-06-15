import React, { useState, useEffect } from 'react';
import { TimePicker } from "@material-ui/pickers";
import './queries.css';

const SafeVisit = () => {
    const [selectedStartTime, handleStartTimeChange] = useState(new Date());
    const [selectedEndTime, handleEndTimeChange] = useState(new Date());
    const [visitors, setVisitors] = useState([]);
    const [timeSlots, setTimeSlots] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_SUP_PORT_API}/cookiepoint/safe_visit`)
        .then(response => response.json())
        .then(response => setVisitors(response.visitors));
    }, [visitors]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SUP_PORT_API}/cookiepoint/available_slots`)
        .then(response => response.json())
        .then(response => setTimeSlots(response.timings));
    }, [timeSlots]);

    const calcDuration = (event) => {
        event.preventDefault();
        let newTimeSlots = [];
        let visitorDuration = 40;
        let endHour = selectedEndTime.c.hour;
        let startHour = selectedStartTime.c.hour;
        let endMinute = selectedEndTime.c.minute;
        let startMinute = selectedStartTime.c.minute;
        let slotCount = 0

        if(endMinute >= startMinute) {
            let hours = endHour - startHour;
            let minutes = endMinute - startMinute;
            let totalMinutes = (hours * 60) + minutes;
            slotCount = Math.floor(totalMinutes/visitorDuration)
        } else {
            let hours = endHour - startHour - 1;
            endMinute += 60;
            let minutes = endMinute - startMinute;
            let totalMinutes = (hours * 60) + minutes;
            slotCount = Math.floor(totalMinutes/visitorDuration)
        }
        for(;slotCount > 0; --slotCount) {
            let string = "";
            string += startHour+":";
            string += startMinute+" - ";
            if((visitorDuration + startMinute) >= 60) {
                let diff = Math.abs(40 - startMinute);
                startHour += 1;
                startMinute = diff;
            } else {
                startMinute += visitorDuration
            }
            string += startHour+":";
            string += startMinute;
            newTimeSlots.push({time:string});
        }
        fetch(`${process.env.REACT_APP_SUP_PORT_API}/cookiepoint/available_slots`, {
            method: 'post',
            mode: 'cors',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(newTimeSlots)
        });
    }
    return(
        <div className="queries no-scroll">
            <span className="title">Safe COVID Visit</span>
            <span className="subtitle">Please set the operational time in order to allocate visitor's time.</span>
            <div className="queries-list">
            <form className="product-form" onSubmit={calcDuration}>
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
            <button className="submit-btn" type="submit">Set Operation Time</button>
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
                            <td>{visitor.customer_name}</td>
                            <td>{visitor.time}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default SafeVisit;