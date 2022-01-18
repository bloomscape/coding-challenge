import { useState } from "react";
import { v4 as uuid4} from 'uuid';

import './addProduct.css';

const AddProduct = ({setRefreshProducts}) => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleAddProduct = () => {
        fetch(process.env.REACT_APP_API_URL, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                uuid: uuid4(),
                name: name,
                price: price
            }),
            crossDomain: true
        })
            .then(res => res.json())
            .then(data => setRefreshProducts(true))
    }

    return ( 
        <div className="add__product__container">
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
            <button onClick={handleAddProduct}>Add</button>
        </div>
     );
}
 
export default AddProduct;