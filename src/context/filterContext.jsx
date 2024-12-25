import React, { createContext, useEffect, useState } from "react";
import { instance as axios } from "../utils/axiosInstance";
import { data } from "react-router-dom";
export const Context = createContext();

function FilterContext({ children }) {
  let [products, setProducts] = useState([]);
  let [totalPage,setTotalpage]=useState(0);
  let [page,setPage]=useState(1)
  let [keyword, setKeyword] = useState("");
  let [category, setCategory] = useState(null);
  let [price, setPrice] = useState({
    min: 0,
    max: 0,
  });
  let [sort, setSort] = useState("Cheap");
  let [search, setSearch] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    let params = {
      limit: 12,
      skip: (page-1)*12
    };
    let url='/';
    if (category) {
       url+='category/'+category
    }

    if (keyword) {
      console.log(keyword);
      url+='search'
       params={...params,q: keyword}
    }
    setProducts([])
    axios.get(url, { params ,signal}).then(({ data }) => {
      let res=data.products;
      if (sort=='Cheap') {
          res=data.products.sort((a,b)=>a.price-b.price)
      } else if (sort=='Expensive') {
        res=data.products.sort((a,b)=>b.price-a.price)
      } else {
        res=data.products.sort((a,b)=>b.rating-a.rating)
      }
      setTotalpage(Math.ceil(data.total/params.limit))
      setProducts(res)
    } );
    return ()=>controller.abort();
  }, [keyword, category,page]);
  console.log(totalPage);
  return (
    <Context.Provider
      value={{
        keyword,
        setKeyword,
        setCategory,
        category,
        setPrice,
        price,
        sort,
        setSort,
        setSearch,
        search,
        products,
        setProducts,
        totalPage,
        setPage,
        page
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default FilterContext;
