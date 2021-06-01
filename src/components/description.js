import { useEffect, useState } from 'react';
import './description.css';

const Description = () => {
    const [abstract, setAbstract] = useState("");
    
    const handleResponse = (event) => {
        event.preventDefault();
        fetch("https://sponge-imminent-text.glitch.me/cookiepoint/description", {
            method: 'post',
            mode: 'cors',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({data: abstract})
        }).then(console.log("Updated!"));
    }

    useEffect(() => {
        fetch('https://sponge-imminent-text.glitch.me/cookiepoint/description')
        .then(response => response.json())
        .then(response => document.getElementsByClassName('description-box')[0].value = response.abstract);
    }, []);


    return(
        <div className="description">
            <span className="title">Product Description</span>
            <span className="subtitle">Paste your product or service description here to let us answer your queries.</span>
            <form className="description-form" onSubmit={handleResponse}>
                <div className="input-box">
                    <label htmlFor="name">Product Description</label>
                    <textarea
                    className="description-box"
                    aria-label="Enter the Product Description:" 
                    type="text" 
                    name="name"
                    defaultValue="Loading..."
                    onChange={(e) => setAbstract(e.target.value)}
                    >
                    </textarea>
                </div>
                <div className="buttons">
                    <button className="submit-btn" type="submit">Submit</button>
                    <button className="clear-btn" type="reset">Clear</button>
                </div>
            </form>
        </div>
    )
}

export default Description;