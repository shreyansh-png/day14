import {Link} from "react-router-dom";

export const products = [
  { id: 1, name: "Keyboard", price: 1500 },
  { id: 2, name: "Mouse", price: 600 },
  { id: 3, name: "Monitor", price: 9000 },
];

import React from 'react'

const Products = () => {
  return (
   <div className="flex flex-col gap-3 p-4">
    <h2  className="text-2xl font-bold"> Products</h2>
   {/* map() turns each product into one Link */}
      {products.map((p) => (
        <Link
          key={p.id}
          to={`/products/${p.id}`}   // builds /products/1, /products/2 ...
          className="border rounded p-3 hover:bg-gray-100"
        >
          {p.name} - Rs {p.price}
        </Link>
      ))}
    </div>
  );
};

export default Products;