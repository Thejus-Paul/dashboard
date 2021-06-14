import { useEffect, useState } from 'react';
import './catalog.css';

const Catalog = () => {
    const [URL, setURL] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SUP_PORT_API}/cookiepoint/catalog`)
        .then(response => response.json())
        .then(response => setItems(response.items));
    }, [items]);
    
    const handleResponse = (event) => {
        event.preventDefault();
        let newItem = {
            "name": name,
            "price": price,
            "quantity": quantity
        }
        items.push(newItem);
        fetch(`${process.env.REACT_APP_SUP_PORT_API}/cookiepoint/catalog`, {
            method: 'post',
            mode: 'cors',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(items)
        }).then(setItems(items));
    }

    const deleteItem = (index) => {
        items.splice(index, 1);
        fetch(`${process.env.REACT_APP_SUP_PORT_API}/cookiepoint/catalog`, {
            method: 'post',
            mode: 'cors',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(items)
        }).then(setItems(items));
    }

    return(
        <div className="catalog">
            <span className="title">Product Catalog</span>
            <span className="subtitle">Create your product catalog here.</span>
            <form className="product-form" onSubmit={handleResponse}>
                <div className="input-box">
                    <label htmlFor="url">Product Image URL</label>
                    <input 
                    aria-label="Enter the Product Image URL:" 
                    type="text" 
                    name="url"
                    onChange={(e) => setURL(e.target.value)}
                    />
                </div>
                <div className="input-box">
                    <label htmlFor="name">Product Name</label>
                    <input 
                    aria-label="Enter the Product Name:" 
                    type="text" 
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="input-box">
                    <label htmlFor="price">Price</label>
                    <input 
                    aria-label="Enter the Product Price:" 
                    type="number" 
                    name="price"
                    step="any"
                    onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="input-box">
                    <label htmlFor="quantity">Quantity</label>
                    <input 
                    aria-label="Enter the Quantity:" 
                    type="number" 
                    name="quantity"
                    step="1"
                    onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>
                <button className="submit-btn" type="submit">Add Product</button>
            </form>
            <div className="queries-list">            
                { items.length > 0 ? items.map((item,index) => {
                        return(
                            <div className="query" key={index}>
                                <div className="body">
                                    <span className="message"><strong>{`${item.name} - Rs.${item.price}`}</strong>&nbsp;&nbsp;&nbsp;{`Qty: ${item.quantity}`}</span>
                                    <div className="actions">
                                        <button style={{backgroundColor: 'transparent'}} onClick={() => deleteItem(index)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#e63d3e" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>								
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    ) : <em>Either the items are being fetched OR there isn't any item on the list.</em>
                }
            </div>
        </div>
    )
}

export default Catalog;