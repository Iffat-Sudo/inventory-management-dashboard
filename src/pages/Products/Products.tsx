import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  TextField,
  MenuItem,
  Stack,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
} from '@mui/material';
import type { RootState } from '../../store';
import { deleteProduct } from '../../store/productsSlice';

function Products() {
  const products = useSelector((state: RootState) => state.products.items);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [stockFilter, setStockFilter] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const handleDelete = (id: string, name: string) => {
    const confirmed = window.confirm(`Delete "${name}"?`);
    if (confirmed) {
      dispatch(deleteProduct(id));
    }
  };

  const getStockStatus = (product: (typeof products)[number]) => {
    if (product.currentStock === 0) return 'Out of Stock';
    if (product.currentStock <= product.minStockLevel) return 'Low Stock';
    return 'In Stock';
  };

  const categories = ['All', ...new Set(products.map((p) => p.category))];

  let visibleProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || product.category === categoryFilter;
    const matchesStock = stockFilter === 'All' || getStockStatus(product) === stockFilter;
    return matchesSearch && matchesCategory && matchesStock;
  });

  visibleProducts = [...visibleProducts].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'priceLow') return a.price - b.price;
    if (sortBy === 'priceHigh') return b.price - a.price;
    return 0;
  });

  return (
    <Box>
      <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Products
        </Typography>
        <Button component={Link} to="/products/new" variant="contained">
          + Add Product
        </Button>
      </Stack>

      <Stack direction="row" spacing={2} sx={{ mb: 3, flexWrap: 'wrap' }}>
        <TextField
          label="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          sx={{ minWidth: 220 }}
        />
        <TextField
          select
          label="Category"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          size="small"
          sx={{ minWidth: 160 }}
        >
          {categories.map((c) => (
            <MenuItem key={c} value={c}>{c}</MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Stock level"
          value={stockFilter}
          onChange={(e) => setStockFilter(e.target.value)}
          size="small"
          sx={{ minWidth: 160 }}
        >
          <MenuItem value="All">All Stock Levels</MenuItem>
          <MenuItem value="In Stock">In Stock</MenuItem>
          <MenuItem value="Low Stock">Low Stock</MenuItem>
          <MenuItem value="Out of Stock">Out of Stock</MenuItem>
        </TextField>
        <TextField
          select
          label="Sort by"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          size="small"
          sx={{ minWidth: 200 }}
        >
          <MenuItem value="name">Name (A-Z)</MenuItem>
          <MenuItem value="priceLow">Price (Low to High)</MenuItem>
          <MenuItem value="priceHigh">Price (High to Low)</MenuItem>
        </TextField>
      </Stack>

      {visibleProducts.length === 0 ? (
        <Typography color="text.secondary">No products match your search or filters.</Typography>
      ) : (
        <TableContainer component={Paper} variant="outlined" sx={{ overflowX: 'auto' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>SKU</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Supplier</TableCell>
                <TableCell>Price (SEK)</TableCell>
                <TableCell>Stock</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                  </TableCell>
                  <TableCell>{product.sku}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.supplier}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.currentStock}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Button
                        component={Link}
                        to={`/products/${product.id}/edit`}
                        variant="contained"
                        size="small"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => handleDelete(product.id, product.name)}
                        variant="contained"
                        color="error"
                        size="small"
                      >
                        Delete
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

export default Products;