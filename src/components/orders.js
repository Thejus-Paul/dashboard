import { useState, useEffect } from 'react';
import './catalog.css';
import './order.css';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_SUP_PORT_API}/cookiepoint/live_orders`)
        .then(response => response.json())
        .then(response => setOrders((response.orders).reverse()));

        fetch(`${process.env.REACT_APP_SUP_PORT_API}/cookiepoint/catalog`)
        .then(response => response.json())
        .then(response => setItems(response.items));
    }, [orders]);

    const updateOrderStatus = (index,status) => {
        orders[index]['order_status'] = status
        console.log(orders[index])
        fetch(`${process.env.REACT_APP_SUP_PORT_API}/cookiepoint/live_orders`, {
            method: 'post',
            mode: 'cors',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(orders.reverse())
        })
    }
    return(
        <div className="orders no-scroll">
            <span className="title">Orders</span>
            <span className="subtitle">All the live orders can be found here.</span>

            <div className="orders-list">            
                { orders.length > 0 ? orders.map((order,index) => {
                        return(
                            <div className="order" key={index}>
                                <div className="basic">
                                    <span><strong>Order Number:</strong> #{order['order_id']}</span>
                                    <span><strong>Order Status:</strong>&nbsp;
                                    <select defaultValue={order['order_status']} className="dropdown" onChange={(e) => updateOrderStatus(index,e.target.value)}>
                                        <option name="Open">Open</option>
                                        <option name="Out for Delivery">Out for Delivery</option>
                                        <option name="Ready for pick-up">Ready for pick-up</option>
                                        <option name="Delivered">Delivered</option>
                                    </select>
                                    </span>
                                    <span><strong>Name:</strong> {order['name']}</span>
                                    <span><strong>Address:</strong> {order['address']}</span>
                                    <span><strong>Contact Number:</strong> {order['mobile number']}</span>
                                    <span><strong>Expected Delivery Time:</strong> {`${order['preferable delivery date']}  ${order['preferable delivery time']}`}</span>
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
                                        items.map((item,index) => {
                                            if(order[item] !== '') {
                                                return(
                                                    <tr key={index}>
                                                        <td>{item.name}</td>
                                                        <td>{order[item.name]}</td>
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