import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Typography, Paper, Stack, Button } from '@mui/material';
import type { RootState } from '../../store';

function ProductDetails() {
  const { id } = useParams();
  const products = useSelector((state: RootState) => state.products.items);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <Box>
        <Typography variant="h5">Product not found</Typography>
        <Button component={Link} to="/products" sx={{ mt: 2 }}>
          ← Back to Products
        </Button>
      </Box>
    );
  }

  let stockStatus = 'In Stock';
  let statusColor = '#10B981';
  if (product.currentStock === 0) {
    stockStatus = 'Out of Stock';
    statusColor = '#EF4444';
  } else if (product.currentStock <= product.minStockLevel) {
    stockStatus = 'Low Stock';
    statusColor = '#F59E0B';
  }

  return (
    <Box>
      <Button component={Link} to="/products" sx={{ mb: 2 }}>
        ← Back to Products
      </Button>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        {product.name}
      </Typography>
      <Typography sx={{ color: statusColor, fontWeight: 'bold', mb: 2 }}>
        {stockStatus}
      </Typography>

      <Paper variant="outlined" sx={{ p: 3, maxWidth: 500 }}>
        <Stack spacing={1.5}>
          <Typography><strong>SKU:</strong> {product.sku}</Typography>
          <Typography><strong>Category:</strong> {product.category}</Typography>
          <Typography><strong>Supplier:</strong> {product.supplier}</Typography>
          <Typography><strong>Price:</strong> {product.price} SEK</Typography>
          <Typography><strong>Current stock:</strong> {product.currentStock}</Typography>
          <Typography><strong>Minimum stock level:</strong> {product.minStockLevel}</Typography>
        </Stack>
      </Paper>
    </Box>
  );
}

export default ProductDetails;