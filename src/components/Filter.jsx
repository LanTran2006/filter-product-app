import { useContext } from "react";
import { Context } from "../context/filterContext";
import Category from "./category";

const Keywords = ["Apple", "Watch", "Fashion", "Trend", "Shoes", "Shirt"];
const categories = ["Beauty", "Fragrances", "Furniture", "Groceries"];

function Filter() {
  const { setKeyword, keyword ,setPrice,price,setSearch,setCategory,setPage} = useContext(Context);
 let  handle_keyword=(item)=>{
      setKeyword(item);
      setPage(1);
      setCategory(null);
  }
  return (
    <aside className="filters">
      <h1>react store</h1>
      <input onChange={e=>setSearch(e.target.value)} type="text" placeholder="Search Product" className="search-box" />
      <div className="price-range">
        <input onChange={e=>setPrice({...price,min: parseInt( e.target.value)})} type="number" placeholder="Min" />
        <input onChange={e=>setPrice({...price,max: parseInt( e.target.value)})} type="number" placeholder="Max" />
      </div>
      <div className="categories">
        <h3>Categories</h3>
        <Category categories={categories}/>
      </div>
      <div className="keywords">
        <h3>Keywords</h3>
        {Keywords.map((item) => (
          <button
            className={item == keyword ? "active" : ""}
            onClick={() => handle_keyword(item)}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
      <button className="reset-button">Reset Filters</button>
    </aside>
  );
}

export default Filter;
