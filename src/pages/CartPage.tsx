import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cartItems, getTotalItems, getTotalPrice } = useCart();
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header currentPage="cart" />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingBag className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-medium text-gray-600 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Looks like you haven't added any plants to your cart yet.</p>
            <Link 
              to="/products" 
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Browse Plants
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6 pb-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-medium text-gray-800">
                  {totalItems} {totalItems === 1 ? 'Item' : 'Items'} in Cart
                </h2>
                <Link 
                  to="/products" 
                  className="text-green-600 hover:text-green-800 font-medium"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
            
            <div className="space-y-4">
              {cartItems.map(item => (
                <CartItem 
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  quantity={item.quantity}
                />
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex justify-between text-xl font-bold text-gray-900 mb-6">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              
              <button 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-colors"
              >
                Proceed to Checkout
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </main>
      
      <footer className="bg-green-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Paradise Nursery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CartPage;