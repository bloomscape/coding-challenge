import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import './App.css';

import EnterMoney from './components/enterMoney/enterMoney';
import Product from './components/product/product';

function App() {

    const [money, setMoney] = useState(0);
    const [products, setProducts] = useState([]);

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
            })
            .catch(error => {
                console.log(error.message)
            })
    }, [])

    return (
        <div className="app__container">
            <div className="app__container__row__1">
                <EnterMoney setMoney={setMoney} money={money}/>
                <Link className="row__1__link" to="/admin">Admin</Link>
            </div>
            <div className="app__container__row__2">
                {products.map(product => {
                    return <Product key={product.uuid} setMoney={setMoney} product={product} disabled={money === 0 ? '--disabled' : ''} money={money}/>
                })}
            </div>
        </div>
  );
}

export default App;
