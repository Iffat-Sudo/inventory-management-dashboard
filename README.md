# 📦 Inventory Management Dashboard

A responsive **frontend inventory management dashboard** designed for small businesses to monitor products, stock levels, suppliers, and purchase orders.

The project is inspired by real-world inventory and supply-chain workflows and focuses on creating a practical, user-friendly business application using modern frontend technologies.

## 🚀 Live Demo

🔗 Coming soon

## 📸 Screenshots

Coming soon

## 🎯 Project Goal

The goal of this project is to build a professional inventory management interface that allows users to:

- Monitor overall inventory status
- View and manage products
- Identify low-stock and out-of-stock products
- Manage suppliers
- Create and manage purchase orders
- Search, filter, and sort inventory data
- View product and stock details

The application is **frontend-only** and currently uses mock/local data to simulate real business data and API responses.

## ✨ Features

### 📊 Dashboard

- Total number of products
- In-stock products
- Low-stock products
- Out-of-stock products
- Inventory overview
- Stock movement information
- Recently added products
- Recent inventory activity

### 📦 Product Management

- View all products
- Search products
- Filter by category
- Filter by stock status
- Sort products
- Add new products
- Edit existing products
- Delete products
- View detailed product information

### 📋 Product Details

Each product can display:

- Product name
- SKU
- Category
- Supplier
- Price
- Current stock
- Minimum stock level
- Stock history

### 🏢 Supplier Management

- View suppliers
- Search suppliers
- View supplier information
- See products associated with each supplier
- Add and edit supplier information

### 🚚 Purchase Orders

- View purchase orders
- Order status
- Supplier information
- Order value
- Order details
- Pending, shipped, and received statuses

### 🔎 User Experience

- Responsive design
- Search and filtering
- Form validation
- Loading states
- Empty states
- Error states
- Confirmation dialogs
- Success notifications

## 🛠️ Technologies

- **React**
- **Vite**
- **TypeScript**
- **Redux Toolkit** (state management)
- **Material UI**
- **React Router**
- **Axios**
- **Recharts**
- **CSS**
- **Mock JSON / Local Data**

## 🏗️ Project Structure

```text
src/
│
├── components/
│   ├── Navbar/
│   ├── Sidebar/
│   ├── StatCard/
│   ├── ProductTable/
│   └── SearchBar/
│
├── pages/
│   ├── Dashboard/
│   ├── Products/
│   ├── ProductDetails/
│   ├── Suppliers/
│   └── PurchaseOrders/
│
├── store/
│   ├── index.ts
│   ├── productsSlice.ts
│   ├── suppliersSlice.ts
│   └── ordersSlice.ts
│
├── services/
│   └── inventoryAPI.ts
│
├── data/
│   └── products.json
│
├── App.tsx
└── main.tsx
```

## 💻 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/inventory-management-dashboard.git
```

### 2. Navigate to the project

```bash
cd inventory-management-dashboard
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL shown in the terminal.

## 📱 Responsive Design

The application is designed to provide a consistent experience across:

- 💻 Desktop
- 📱 Mobile
- 📲 Tablet

## 🔮 Future Improvements

The project is currently frontend-only. Possible future improvements include:

- Connect to a REST API
- Add authentication and user roles
- Integrate a real database
- Add real-time inventory updates
- Add CSV/Excel import and export
- Add advanced inventory analytics
- Add barcode scanning
- Add notifications for low-stock products
- Integrate with an ERP or inventory backend

## 📚 What I Practiced

This project focuses on practical frontend development skills, including:

- Building reusable React components
- Using TypeScript for type-safe frontend development
- Managing application state with Redux Toolkit
- Working with forms and validation
- Implementing CRUD-style interfaces
- Creating responsive layouts
- Working with tables and dashboards
- Filtering and searching data
- Routing between application pages
- Handling loading, empty, and error states
- Designing user-friendly business interfaces
- Structuring a scalable frontend project

## 👩‍💻 About the Project

This project combines my **frontend development learning** with my previous experience in **supply chain and demand planning**.

The interface is designed around common inventory-management workflows to demonstrate how frontend development can be applied to practical business applications.

---

**Built with React ⚛️ + TypeScript + Redux | Focused on practical frontend development**
