import { useSelector } from 'react-redux';
import { Box, Typography, Stack } from '@mui/material';
import type { RootState } from '../../store';
import StatCard from '../../components/StatCard';

function Dashboard() {
  const products = useSelector((state: RootState) => state.products.items);

  const totalProducts = products.length;
  const inStock = products.filter((p) => p.currentStock > p.minStockLevel).length;
  const lowStock = products.filter(
    (p) => p.currentStock > 0 && p.currentStock <= p.minStockLevel
  ).length;
  const outOfStock = products.filter((p) => p.currentStock === 0).length;

  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
        Dashboard
      </Typography>
      <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
        <StatCard title="Total Products" value={totalProducts} color="#3B82F6" />
        <StatCard title="In Stock" value={inStock} color="#10B981" />
        <StatCard title="Low Stock" value={lowStock} color="#F59E0B" />
        <StatCard title="Out of Stock" value={outOfStock} color="#EF4444" />
      </Stack>
    </Box>
  );
}

export default Dashboard;