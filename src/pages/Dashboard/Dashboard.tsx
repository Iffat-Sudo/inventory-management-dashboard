import { useSelector } from 'react-redux';
import {
  Box,
  Typography,
  Stack,
  Paper,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
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

  const chartData = products.map((p) => ({
    name: p.name,
    stock: p.currentStock,
  }));

  const recentProducts = [...products].slice(-3).reverse();

  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
        Dashboard
      </Typography>

      <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', mb: 4 }}>
        <StatCard title="Total Products" value={totalProducts} color="#3B82F6" />
        <StatCard title="In Stock" value={inStock} color="#10B981" />
        <StatCard title="Low Stock" value={lowStock} color="#F59E0B" />
        <StatCard title="Out of Stock" value={outOfStock} color="#EF4444" />
      </Stack>

      <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <Paper variant="outlined" sx={{ p: 3, flex: 2, minWidth: 320 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Stock levels by product
          </Typography>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="stock" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Paper>

        <Paper variant="outlined" sx={{ p: 3, flex: 1, minWidth: 260 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Recently added products
          </Typography>
          <List>
            {recentProducts.map((product) => (
              <ListItem key={product.id} disablePadding sx={{ py: 1 }}>
                <ListItemText
                  primary={product.name}
                  secondary={`${product.category} · ${product.currentStock} in stock`}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Stack>
    </Box>
  );
}

export default Dashboard;