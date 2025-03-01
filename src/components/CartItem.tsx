import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ id, name, price, image, quantity }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center py-4 border-b border-gray-200">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      
      <div className="ml-4 flex-1">
        <h3 className="text-lg font-medium text-gray-800">{name}</h3>
        <p className="mt-1 text-gray-600">${price.toFixed(2)} each</p>
      </div>
      
      <div className="flex items-center">
        <button 
          onClick={() => decreaseQuantity(id)}
          className="p-1 rounded-full hover:bg-gray-100"
          aria-label="Decrease quantity"
        >
          <Minus className="h-5 w-5 text-gray-600" />
        </button>
        
        <span className="mx-3 w-8 text-center">{quantity}</span>
        
        <button 
          onClick={() => increaseQuantity(id)}
          className="p-1 rounded-full hover:bg-gray-100"
          aria-label="Increase quantity"
        >
          <Plus className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      
      <div className="ml-6 text-right">
        <p className="text-lg font-medium text-gray-800">
          ${(price * quantity).toFixed(2)}
        </p>
        
        <button 
          onClick={() => removeFromCart(id)}
          className="mt-1 text-red-500 hover:text-red-700 flex items-center"
          aria-label="Remove item"
        >
          <Trash2 className="h-4 w-4 mr-1" />
          <span className="text-sm">Remove</span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;