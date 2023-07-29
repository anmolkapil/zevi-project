import SearchBar from '../components/SearchBar';

import backgroundImage from '../assets/background.jpeg';

const Search: React.FC = () => {
  return (
    <div style={{backgroundImage: `url(${backgroundImage})`}} className='h-screen bg-cover'>
  <SearchBar />
    </div>
  )

};

export default Search;
