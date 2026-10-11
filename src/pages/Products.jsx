import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { axiosInstance } from "../config/axiosInstance";

const Products = () => {
  const [items, setItems] = useState([]);       // the product list
  const [loading, setLoading] = useState(true); // still waiting for the API?

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axiosInstance.get("/products");
        setItems(res.data);   // axios puts the response body in res.data
      } catch (err) {
        console.log("products failed", err); // the toast is already shown
      } finally {
        setLoading(false);    // runs on success AND on failure
      }
    };
    getProducts();
  }, []);                     // [] = run once, when the page first appears

  // early return: show this INSTEAD of the grid while loading
  if (loading) return <h2 className="p-4">Loading products...</h2>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {items.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default Products;