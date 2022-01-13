import './admin.css';

import ProductList from "../components/product/productList";
import NavBar from "../components/navbar/navbar";

const Admin = () => {
    return ( 
        <div className="admin__container">
            <NavBar />
            <ProductList />
        </div>
     );
}
 
export default Admin;