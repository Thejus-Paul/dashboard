import { useState, useEffect } from 'react';
import './catalog.css';
import './order.css';

const Orders = () => {
    const purchasable_items = ['Capsicum','Green Peace','Heinz Tomato Ketchup','India Gate Basmati Rice Pouch','Kabuli Chana','Maggie Instant Noodles'];
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://sponge-imminent-text.glitch.me/cookiepoint/orders')
        .then(response => response.json())
        .then(response => setOrders(response.orders));
    }, [orders]);

    return(
        <div className="orders">
            <span className="title">Orders</span>
            <span className="subtitle">All the live orders can be found here.</span>

            <div className="orders-list">            
                { orders.length > 0 ? orders.map((order,index) => {
                        return(
                            <div className="order" key={index}>
                                <div className="basic">
                                    <span><strong>Name:</strong> {order['Tell us your Name ']}</span>
                                    <span><strong>Address:</strong> {order['Tell us your expected delivery address']}</span>
                                    <span><strong>Contact Number:</strong> {order['Phone Number']}</span>
                                    <span><strong>Expected Delivery Time:</strong> {order['Expected Delivery time']}</span>
                                </div>
                                <table className="order-items">
                                    <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        purchasable_items.map((item,index) => {
                                            if(order[item] !== '') {
                                                return(
                                                    <tr key={index}>
                                                        <td>{item}</td>
                                                        <td>{order[item]}</td>
                                                    </tr>
                                                )
                                            }
                                            return(<tr key={index}></tr>);
                                        })
                                    }
                                    </tbody>
                                </table>

                            </div>
                        )}) : <em>Either the order list is being fetched OR there aren't any live orders.</em>
                    } 
            </div>
        </div>
    )
}

export default Orders;