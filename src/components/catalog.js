import './catalog.css';

const Catalog = () => {
    return(
        <div className="catalog">
            <span className="title">Product Catalog</span>
            <span className="subtitle">Create your product catalog here.</span>
            <form className="product-form">
                <div className="input-box">
                    <label htmlFor="name">Product Name</label>
                    <input 
                    aria-label="Enter the Product Name:" 
                    type="text" 
                    name="name"
                    onChange={(e) => console.log("Name: "+e.target.value)}
                    />
                </div>
                <div className="input-box">
                    <label htmlFor="price">Price</label>
                    <input 
                    aria-label="Enter the Product Price:" 
                    type="number" 
                    name="price"
                    step="any"
                    onChange={(e) => console.log("Price: " + e.target.value)}
                    />
                </div>
                <button className="submit-btn" type="submit">Add Product</button>
            </form>
        </div>
    )
}

export default Catalog;