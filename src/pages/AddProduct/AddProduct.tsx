import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import ProductForm from '../../components/ProductForm';
import { addProduct } from '../../store/productsSlice';

function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <Link to="/products">← Back to Products</Link>
      <h1 style={{ marginTop: '16px' }}>Add Product</h1>
      <ProductForm
        submitLabel="Add Product"
        onSubmit={(data) => {
          dispatch(addProduct({ ...data, id: Date.now().toString() }));
          navigate('/products');
        }}
      />
    </div>
  );
}

export default AddProduct;