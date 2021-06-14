import './login.css';
import './form.css';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';

export default function Form() {
    const history = useHistory();
    const [questions, setQuestions] = useState([]);
    const [isOrderPlaced, setOrderPlaced] = useState(false);
    const [liveOrders, setLiveOrders] = useState([]);
    const [newOrder, setNewOrder] = useState([]);
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SUP_PORT_API}/cookiepoint/questions`)
        .then(response => response.json())
        .then(response => setQuestions(response.questions));

        fetch(`${process.env.REACT_APP_SUP_PORT_API}/cookiepoint/live_orders`)
        .then(response => response.json())
        .then(response => setLiveOrders(response.orders));
    }, [])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SUP_PORT_API}/cookiepoint/catalog`)
        .then(response => response.json())
        .then(response => setItems(response.items));
    }, [items]);

    const handleResponse = (e) => {
        e.preventDefault();
        if(isOrderPlaced) {
            let newOrderList = [...liveOrders];
            newOrderList.push(newOrder);
            fetch(`${process.env.REACT_APP_SUP_PORT_API}/cookiepoint/live_orders`, {
                method: 'post',
                mode: 'cors',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(newOrderList)
            }).then(console.log("Done!"));
        } else {
            let newOrder = {}
            for(let item = 0; item < (e.target.length - 1); ++item) {
                newOrder[e.target[item].name] = isNaN(e.target[item].value) ? e.target[item].value : Number(e.target[item].value);
            }
            let total = 0;
            for(let item of items) {
                total += (newOrder[item.name]) * item.price;
            }
            newOrder["order_no"] = liveOrders.length + 1;
            newOrder["order_status"] = "Open";
            console.log(newOrder);
            setTotal(total);
            setNewOrder(newOrder);
            setOrderPlaced(true);
        }
        //history.push('/home')
    }
    return(
        <div className="login padding-top-2 scroll">
            <div className="input-card">
                <div className="form forms">
                    <span className="title">Order Form</span><br/>
                    <form onSubmit={handleResponse}>
                        {
                            isOrderPlaced ?  
                                    <div>
                                        <br/>
                                        <h3>Order Summary</h3><br/>
                                        <span><strong>Name:</strong> {newOrder.name}</span><br/>
                                        <span><strong>Address:</strong> {newOrder.address}</span><br/>
                                        <span><strong>Items</strong></span><br/>
                                        {
                                            items.map((item,index) => {
                                                return(
                                                newOrder[item.name] !== 0 ? 
                                                <span key={index} className="order-summary">
                                                    <span>{item.name}  x {newOrder[item.name]}</span>
                                                    <span>Rs.{newOrder[item.name] * item.price}</span>
                                                </span> : ''
                                                )
                                                })
                                        }
                                        <span style={{display:"flex",justifyContent:"flex-end"}}><strong>Total:{total}</strong></span>
                                    </div>
                                        :
                            questions.map((question,index) => {
                                return(
                                    <div className="input-box" key={index}>
                                        <label htmlFor={question.question}>{`Enter your ${question.question}:`}</label>
                                        <input 
                                        aria-label={`Enter your ${question.question}:`}
                                        type={question.type}
                                        name={question.question}
                                        />
                                    </div>
                                )
                            })
                        }
                        {
                            !isOrderPlaced ? items.map((item,index) => {
                                return(
                                    <div className="input-box" key={index}>
                                        <label htmlFor={item.name}>
                                            <img 
                                            src={item.URL} 
                                            width="200px"
                                            alt={item.name}
                                            /><br/>{`Price: Rs.${item.price}`}&nbsp;&nbsp;&nbsp;&nbsp;{`Quantity Left: ${item.quantity}`}<br/><br/>
                                            {`Enter the quantity of ${item.name}:`}
                                        </label>
                                        <input 
                                        aria-label={`Enter the quantity of ${item.name}:`}
                                        type="number"
                                        name={item.name}
                                        min="0"
                                        max={item.quantity}
                                        />
                                    </div>
                                )
                            }): ''
                        }
                        <br/>
                        <button className="login-btn margin-bottom-2" type="submit">Place Order</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
