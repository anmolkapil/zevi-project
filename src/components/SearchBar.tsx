import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import searchIcon from '../assets/search.png';

interface SearchBarProps {
  setSearching: (searching: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearching }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { // Specify the event type
    event.preventDefault();
    // Navigate to the '/results' route with the search query as a query parameter
    navigate(`/results?query=${searchQuery}`);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => { // Specify the event type
    setSearchQuery(event.target.value);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className='flex mt-8 drop-shadow-2xl px-6 py-3 mx-auto bg-white gap-4 justify-between rounded-xl w-3/5'>
        <input
          onBlur={() => setSearching(false)}
          onFocus={() => setSearching(true)}
          onChange={(e) => handleInputChange(e)}
          className='w-full text-xl focus:outline-none'
          type="text"
          placeholder="Search"
        />
        <button type='submit'>
          <img className='w-[25px] h-[25px]' src={searchIcon} alt='Search Icon' />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
