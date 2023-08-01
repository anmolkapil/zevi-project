import { useState, useEffect } from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Product from '../components/Product';

import searchIcon from '../assets/search.png';

interface ProductData {
  productName: string;
  productImage: string;
  price: number;
  discountedPrice: number;
  stars: number;
  ratingCount: number;
}

const SearchResult:React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products.json');
        const data = await response.json();
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products data:', error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
    <Header/>
    <div className='flex px-6 py-3 mx-auto -mt-[60px] bg-white gap-4 border border-[rgba(0, 0, 0, 0.50)] justify-between rounded-xl w-[550px]'>
      <input
        className='w-full text-xl focus:outline-none'
        type="text"
        placeholder="Search"
      />
      <img className='w-[25px] h-[25px]' src={searchIcon} alt='Search Icon'/>
    </div>
    
    <h1 className='text-4xl ml-10 mt-10'>Search Results</h1>
    <div className='flex justify-between p-10 gap-10'>
    
    <Sidebar/>
    <div className='grid grid-cols-4 gap-[40px]'>
    {filteredProducts.map((product, index) => (
        <Product
          key={index}
          productImage={product.productImage}
          productName={product.productName}
          price={product.price}
          discountedPrice={product.discountedPrice}
          stars={product.stars}
          ratingCount={product.ratingCount}
        />
      ))}

    </div>
    </div>
    </>
  )
}

export default SearchResult;