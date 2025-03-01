import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  currentPage: 'products' | 'cart';
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="bg-green-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Leaf className="h-8 w-8" />
          <span className="text-xl font-bold">Paradise Nursery</span>
        </Link>
        
        <div className="flex items-center space-x-6">
          {currentPage === 'cart' ? (
            <Link to="/products" className="hover:text-green-200 transition-colors">
              Continue Shopping
            </Link>
          ) : (
            <Link to="/cart" className="relative hover:text-green-200 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-xs text-black font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;