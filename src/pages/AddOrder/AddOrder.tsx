import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import OrderForm from '../../components/OrderForm';
import { addOrder } from '../../store/ordersSlice';

function AddOrder() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Box>
      <Button component={Link} to="/orders" sx={{ mb: 2 }}>
        ← Back to Purchase Orders
      </Button>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
        Add Purchase Order
      </Typography>
      <OrderForm
        submitLabel="Create Order"
        onSubmit={(data) => {
          dispatch(addOrder({ ...data, id: Date.now().toString() }));
          navigate('/orders');
        }}
      />
    </Box>
  );
}

export default AddOrder;