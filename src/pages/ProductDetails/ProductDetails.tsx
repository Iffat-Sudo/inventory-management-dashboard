import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

function ProductDetails() {
  const { id } = useParams();
  const products = useSelector((state: RootState) => state.products.items);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div>
        <h1>Product not found</h1>
        <Link to="/products">← Back to Products</Link>
      </div>
    );
  }

  let stockStatus = 'In Stock';
  let statusColor = '#10B981';
  if (product.currentStock === 0) {
    stockStatus = 'Out of Stock';
    statusColor = '#EF4444';
  } else if (product.currentStock <= product.minStockLevel) {
    stockStatus = 'Low Stock';
    statusColor = '#F59E0B';
  }

  return (
    <div>
      <Link to="/products">← Back to Products</Link>
      <h1 style={{ marginTop: '16px' }}>{product.name}</h1>
      <p style={{ color: statusColor, fontWeight: 'bold' }}>{stockStatus}</p>

      <div
        style={{
          backgroundColor: 'white',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '20px',
          maxWidth: '500px',
          lineHeight: 2,
        }}
      >
        <div><strong>SKU:</strong> {product.sku}</div>
        <div><strong>Category:</strong> {product.category}</div>
        <div><strong>Supplier:</strong> {product.supplier}</div>
        <div><strong>Price:</strong> {product.price} SEK</div>
        <div><strong>Current stock:</strong> {product.currentStock}</div>
        <div><strong>Minimum stock level:</strong> {product.minStockLevel}</div>
      </div>
    </div>
  );
}

export default ProductDetails;