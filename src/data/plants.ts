import { Plant } from '../context/CartContext';

export const plants: Plant[] = [
  // Indoor Plants
  {
    id: 1,
    name: "Monstera Deliciosa",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Indoor Plants"
  },
  {
    id: 2,
    name: "Fiddle Leaf Fig",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1597055181449-b9d2a4598b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Indoor Plants"
  },
  {
    id: 3,
    name: "Snake Plant",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1593482892290-f54c7f8ed372?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Indoor Plants"
  },
  
  // Succulents
  {
    id: 4,
    name: "Echeveria Elegans",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Succulents"
  },
  {
    id: 5,
    name: "Aloe Vera",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8c6a5f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Succulents"
  },
  
  // Hanging Plants
  {
    id: 6,
    name: "Pothos",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1600411833114-5c4739b80b6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Hanging Plants"
  },
  {
    id: 7,
    name: "String of Pearls",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1611211232932-da3113c5b960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Hanging Plants"
  },
  {
    id: 8,
    name: "Spider Plant",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Hanging Plants"
  }
];

export const getPlantsByCategory = () => {
  const categories: { [key: string]: Plant[] } = {};
  
  plants.forEach(plant => {
    if (!categories[plant.category]) {
      categories[plant.category] = [];
    }
    categories[plant.category].push(plant);
  });
  
  return categories;
};