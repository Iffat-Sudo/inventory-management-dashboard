import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import type { RootState } from '../../store';
import SupplierForm from '../../components/SupplierForm';
import { updateSupplier } from '../../store/suppliersSlice';

function EditSupplier() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const suppliers = useSelector((state: RootState) => state.suppliers.items);
  const supplier = suppliers.find((s) => s.id === id);

  if (!supplier) {
    return (
      <Box>
        <Typography variant="h5">Supplier not found</Typography>
        <Button component={Link} to="/suppliers" sx={{ mt: 2 }}>
          ← Back to Suppliers
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <Button component={Link} to="/suppliers" sx={{ mb: 2 }}>
        ← Back to Suppliers
      </Button>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
        Edit Supplier
      </Typography>
      <SupplierForm
        initialValues={supplier}
        submitLabel="Save Changes"
        onSubmit={(data) => {
          dispatch(updateSupplier({ ...data, id: supplier.id }));
          navigate('/suppliers');
        }}
      />
    </Box>
  );
}

export default EditSupplier;