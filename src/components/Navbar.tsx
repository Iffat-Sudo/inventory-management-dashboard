function Navbar() {
  return (
    <div
      style={{
        height: '60px',
        backgroundColor: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        justifyContent: 'space-between',
      }}
    >
      <h3 style={{ margin: 0 }}>Inventory Management Dashboard</h3>
      <div>👤 Iffat</div>
    </div>
  );
}

export default Navbar;