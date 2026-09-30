import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Suppliers from "./pages/Suppliers/Suppliers";
import PurchaseOrders from "./pages/PurchaseOrders/PurchaseOrders";
import AddProduct from "./pages/AddProduct/AddProduct";
import EditProduct from "./pages/EditProduct/EditProduct";
import AddSupplier from "./pages/AddSupplier/AddSupplier";
import EditSupplier from "./pages/EditSupplier/EditSupplier";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Navbar />
          <div style={{ padding: "20px", marginTop: "64px" }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/new" element={<AddProduct />} />
              <Route path="/products/:id/edit" element={<EditProduct />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/suppliers" element={<Suppliers />} />
              <Route path="/suppliers/new" element={<AddSupplier />} />
              <Route path="/suppliers/:id/edit" element={<EditSupplier />} />
              <Route path="/orders" element={<PurchaseOrders />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
