import './table.css';

import { useState } from 'react';

import { FaTrashAlt, FaSave } from 'react-icons/fa';

const Table = ({ products, setRefreshProducts }) => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleDelete = (product_id) => {
        fetch(process.env.REACT_APP_API_URL + '/' + product_id, {method:"DELETE", headers: { "Content-Type": "application/json" }, crossDomain: true})
            .then(res => res.json())
            .then(data => setRefreshProducts(true))
    }

    const handleUpdate = (product_id) => {
        fetch(process.env.REACT_APP_API_URL, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                uuid: product_id,
                name: name,
                price: parseFloat(price)
            }),
            crossDomain: true
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return ( 
        <>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
                {products.map(product => (
                    <tr key={product.uuid}>
                        <td>{product.uuid}</td>
                        <td><input type="text" defaultValue={product.name} onChange={(e) => setName(e.target.value)}/></td>
                        <td><input type="number" defaultValue={product.price} onChange={(e) => setPrice(e.target.value)} /></td>
                        <td><button onClick={() => handleUpdate(product.uuid)}><FaSave /></button> <button onClick={() => handleDelete(product.uuid)}><FaTrashAlt /></button></td>
                    </tr>
                ))}
            </table>
        </>
     );
}
 
export default Table;