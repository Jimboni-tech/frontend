import axios from 'axios';
import './CreateProduct.css'
import {useState} from 'react';



const CreateProduct = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const handleNameChange = (event) => {
        setName(event.target.value);   
    }
    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    }
    const handleImageChange = (event) => {
        setImage(event.target.value);
    }
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }
    const updateDB = async (event) => {
        try {
            const res = await axios.post('http://localhost:8080/create', {
                name: name,
                image: image,
                description: description,
                price: price,
                category: category,
            });
            console.log(res.data);

        } catch (err){
            console.log("error:", err);
        }
            

    }   

    return (
        
        <div id="createCard">
            <h3>Create New Product</h3>
            <div class = "input">
                <input placeholder = "Name" value = {name} onChange = {handleNameChange}></input>
            </div>
            <div class = "input">
                <input placeholder = "Image" value = {image} onChange = {handleImageChange}></input>
            </div>
            <div class = "input">
                <input placeholder = "Description" value = {description} onChange = {handleDescriptionChange}></input>
            </div>
            <div class = "input">
                <input placeholder = "Price" value = {price} onChange = {handlePriceChange}></input>
            </div>
            <div class = "input">
                <input placeholder = "Category" value = {category} onChange = {handleCategoryChange}></input>
            </div>
            <div class = "enter">
                <button onClick = {updateDB}>Enter</button>
            </div>
            
            
        </div>

        
    )
}

export default CreateProduct;