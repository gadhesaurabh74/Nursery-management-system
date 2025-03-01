import React, { useState } from 'react';
import Header from '../components/Header';
import PlantCard from '../components/PlantCard';
import { getPlantsByCategory } from '../data/plants';

const ProductsPage: React.FC = () => {
  const plantsByCategory = getPlantsByCategory();
  const categories = Object.keys(plantsByCategory);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCategories = activeCategory 
    ? { [activeCategory]: plantsByCategory[activeCategory] } 
    : plantsByCategory;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header currentPage="products" />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Plants</h1>
        
        <div className="mb-8 flex flex-wrap gap-2">
          <button 
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeCategory === null 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All Categories
          </button>
          
          {categories.map(category => (
            <button 
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === category 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {Object.entries(filteredCategories).map(([category, plants]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {plants.map(plant => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          </div>
        ))}
      </main>
      
      <footer className="bg-green-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Paradise Nursery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductsPage;