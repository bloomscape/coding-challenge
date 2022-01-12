import './product.css'

const Product = () => {
    return ( 
        <div className="product__container">
            <div className="row__info">
                <div className="row__info__title">
                    <h1>Product Title</h1>
                </div>
                <div className="row__info__price">
                    <h2>$0.00</h2>
                </div>
            </div>
            <div className="product__container__actions">
                <button className="actions__button">Buy</button>
            </div>
        </div>
    );
}
 
export default Product;