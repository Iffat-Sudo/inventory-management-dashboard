import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div style={{ width: '220px', height: '100vh', backgroundColor: '#1e293b', padding: '20px', color: 'white' }}>
      <h2 style={{ marginBottom: '30px' }}>📦 InventoryPro</h2>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
        <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Products</Link>
        <Link to="/suppliers" style={{ color: 'white', textDecoration: 'none' }}>Suppliers</Link>
        <Link to="/orders" style={{ color: 'white', textDecoration: 'none' }}>Purchase Orders</Link>
      </nav>
    </div>
  );
}

export default Sidebar;