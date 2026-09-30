import { useState } from 'react';
import type { FormEvent } from 'react';
import { TextField, Button, Paper, Stack, Typography } from '@mui/material';
import type { Supplier } from '../store/suppliersSlice';

type SupplierFormData = Omit<Supplier, 'id'>;

interface SupplierFormProps {
  initialValues?: SupplierFormData;
  submitLabel: string;
  onSubmit: (data: SupplierFormData) => void;
}

const emptySupplier: SupplierFormData = {
  name: '',
  contactEmail: '',
  phone: '',
  address: '',
};

function SupplierForm({ initialValues = emptySupplier, submitLabel, onSubmit }: SupplierFormProps) {
  const [form, setForm] = useState<SupplierFormData>(initialValues);
  const [error, setError] = useState('');

  const handleChange = (field: keyof SupplierFormData, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!form.name.trim()) {
      setError('Supplier name is required.');
      return;
    }
    if (!form.contactEmail.trim() || !form.contactEmail.includes('@')) {
      setError('A valid email is required.');
      return;
    }

    setError('');
    onSubmit(form);
  };

  return (
    <Paper component="form" onSubmit={handleSubmit} variant="outlined" sx={{ p: 3, maxWidth: 500 }}>
      <Stack spacing={2}>
        <TextField
          label="Supplier name"
          value={form.name}
          onChange={(e) => handleChange('name', e.target.value)}
          fullWidth
        />
        <TextField
          label="Contact email"
          value={form.contactEmail}
          onChange={(e) => handleChange('contactEmail', e.target.value)}
          fullWidth
        />
        <TextField
          label="Phone"
          value={form.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          fullWidth
        />
        <TextField
          label="Address"
          value={form.address}
          onChange={(e) => handleChange('address', e.target.value)}
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

export default SupplierForm;