import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

function getStatusColor(status: string) {
  if (status === 'pending') return '#F59E0B';
  if (status === 'shipped') return '#3B82F6';
  return '#10B981'; // received
}

function PurchaseOrders() {
  const orders = useSelector((state: RootState) => state.orders.items);

  return (
    <div>
      <h1>Purchase Orders</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #e2e8f0', textAlign: 'left' }}>
            <th style={{ padding: '10px' }}>Order #</th>
            <th style={{ padding: '10px' }}>Supplier</th>
            <th style={{ padding: '10px' }}>Status</th>
            <th style={{ padding: '10px' }}>Value (SEK)</th>
            <th style={{ padding: '10px' }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '10px' }}>{order.orderNumber}</td>
              <td style={{ padding: '10px' }}>{order.supplierName}</td>
              <td style={{ padding: '10px' }}>
                <span
                  style={{
                    color: getStatusColor(order.status),
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                  }}
                >
                  {order.status}
                </span>
              </td>
              <td style={{ padding: '10px' }}>{order.orderValue}</td>
              <td style={{ padding: '10px' }}>{order.orderDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PurchaseOrders;