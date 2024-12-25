import React, { useContext } from "react";
import Select from "./Select";
import { Context } from "../context/filterContext";
import Pagination from "./pagination";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

function Main() {
  let { products, price, search } = useContext(Context);
  let navigate=useNavigate()
  let filtered_products = [...products];
  if (search) {
    console.log(search);
    filtered_products = filtered_products.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (price.min) {
    filtered_products = filtered_products.filter((item) =>item.price>=price.min)
  }
  if (price.max) {
    filtered_products = filtered_products.filter((item) =>item.price<=price.max)
  }
  let handle_navigate=(id)=>{
     navigate('/product/'+id)
  }
  return (
    <div className="wrapper">
      <Select />
      {!products.length ? <Loader/> : null}

      <main className="products">
        {filtered_products.length ? filtered_products.map((item) => (
          <div onClick={()=>handle_navigate(item.id)} className="product-card">
            <img src={item.thumbnail} />
            <h4>{item.title}</h4>
            <p>${item.price}</p>
          </div>
        )) : null}
      </main>
      <Pagination />
    </div>
  );
}

export default Main;
