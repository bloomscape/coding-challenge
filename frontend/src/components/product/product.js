import './product.css'

const Product = ({setMoney, product, disabled}) => {

    const handleClick = () => {
        setMoney(money => money - product.price)
    }

    return ( 
        <div className="product__container">
            <div className="row__info">
                <div className="row__info__title">
                    <h1>{product.name}</h1>
                </div>
                <div className="row__info__price">
                    <h2>${product.price}</h2>
                </div>
            </div>
            <div className="product__container__actions">
                <button onClick={handleClick} className={`actions__button ${disabled}`}>Buy</button>
            </div>
        </div>
    );
}
 
export default Product;