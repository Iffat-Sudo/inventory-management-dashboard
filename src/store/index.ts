import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import suppliersReducer from './suppliersSlice';
import ordersReducer from './ordersSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    suppliers: suppliersReducer,
    orders: ordersReducer,
  },
});

// These types help TypeScript understand store's shape
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;