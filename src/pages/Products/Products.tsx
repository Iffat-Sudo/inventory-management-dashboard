import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

function Products() {
  const products = useSelector((state: RootState) => state.products.items);

  return (
    <div>
      <h1>Products</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #e2e8f0', textAlign: 'left' }}>
            <th style={{ padding: '10px' }}>Name</th>
            <th style={{ padding: '10px' }}>SKU</th>
            <th style={{ padding: '10px' }}>Category</th>
            <th style={{ padding: '10px' }}>Supplier</th>
            <th style={{ padding: '10px' }}>Price (SEK)</th>
            <th style={{ padding: '10px' }}>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '10px' }}>{product.name}</td>
              <td style={{ padding: '10px' }}>{product.sku}</td>
              <td style={{ padding: '10px' }}>{product.category}</td>
              <td style={{ padding: '10px' }}>{product.supplier}</td>
              <td style={{ padding: '10px' }}>{product.price}</td>
              <td style={{ padding: '10px' }}>{product.currentStock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;