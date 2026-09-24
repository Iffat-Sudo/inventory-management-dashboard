import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// This defines what one "Supplier" looks like
export interface Supplier {
  id: string;
  name: string;
  contactEmail: string;
  phone: string;
  address: string;
}

interface SuppliersState {
  items: Supplier[];
}

// Starter mock data
const initialState: SuppliersState = {
  items: [
    {
      id: '1',
      name: 'TechSupply AB',
      contactEmail: 'contact@techsupply.se',
      phone: '+46 70 123 4567',
      address: 'Kista, Stockholm',
    },
    {
      id: '2',
      name: 'Nordic Office Supplies',
      contactEmail: 'sales@nordicoffice.se',
      phone: '+46 70 234 5678',
      address: 'Solna, Stockholm',
    },
    {
      id: '3',
      name: 'PaperCo',
      contactEmail: 'info@paperco.se',
      phone: '+46 70 345 6789',
      address: 'Uppsala',
    },
  ],
};

const suppliersSlice = createSlice({
  name: 'suppliers',
  initialState,
  reducers: {
    addSupplier: (state, action: PayloadAction<Supplier>) => {
      state.items.push(action.payload);
    },
    updateSupplier: (state, action: PayloadAction<Supplier>) => {
      const index = state.items.findIndex((s) => s.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteSupplier: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((s) => s.id !== action.payload);
    },
  },
});

export const { addSupplier, updateSupplier, deleteSupplier } = suppliersSlice.actions;
export default suppliersSlice.reducer;