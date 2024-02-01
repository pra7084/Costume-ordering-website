import Product from "./Product";
import "./Shop.css";
import { DUMMY_PRODUCTS } from "../dummy-products";
const Shop = ({toGetData}) => {
  return (
    <div className="shop_main">
      <h1>Elegent Clothing for everyone</h1>
      <div className="product">
        {DUMMY_PRODUCTS.map((product) => {
          return <Product products={product} data={toGetData}/>;
        })}
      </div>
    </div>
  );
};
export default Shop;
