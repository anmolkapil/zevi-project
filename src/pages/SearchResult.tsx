import { useState, useEffect } from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Product from '../components/Product';
import { useNavigate } from 'react-router-dom';

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
  const [searchQuery, setSearchQuery] = useState<string>('');

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { 
    event.preventDefault();
    // Navigate to the '/results' route with the search query as a query parameter
    navigate(`/results?query=${searchQuery}`);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
    setSearchQuery(event.target.value);
  };
  const [Products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products.json');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products data:', error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
    <Header/>

    <form onSubmit={(e) => handleSubmit(e)}>
      <div className='flex px-6 py-3 mx-6 md:mx-auto md:-mt-[60px] bg-white gap-4 border border-[rgba(0, 0, 0, 0.50)] justify-between rounded-xl md:w-[550px]'>
        <input
          onChange={(e) => handleInputChange(e)}
          className='w-full text-xl focus:outline-none'
          type="text"
          placeholder="Search"
        />
        <button type='submit'>
          <img className='w-[25px] h-[25px]' src={searchIcon} alt='Search Icon'/>
        </button>
      </div>
    </form>
   
    
    <h1 className='text-4xl ml-10 mt-10'>Search Results</h1>
    <div className='flex justify-between p-10 gap-10'>
    
    <div className='hidden md:block'>
    <Sidebar/>
    </div>
    
    <div className='w-full grid grid-cols-2 justify-center md:grid-cols-3 lg:grid-cols-4 gap-[40px]'>
    {Products.map((product, index) => (
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