import TrendProduct from './TrendProduct';

import puffedSleeve from '../assets/puffed sleeves.jpeg';
import linenJumpsuit from '../assets/linen jumpsuit.jpeg';
import formalSuit from '../assets/white formal suit.jpeg';
import patternDress from '../assets/pattern dresses.jpeg';
import leatherShirt from '../assets/leather shirt dress.jpeg';

const SearchSuggestions:React.FC = () => {
  return (
    <div className='mx-auto my-3 p-8 bg-white rounded-md drop-shadow-2xl'>
      <h2 className='font-medium text-xl mb-4'>Latest Trends</h2>
      <div className='flex gap-6 overflow-hidden'>
      <TrendProduct productImage={puffedSleeve} productName='Shirt with puffed sleeves'/>
      <TrendProduct productImage={linenJumpsuit} productName='Linen jumpsuit'/>
      <TrendProduct productImage={formalSuit} productName='White formal suit'/>
      <TrendProduct productImage={patternDress} productName='Pattern dresses'/>
      <TrendProduct productImage={leatherShirt} productName='Leather shirt dress'/>
      </div>
      <h2 className='font-medium text-xl mb-4 mt-8'>Popular Suggestions</h2>
      <ul className='font-normal mb-8'>
        <li>Stiped shirt dress</li>
        <li>Satin shirts</li>
        <li>Denim jumpsuit</li>
        <li>Leather dresses</li>
        <li>Solid tshirts</li>
      </ul>

    </div>
  )
}

export default SearchSuggestions;