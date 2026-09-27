import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

function Suppliers() {
  const suppliers = useSelector((state: RootState) => state.suppliers.items);

  return (
    <div>
      <h1>Suppliers</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #e2e8f0', textAlign: 'left' }}>
            <th style={{ padding: '10px' }}>Name</th>
            <th style={{ padding: '10px' }}>Email</th>
            <th style={{ padding: '10px' }}>Phone</th>
            <th style={{ padding: '10px' }}>Address</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '10px' }}>{supplier.name}</td>
              <td style={{ padding: '10px' }}>{supplier.contactEmail}</td>
              <td style={{ padding: '10px' }}>{supplier.phone}</td>
              <td style={{ padding: '10px' }}>{supplier.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Suppliers;