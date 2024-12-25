import React from 'react'
import { useContext } from 'react'
import { Context } from '../context/filterContext'

function Category({categories}) {
    let {setCategory,category,setKeyword,setPage}=useContext(Context)
    let handle_select=(item)=>{
      setCategory(item);
      setPage(1);
      setKeyword(null)
    }
  return (
    <>
      {categories.map((item, index) => (
          <label key={index}>
            <input checked={category==item} onChange={()=>handle_select(item)} type="radio" name="item" value={item} /> {item}
          </label>
        ))}
    </>
  )
}

export default Category