import { useState } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Product from '../components/Product';
import { useNavigate } from 'react-router-dom';
import products from '../assets/products';

import searchIcon from '../assets/search.png';


const SearchResult:React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { 
    event.preventDefault();
    // Navigate to the '/results' route with the search query as a query parameter
    navigate(`/results?query=${searchQuery}`);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
    setSearchQuery(event.target.value);
  };

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
   
    
    <div className='flex justify-between p-10 gap-10 relative'>
    
    <div className='hidden md:block'>
    <Sidebar/>
    </div>

    <div className='absolute select-none md:hidden top-0 left-0 right-0 bg-white z-10 px-10'>
      <div onClick={() => setSidebarOpen(!sidebarOpen)} className='flex cursor-pointer justify-between'>
      <span>Filters</span>
      {sidebarOpen ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
      </div>
      {sidebarOpen && <div className='mt-5'>
        <Sidebar/>
      </div>} 
    </div>

    
    
    <div className='w-full grid justify-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[40px]'>
    {products.map((product, index) => (
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