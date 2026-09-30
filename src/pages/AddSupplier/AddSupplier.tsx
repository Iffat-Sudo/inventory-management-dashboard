import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import SupplierForm from '../../components/SupplierForm';
import { addSupplier } from '../../store/suppliersSlice';

function AddSupplier() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Box>
      <Button component={Link} to="/suppliers" sx={{ mb: 2 }}>
        ← Back to Suppliers
      </Button>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
        Add Supplier
      </Typography>
      <SupplierForm
        submitLabel="Add Supplier"
        onSubmit={(data) => {
          dispatch(addSupplier({ ...data, id: Date.now().toString() }));
          navigate('/suppliers');
        }}
      />
    </Box>
  );
}

export default AddSupplier;