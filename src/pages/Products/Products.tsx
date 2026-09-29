import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "../../store";
import { deleteProduct } from "../../store/productsSlice";

function Products() {
  const products = useSelector((state: RootState) => state.products.items);
  const dispatch = useDispatch();

  const handleDelete = (id: string, name: string) => {
    const confirmed = window.confirm(`Delete "${name}"?`);
    if (confirmed) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Products</h1>
        <Link
          to="/products/new"
          style={{
            backgroundColor: "#3B82F6",
            color: "white",
            padding: "8px 16px",
            borderRadius: "4px",
            textDecoration: "none",
          }}
        >
          + Add Product
        </Link>
      </div>
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}
      >
        <thead>
          <tr style={{ borderBottom: "2px solid #e2e8f0", textAlign: "left" }}>
            <th style={{ padding: "10px" }}>Name</th>
            <th style={{ padding: "10px" }}>SKU</th>
            <th style={{ padding: "10px" }}>Category</th>
            <th style={{ padding: "10px" }}>Supplier</th>
            <th style={{ padding: "10px" }}>Price (SEK)</th>
            <th style={{ padding: "10px" }}>Stock</th>
            <th style={{ padding: "10px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
              <td style={{ padding: "10px" }}>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
              </td>
              <td style={{ padding: "10px" }}>{product.sku}</td>
              <td style={{ padding: "10px" }}>{product.category}</td>
              <td style={{ padding: "10px" }}>{product.supplier}</td>
              <td style={{ padding: "10px" }}>{product.price}</td>
              <td style={{ padding: "10px" }}>{product.currentStock}</td>
              <td style={{ padding: "10px", display: "flex", gap: "8px" }}>
                <Link
                  to={`/products/${product.id}/edit`}
                  style={{
                    backgroundColor: "#3B82F6",
                    color: "white",
                    padding: "6px 12px",
                    borderRadius: "4px",
                    textDecoration: "none",
                  }}
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(product.id, product.name)}
                  style={{
                    backgroundColor: "#EF4444",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    padding: "6px 12px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
