import React from 'react';
import { Plant, useCart } from '../context/CartContext';
import { PlusCircle } from 'lucide-react';

interface PlantCardProps {
  plant: Plant;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img 
          src={plant.image} 
          alt={plant.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{plant.name}</h3>
        <p className="text-green-700 font-bold mt-1">${plant.price.toFixed(2)}</p>
        <button 
          onClick={() => addToCart(plant)}
          className="mt-3 w-full bg-green-600 text-white py-2 rounded-md flex items-center justify-center hover:bg-green-700 transition-colors"
        >
          <PlusCircle className="h-5 w-5 mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PlantCard;