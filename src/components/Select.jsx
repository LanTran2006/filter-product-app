import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/filterContext";
let filters = ["Cheap", "Expensive", "Popular"];
function Select() {
  let { setSort, sort ,products,setProducts} = useContext(Context);
  let [active, setActive] = useState(false);
  let handle_select = (choice) => {
    setSort(choice);
    setActive(false);
  };
  useEffect(() => {
    let res=[...products]
    if (sort == "Cheap") {
      res = res.sort((a, b) => a.price - b.price);
    } else if (sort == "Expensive") {
      res = res.sort((a, b) => b.price - a.price);
    } else {
      res = res.sort((a, b) => b.rating - a.rating);
    }
    setProducts(res);
  }, [sort]);
  return (
    <div className="product-filter">
      <button onClick={() => setActive(!active)} className="filter-btn">
        <span>{sort}</span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
          alt="Dropdown Icon"
          width="10"
        />
      </button>
      <ul className={`filter-dropdown ${active ? "active" : ""}`}>
        {filters.map((item) => (
          <li key={item} onClick={() => handle_select(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Select;
