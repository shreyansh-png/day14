import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { axiosInstance } from "../config/axiosInstance";

const ProductDetail = () => {
  const { id } = useParams();   // the dynamic route from day14
  const nav = useNavigate();
  const [item, setItem] = useState(null);      // null = nothing loaded yet
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getOne = async () => {
      try {
        // template string builds /products/1, /products/2 ...
        const res = await axiosInstance.get(`/products/${id}`);
        setItem(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getOne();
  }, [id]);   // [id] = run again if the id in the URL changes

  if (loading) return <h2 className="p-4">Loading...</h2>;
  if (!item) return <h2 className="p-4">Product not found</h2>;

  return (
    <div className="p-4 flex flex-col gap-2 max-w-xl">
      <img src={item.image} alt={item.title} className="h-60 object-contain" />
      <h2 className="text-2xl font-bold">{item.title}</h2>
      <p>$ {item.price}</p>
      <p className="text-sm">{item.description}</p>
      <button
        onClick={() => nav(-1)}
        className="border rounded px-3 py-1 w-fit"
      >
        Back
      </button>
    </div>
  );
};

export default ProductDetail;