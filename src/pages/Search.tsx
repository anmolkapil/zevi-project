import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SearchSuggestions from '../components/SearchSuggestions';


import backgroundImage from '../assets/background.jpeg';

const Search: React.FC = () => {
  return (
    <div style={{backgroundImage: `url(${backgroundImage})`}} className='h-screen bg-cover'>
      <Header/>
      <div className='flex flex-col'>
      <SearchBar />
      <SearchSuggestions/>
      </div>
    
    </div>
  )

};

export default Search;
