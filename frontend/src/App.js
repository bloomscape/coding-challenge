import './App.css';

import EnterMoney from './components/enterMoney/enterMoney';
import Product from './components/product/product';

function App() {
  return (
    <div className="app__container">
        <div className="app__container__row__1">
            <EnterMoney />
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
