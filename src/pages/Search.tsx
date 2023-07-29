import SearchBar from '../components/SearchBar';
import Header from '../components/Header';

import backgroundImage from '../assets/background.jpeg';

const Search: React.FC = () => {
  return (
    <div style={{backgroundImage: `url(${backgroundImage})`}} className='h-screen bg-cover'>
      <Header/>
      <SearchBar />
    </div>
  )

};

export default Search;
