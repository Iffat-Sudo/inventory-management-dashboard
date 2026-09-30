import { useState } from 'react';
import type { FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { TextField, MenuItem, Button, Paper, Stack, Typography } from '@mui/material';
import type { RootState } from '../store';
import type { PurchaseOrder } from '../store/ordersSlice';

type OrderFormData = Omit<PurchaseOrder, 'id'>;

interface OrderFormProps {
  submitLabel: string;
  onSubmit: (data: OrderFormData) => void;
}

function OrderForm({ submitLabel, onSubmit }: OrderFormProps) {
  const suppliers = useSelector((state: RootState) => state.suppliers.items);

  const [orderNumber, setOrderNumber] = useState('');
  const [supplierId, setSupplierId] = useState('');
  const [status, setStatus] = useState<PurchaseOrder['status']>('pending');
  const [orderValue, setOrderValue] = useState(0);
  const [orderDate, setOrderDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!orderNumber.trim()) {
      setError('Order number is required.');
      return;
    }
    if (!supplierId) {
      setError('Please choose a supplier.');
      return;
    }
    if (!orderDate) {
      setError('Please choose a date.');
      return;
    }
    if (orderValue < 0) {
      setError('Order value cannot be negative.');
      return;
    }

    const supplier = suppliers.find((s) => s.id === supplierId);

    setError('');
    onSubmit({
      orderNumber,
      supplierId,
      supplierName: supplier ? supplier.name : '',
      status,
      orderValue,
      orderDate,
    });
  };

  return (
    <Paper component="form" onSubmit={handleSubmit} variant="outlined" sx={{ p: 3, maxWidth: 500 }}>
      <Stack spacing={2}>
        <TextField
          label="Order number"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          placeholder="e.g. PO-1004"
          fullWidth
        />
        <TextField
          select
          label="Supplier"
          value={supplierId}
          onChange={(e) => setSupplierId(e.target.value)}
          fullWidth
        >
          <MenuItem value="">Choose a supplier</MenuItem>
          {suppliers.map((s) => (
            <MenuItem key={s.id} value={s.id}>
              {s.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value as PurchaseOrder['status'])}
          fullWidth
        >
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="shipped">Shipped</MenuItem>
          <MenuItem value="received">Received</MenuItem>
        </TextField>
        <TextField
          label="Order value (SEK)"
          type="number"
          value={orderValue}
          onChange={(e) => setOrderValue(Number(e.target.value))}
          fullWidth
        />
        <TextField
          label="Order date"
          type="date"
          value={orderDate}
          onChange={(e) => setOrderDate(e.target.value)}
          slotProps={{ inputLabel: { shrink: true } }}
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

export default OrderForm;