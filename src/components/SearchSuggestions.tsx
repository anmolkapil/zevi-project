import TrendProduct from './TrendProduct';

import test from '../assets/leather shirt dress.jpeg';

const SearchSuggestions:React.FC = () => {
  return (
    <div className='mx-auto my-3 w-4/6 p-8 bg-white'>
      <h2>Latest Trends</h2>
      <TrendProduct productImage={test} productName='leather shirt dress'/>
      <h2>Popular Suggestions</h2>

    </div>
  )
}

export default SearchSuggestions;