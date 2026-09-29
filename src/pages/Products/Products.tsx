import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RootState } from '../../store';
import { deleteProduct } from '../../store/productsSlice';

function Products() {
  const products = useSelector((state: RootState) => state.products.items);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [stockFilter, setStockFilter] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const handleDelete = (id: string, name: string) => {
    const confirmed = window.confirm(`Delete "${name}"?`);
    if (confirmed) {
      dispatch(deleteProduct(id));
    }
  };

  const getStockStatus = (product: (typeof products)[number]) => {
    if (product.currentStock === 0) return 'Out of Stock';
    if (product.currentStock <= product.minStockLevel) return 'Low Stock';
    return 'In Stock';
  };

  const categories = ['All', ...new Set(products.map((p) => p.category))];

  let visibleProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || product.category === categoryFilter;
    const matchesStock = stockFilter === 'All' || getStockStatus(product) === stockFilter;
    return matchesSearch && matchesCategory && matchesStock;
  });

  visibleProducts = [...visibleProducts].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'priceLow') return a.price - b.price;
    if (sortBy === 'priceHigh') return b.price - a.price;
    return 0;
  });

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Products</h1>
        <Link
          to="/products/new"
          style={{
            backgroundColor: '#3B82F6',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '4px',
            textDecoration: 'none',
          }}
        >
          + Add Product
        </Link>
      </div>

      <div style={{ display: 'flex', gap: '12px', margin: '20px 0', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px', minWidth: '200px' }}
        />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          style={{ padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px' }}
        >
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <select
          value={stockFilter}
          onChange={(e) => setStockFilter(e.target.value)}
          style={{ padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px' }}
        >
          <option value="All">All Stock Levels</option>
          <option value="In Stock">In Stock</option>
          <option value="Low Stock">Low Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{ padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px' }}
        >
          <option value="name">Sort: Name (A-Z)</option>
          <option value="priceLow">Sort: Price (Low to High)</option>
          <option value="priceHigh">Sort: Price (High to Low)</option>
        </select>
      </div>

      {visibleProducts.length === 0 ? (
        <p>No products match your search or filters.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e2e8f0', textAlign: 'left' }}>
              <th style={{ padding: '10px' }}>Name</th>
              <th style={{ padding: '10px' }}>SKU</th>
              <th style={{ padding: '10px' }}>Category</th>
              <th style={{ padding: '10px' }}>Supplier</th>
              <th style={{ padding: '10px' }}>Price (SEK)</th>
              <th style={{ padding: '10px' }}>Stock</th>
              <th style={{ padding: '10px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {visibleProducts.map((product) => (
              <tr key={product.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '10px' }}>
                  <Link to={`/products/${product.id}`}>{product.name}</Link>
                </td>
                <td style={{ padding: '10px' }}>{product.sku}</td>
                <td style={{ padding: '10px' }}>{product.category}</td>
                <td style={{ padding: '10px' }}>{product.supplier}</td>
                <td style={{ padding: '10px' }}>{product.price}</td>
                <td style={{ padding: '10px' }}>{product.currentStock}</td>
                <td style={{ padding: '10px', display: 'flex', gap: '8px' }}>
                  <Link
                    to={`/products/${product.id}/edit`}
                    style={{
                      backgroundColor: '#3B82F6',
                      color: 'white',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      textDecoration: 'none',
                    }}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(product.id, product.name)}
                    style={{
                      backgroundColor: '#EF4444',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '6px 12px',
                      cursor: 'pointer',
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Products;