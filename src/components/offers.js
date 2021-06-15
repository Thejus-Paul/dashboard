import { useEffect, useState } from 'react';
import './offers.css';

const Offers = () => {
    const [offers, setOffers] = useState([]);
    const [itemName, setItemName] = useState("");
    const [offerName, setOfferName] = useState("");
    const [description, setDescription] = useState("");
    const [code, setCode] = useState("");

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SUP_PORT_API}/cookiepoint/offers`)
        .then(response => response.json())
        .then(response => setOffers(response.offers));
    }, [offers]);
    
    const handleResponse = (event) => {
        event.preventDefault();
        let newOffer = {
            "itemName": itemName,
            "offerName": offerName,
            "description": description,
            "code": code
        }
        offers.push(newOffer);
        fetch(`${process.env.REACT_APP_SUP_PORT_API}/cookiepoint/offers`, {
            method: 'post',
            mode: 'cors',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(offers)
        }).then(setOffers(offers));
    }

    const deleteItem = (index) => {
        offers.splice(index, 1);
        fetch(`${process.env.REACT_APP_SUP_PORT_API}/cookiepoint/offers`, {
            method: 'post',
            mode: 'cors',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(offers)
        }).then(setOffers(offers));
    }

    return(
        <div className="catalog no-scroll">
            <span className="title">Product Offers</span>
            <span className="subtitle">All the offers for your customers can be added here.</span>
            <form className="product-form" onSubmit={handleResponse}>
                <div className="input-box">
                    <label htmlFor="itemName">Item Name</label>
                    <input 
                    aria-label="Enter the Item Name:" 
                    type="text" 
                    name="itemName"
                    onChange={(e) => setItemName(e.target.value)}
                    />
                </div>
                <div className="input-box">
                    <label htmlFor="offerName">Offer Name</label>
                    <input 
                    aria-label="Enter the Product Price:" 
                    type="text" 
                    name="offerName"
                    onChange={(e) => setOfferName(e.target.value)}
                    />
                </div>
                <div className="input-box">
                    <label htmlFor="description">Offer Description</label>
                    <input 
                    aria-label="Enter the Offer Description:" 
                    type="text" 
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="input-box">
                    <label htmlFor="code">Offer Code</label>
                    <input 
                    aria-label="Enter the Offer Code:" 
                    type="text" 
                    name="code"
                    onChange={(e) => setCode(e.target.value)}
                    />
                </div>
                <button className="submit-btn" type="submit">Add Offer</button>
            </form>
            <div className="queries-list">            
                { offers.length > 0 ? offers.map((offer,index) => {
                        return(
                            <div className="query" key={index}>
                                <div className="body">
                                    <span className="message"><strong>{offer.offerName}</strong> offer on <strong>{offer.itemName}</strong></span>
                                    <span className="offer-description">{offer.description}</span>
                                    <span>Code:<strong>{offer.code}</strong></span>
                                    <div className="actions">
                                        <button style={{backgroundColor: 'transparent'}} onClick={() => deleteItem(index)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#e63d3e" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>								
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    ) : <em>Either the offers are being fetched OR there aren't any offers.</em>
                }
            </div>
        </div>
    )
}

export default Offers;