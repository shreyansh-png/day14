import {Routes,Route} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
 <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/products" element={<Products/>}/>
<Route path="/products/:id" element={  <ProtectedRoute>
      <ProductDetail />
    </ProtectedRoute>} />
 </Routes>
  )
}

export default AppRoutes