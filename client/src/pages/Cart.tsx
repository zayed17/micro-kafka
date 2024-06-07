import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
type CartItem = {
    _id: string;
    productName: string;
    category: string;
    price: number;
  };
const Cart = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const { id } = useParams();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`http://localhost:3003/cart/get/${id}`); 
        setCartItems(response.data.products);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

//   const handleRemoveItem = async (productId) => {
//     try {
//       await axios.delete(`http://localhost:3000/cart/${productId}`); 
//       setCartItems(cartItems.filter(item => item.productId !== productId));
//     } catch (error) {
//       console.error('Error removing item from cart:', error);
//     }
//   };

  return (
    <div>
      <h2>Cart</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {cartItems.map(product => (
          <div key={product._id} style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', padding: '10px' }}>
            <div style={{ marginRight: '10px' }}>
              <p><strong>Product Name:</strong> {product.productName}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Price:</strong> ${product.price}</p>
            </div>
            {/* <button onClick={() => handleRemoveItem(product._id)}>Remove</button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
