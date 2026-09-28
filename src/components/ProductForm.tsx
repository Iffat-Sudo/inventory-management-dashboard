import { useState } from 'react';
import type { FormEvent } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import type { Product } from '../store/productsSlice';

type ProductFormData = Omit<Product, 'id'>;

interface ProductFormProps {
  initialValues?: ProductFormData;
  submitLabel: string;
  onSubmit: (data: ProductFormData) => void;
}

const emptyProduct: ProductFormData = {
  name: '',
  sku: '',
  category: '',
  supplier: '',
  price: 0,
  currentStock: 0,
  minStockLevel: 0,
};

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '8px',
  marginTop: '4px',
  border: '1px solid #cbd5e1',
  borderRadius: '4px',
  boxSizing: 'border-box' as const,
};

function ProductForm({ initialValues = emptyProduct, submitLabel, onSubmit }: ProductFormProps) {
  const suppliers = useSelector((state: RootState) => state.suppliers.items);
  const [form, setForm] = useState<ProductFormData>(initialValues);
  const [error, setError] = useState('');

  const handleChange = (field: keyof ProductFormData, value: string) => {
    const numberFields = ['price', 'currentStock', 'minStockLevel'];
    setForm({
      ...form,
      [field]: numberFields.includes(field) ? Number(value) : value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.sku.trim()) {
      setError('Name and SKU are required.');
      return;
    }
    if (!form.supplier) {
      setError('Please choose a supplier.');
      return;
    }
    if (form.price < 0 || form.currentStock < 0 || form.minStockLevel < 0) {
      setError('Numbers cannot be negative.');
      return;
    }

    setError('');
    onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: 'white',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        padding: '20px',
        maxWidth: '500px',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
      }}
    >
      <label>
        Name
        <input style={inputStyle} value={form.name} onChange={(e) => handleChange('name', e.target.value)} />
      </label>
      <label>
        SKU
        <input style={inputStyle} value={form.sku} onChange={(e) => handleChange('sku', e.target.value)} />
      </label>
      <label>
        Category
        <input style={inputStyle} value={form.category} onChange={(e) => handleChange('category', e.target.value)} />
      </label>
      <label>
        Supplier
        <select style={inputStyle} value={form.supplier} onChange={(e) => handleChange('supplier', e.target.value)}>
          <option value="">Choose a supplier</option>
          {suppliers.map((s) => (
            <option key={s.id} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Price (SEK)
        <input type="number" style={inputStyle} value={form.price} onChange={(e) => handleChange('price', e.target.value)} />
      </label>
      <label>
        Current stock
        <input type="number" style={inputStyle} value={form.currentStock} onChange={(e) => handleChange('currentStock', e.target.value)} />
      </label>
      <label>
        Minimum stock level
        <input type="number" style={inputStyle} value={form.minStockLevel} onChange={(e) => handleChange('minStockLevel', e.target.value)} />
      </label>

      {error && <p style={{ color: '#EF4444', margin: 0 }}>{error}</p>}

      <button
        type="submit"
        style={{
          backgroundColor: '#3B82F6',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '10px',
          cursor: 'pointer',
        }}
      >
        {submitLabel}
      </button>
    </form>
  );
}

export default ProductForm;