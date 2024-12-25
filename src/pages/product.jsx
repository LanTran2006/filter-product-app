import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { instance } from "../utils/axiosInstance";
import Loader from "../components/Loader";
async function fetchDetail(id) {
  let response = await instance.get("/"+id);
  return response.data;
}

function Product() {
  let { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["prodcut", id],
    queryFn: () => fetchDetail(id),
  });
  return (
    <div className="product-page">
      {isLoading ? <Loader/> : null}
      {data && (
        <>
          <button className="back-button"><Link to={'/'}>Back</Link></button>
          <div className="product-details">
            <img
              src={data.thumbnail}
              alt="Product Image"
              className="product-image"
            />
            <div className="product-info">
              <h1 className="product-title">{data.title}</h1>
              <p>
               {data.description}
              </p>
              <p className="product-meta">
                <span>
                  Price: <strong>${data.price}</strong>
                </span>{" "}
                &nbsp;&nbsp; | &nbsp;&nbsp;
                <span>
                  Rating: <strong>{data.rating}</strong>
                </span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Product;
