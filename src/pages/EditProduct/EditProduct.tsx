import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Link } from 'react-router-dom';
import type { RootState } from '../../store';
import ProductForm from '../../components/ProductForm';
import { updateProduct } from '../../store/productsSlice';

function EditProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state: RootState) => state.products.items);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div>
        <h1>Product not found</h1>
        <Link to="/products">← Back to Products</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/products">← Back to Products</Link>
      <h1 style={{ marginTop: '16px' }}>Edit Product</h1>
      <ProductForm
        initialValues={product}
        submitLabel="Save Changes"
        onSubmit={(data) => {
          dispatch(updateProduct({ ...data, id: product.id }));
          navigate('/products');
        }}
      />
    </div>
  );
}

export default EditProduct;