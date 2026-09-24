import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// This defines what one "Purchase Order" looks like
export interface PurchaseOrder {
  id: string;
  orderNumber: string;
  supplierId: string;
  supplierName: string;
  status: 'pending' | 'shipped' | 'received';
  orderValue: number;
  orderDate: string;
}

interface OrdersState {
  items: PurchaseOrder[];
}

// Starter mock data
const initialState: OrdersState = {
  items: [
    {
      id: '1',
      orderNumber: 'PO-1001',
      supplierId: '1',
      supplierName: 'TechSupply AB',
      status: 'pending',
      orderValue: 12500,
      orderDate: '2026-09-10',
    },
    {
      id: '2',
      orderNumber: 'PO-1002',
      supplierId: '2',
      supplierName: 'Nordic Office Supplies',
      status: 'shipped',
      orderValue: 8990,
      orderDate: '2026-09-15',
    },
    {
      id: '3',
      orderNumber: 'PO-1003',
      supplierId: '3',
      supplierName: 'PaperCo',
      status: 'received',
      orderValue: 1450,
      orderDate: '2026-09-18',
    },
  ],
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<PurchaseOrder>) => {
      state.items.push(action.payload);
    },
    updateOrderStatus: (
      state,
      action: PayloadAction<{ id: string; status: PurchaseOrder['status'] }>
    ) => {
      const order = state.items.find((o) => o.id === action.payload.id);
      if (order) {
        order.status = action.payload.status;
      }
    },
    deleteOrder: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((o) => o.id !== action.payload);
    },
  },
});

export const { addOrder, updateOrderStatus, deleteOrder } = ordersSlice.actions;
export default ordersSlice.reducer;