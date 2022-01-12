import {useState} from 'react';

import './App.css';

import EnterMoney from './components/enterMoney/enterMoney';
import Product from './components/product/product';

function App() {

    const [money, setMoney] = useState(0);

    return (
        <div className="app__container">
            <div className="app__container__row__1">
                <EnterMoney setMoney={setMoney} money={money}/>
            </div>
            <div className="app__container__row__2">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
  );
}

export default App;
