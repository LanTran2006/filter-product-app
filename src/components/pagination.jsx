import React, { useContext, useState } from 'react'
import { Context } from '../context/filterContext'
let limit=3;
function renderButtons(page,totalPage,setPage) {
  let html=[];
  let start,end;
  if (page%limit==0) {
     end=page;
     start=page-limit+1;
  } else {
     start=Math.floor(page/limit)*limit+1;
     end=start+limit-1;
  }
  for (let i=start;i<=end && i<=totalPage;i++) {
     html.push( <button onClick={()=>setPage(i)} className={page==i ? 'active' : null}>{i}</button>)
  }
  return html;
}

function Pagination() {
    let {page,totalPage,setPage}=useContext(Context)
  return (
    <footer className="pagination">
        <button onClick={()=>setPage(Math.max(1,page-1))}>Previous</button>
         {renderButtons(page,totalPage,setPage)}
        <button onClick={()=>setPage(Math.min(totalPage,page+1))}>Next</button>
      </footer>
  )
}

export default Pagination