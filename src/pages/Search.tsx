import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SearchSuggestions from '../components/SearchSuggestions';


import backgroundImage from '../assets/background.jpeg';

const Search: React.FC = () => {
  return (
    <div style={{backgroundImage: `url(${backgroundImage})`}} className='h-screen bg-cover'>
      <Header/>
      <SearchBar />
      <SearchSuggestions/>
    </div>
  )

};

export default Search;
