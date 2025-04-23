import './CreateProduct.css'
const CreateProduct = () => {
    return (
        
        <div id="createCard">
            <h3>Create New Product</h3>
            <div class = "input">
                <input placeholder = "Name"></input>
            </div>
            <div class = "input">
                <input placeholder = "Image"></input>
            </div>
            <div class = "input">
                <input placeholder = "Description"></input>
            </div>
            <div class = "input">
                <input placeholder = "Price"></input>
            </div>
            <div class = "enter">
                <button>Enter</button>
            </div>
            
            
        </div>

        
    )
}

export default CreateProduct;