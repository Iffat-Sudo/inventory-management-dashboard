
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
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

function Suppliers() {
  const suppliers = useSelector((state: RootState) => state.suppliers.items);

  return (
    <Box>
      <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Suppliers
        </Typography>
        <Button component={Link} to="/suppliers/new" variant="contained">
          + Add Supplier
        </Button>
      </Stack>

      {suppliers.length === 0 ? (
        <Typography color="text.secondary">No suppliers found.</Typography>
      ) : (
        <TableContainer component={Paper} variant="outlined">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {suppliers.map((supplier) => (
                <TableRow key={supplier.id}>
                  <TableCell>{supplier.name}</TableCell>
                  <TableCell>{supplier.contactEmail}</TableCell>
                  <TableCell>{supplier.phone}</TableCell>
                  <TableCell>{supplier.address}</TableCell>
                  <TableCell>
                    <Button component={Link} to={`/suppliers/${supplier.id}/edit`} variant="contained" size="small">
                      Edit
                    </Button>
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

export default Suppliers;