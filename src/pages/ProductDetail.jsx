
import { useParams,useNavigate }from "react-router-dom";
import { products } from "./Products";

import React from 'react'

const ProductDetail = () => {
    const {id}=useParams();
const nav=useNavigate();
 const item = products.find((p) => p.id === Number(id));
  if (!item) return <h2 className="p-4">Product not found</h2>;

  return (<div className="p-4">
      <h2 className="text-2xl font-bold">{item.name}</h2>
      <p>Price: Rs {item.price}</p>
      <button
        onClick={() => nav(-1)}   // -1 means go back one page
        className="border rounded px-3 py-1 mt-3"
      >
        Back
      </button>
    </div>
  );
};

export default ProductDetail;