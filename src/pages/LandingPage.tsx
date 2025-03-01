import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
      <div className="flex-1 flex flex-col items-center justify-center px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Leaf className="h-12 w-12 mr-3" />
            <h1 className="text-5xl font-bold">Paradise Nursery</h1>
          </div>
          
          <p className="text-xl mb-8 leading-relaxed">
            Welcome to Paradise Nursery, where we bring nature's beauty into your home. 
            Our carefully curated collection of houseplants will transform your space into 
            a lush sanctuary. From easy-care succulents to statement tropical plants, 
            we have the perfect green companion for every plant lover.
          </p>
          
          <Link 
            to="/products" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
      
      <footer className="bg-black bg-opacity-50 py-4 text-center text-white">
        <p>© 2025 Paradise Nursery. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;