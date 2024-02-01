import "./Product.css";
import { useState } from "react";
const Product = ({ products,data }) => {
 const [timesClicked,setTimesClicked]=useState(+0);
    const clickHandler=(id)=>{
         setTimesClicked(timesClicked+1);
         data({id:id,count:timesClicked+1});
    }
    console.log(timesClicked);
  return (
    <main className="main">
    <img src={products.image} alt="modal of a clothe"></img>
      <p className="title">{products.title}</p>
      <p className="price">{products.price}</p>
      <p className="description">{products.description}</p>
      <button onClick={()=>clickHandler(products.id)}>Add To Cart</button>
    </main>
  );
};
export default Product;
