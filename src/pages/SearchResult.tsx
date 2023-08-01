import Sidebar from '../components/Sidebar';
import Product from '../components/Product';
import image from '../assets/linen jumpsuit.jpeg';

const SearchResult:React.FC = () => {
  return (
    <div className='flex'>

    <Sidebar/>
    <div className='grid grid-cols-4'>
        
        <Product productImage={image} productName='Linen jumpsuit' price={500} discountedPrice={300} stars={4} ratingCount={200}/>

    </div>
    </div>
  )
}

export default SearchResult;