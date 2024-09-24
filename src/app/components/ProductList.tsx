import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://pubapi-stg.fptshop.com.vn/lccus/ci-cms/api/v1/pages/home'); 
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map(product => (
        <div key={product.id} className="border rounded-lg overflow-hidden shadow-md">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-700">{product.price.toLocaleString()} VNĐ</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Thêm vào giỏ</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
