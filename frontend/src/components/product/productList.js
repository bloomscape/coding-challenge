import Table from '../table/table';
import AddProduct from './addProduct';

import './productList.css';

import { useState, useEffect } from 'react';

const ProductList = () => {

    const [products, setProducts] = useState([]);

    const [refreshProducts, setRefreshProducts] = useState(false);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL, {method:'GET', headers: { "Content-Type": "application/json" }, crossDomain: true})
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json()
            })
            .then(result => {
                setProducts(result)
                setRefreshProducts(false)
            })
            .catch(error => {
                console.log(error.message)
            })
    }, [refreshProducts])

    return (  
        <div className="product__list__container">
            <AddProduct setRefreshProducts={setRefreshProducts} />
            <Table products={products} setRefreshProducts={setRefreshProducts}/>
        </div>
    );
}
 
export default ProductList;