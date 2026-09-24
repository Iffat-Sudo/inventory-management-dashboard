import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// This defines what one "Product" looks like
export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  supplier: string;
  price: number;
  currentStock: number;
  minStockLevel: number;
}

interface ProductsState {
  items: Product[];
}

// Starter mock data, so you can see the app working right away
const initialState: ProductsState = {
  items: [
    {
      id: '1',
      name: 'Wireless Mouse',
      sku: 'WM-1001',
      category: 'Electronics',
      supplier: 'TechSupply AB',
      price: 249,
      currentStock: 45,
      minStockLevel: 10,
    },
    {
      id: '2',
      name: 'Office Chair',
      sku: 'OC-2002',
      category: 'Furniture',
      supplier: 'Nordic Office Supplies',
      price: 1299,
      currentStock: 5,
      minStockLevel: 8,
    },
    {
      id: '3',
      name: 'Notebook A5',
      sku: 'NB-3003',
      category: 'Stationery',
      supplier: 'PaperCo',
      price: 29,
      currentStock: 0,
      minStockLevel: 20,
    },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.items.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addProduct, updateProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;