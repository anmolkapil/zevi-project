import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SearchSuggestions from '../components/SearchSuggestions';
import backgroundImage from '../assets/background.jpeg';
import { useState } from 'react';

const Search: React.FC = () => {
  const [searching, setSearching] = useState<boolean>(false);

  return (
    <div style={{backgroundImage: `url(${backgroundImage})`}} className='h-screen bg-cover bg-center'>
      <Header/>
      <div className='flex flex-col'>
        <SearchBar setSearching={setSearching}/>
        {searching && <SearchSuggestions/>}
      </div>
    
    </div>
  )

};

export default Search;
