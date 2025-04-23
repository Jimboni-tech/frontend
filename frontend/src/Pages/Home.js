import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';


const Home = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const res = await axios.get("http://localhost:8080/home");
                console.log('API Response:', res.data);
                setProducts(res.data);

            } catch (err) {

            }
        }
        fetchProducts();
    }, []);


    return (
        <div>
            <div id = "featured-product">
                <img>
                </img>
                <div id = "featured-product-details">
                    <h1 className = "featured-name"></h1>
                    <p className = "featured-price"></p>
                    <p className = "featured-description"></p>
                </div>
            </div>
             <div className="products-container">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="product-image"
                        />
                        <div className="product-details">
                            <h3 className="product-name">{product.name}<span className = "product-category">{product.category}</span></h3>
                            <p className="product-description"><i>{product.description}</i></p>
                            <p className="product-price">${product.price}</p>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;

