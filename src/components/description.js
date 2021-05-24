import { useHistory } from "react-router-dom";
import './description.css';

const Description = () => {
    const history = useHistory();
    return(
        <div className="description">
            <span className="title">Product Description</span>
            <span className="subtitle">Paste your product or service description here to let us answer your queries.</span>
            <form className="description-form">
                <div className="input-box">
                    <label htmlFor="name">Product Description</label>
                    <textarea
                    className="description"
                    aria-label="Enter the Product Description:" 
                    type="text" 
                    name="name"
                    onChange={(e) => console.log("Description: "+e.target.value)}
                    />
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