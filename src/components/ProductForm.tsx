import { useState } from 'react';
import type { FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { TextField, MenuItem, Button, Paper, Stack, Typography } from '@mui/material';
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
    <Paper
      component="form"
      onSubmit={handleSubmit}
      variant="outlined"
      sx={{ p: 3, maxWidth: 500 }}
    >
      <Stack spacing={2}>
        <TextField
          label="Name"
          value={form.name}
          onChange={(e) => handleChange('name', e.target.value)}
          fullWidth
        />
        <TextField
          label="SKU"
          value={form.sku}
          onChange={(e) => handleChange('sku', e.target.value)}
          fullWidth
        />
        <TextField
          label="Category"
          value={form.category}
          onChange={(e) => handleChange('category', e.target.value)}
          fullWidth
        />
        <TextField
          select
          label="Supplier"
          value={form.supplier}
          onChange={(e) => handleChange('supplier', e.target.value)}
          fullWidth
        >
          <MenuItem value="">Choose a supplier</MenuItem>
          {suppliers.map((s) => (
            <MenuItem key={s.id} value={s.name}>
              {s.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Price (SEK)"
          type="number"
          value={form.price}
          onChange={(e) => handleChange('price', e.target.value)}
          fullWidth
        />
        <TextField
          label="Current stock"
          type="number"
          value={form.currentStock}
          onChange={(e) => handleChange('currentStock', e.target.value)}
          fullWidth
        />
        <TextField
          label="Minimum stock level"
          type="number"
          value={form.minStockLevel}
          onChange={(e) => handleChange('minStockLevel', e.target.value)}
          fullWidth
        />

        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}

        <Button type="submit" variant="contained">
          {submitLabel}
        </Button>
      </Stack>
    </Paper>
  );
}

export default ProductForm;