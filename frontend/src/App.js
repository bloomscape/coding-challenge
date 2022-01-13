import {useState, useEffect} from 'react';

import './App.css';

import EnterMoney from './components/enterMoney/enterMoney';
import Product from './components/product/product';

function App() {

    const [money, setMoney] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/v1/products', {method:'GET', headers: { "Content-Type": "application/json" }, crossDomain: true})
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json()
            })
            .then(result => {
                setProducts(result)
            })
            .catch(error => {
                console.log(error.message)
            })
    }, [])

    return (
        <div className="app__container">
            <div className="app__container__row__1">
                <EnterMoney setMoney={setMoney} money={money}/>
            </div>
            <div className="app__container__row__2">
                {products.map(product => {
                    return <Product key={product.uuid} setMoney={setMoney} product={product} disabled={money === 0 ? '--disabled' : ''}/>
                })}
            </div>
        </div>
  );
}

export default App;
