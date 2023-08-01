import Filter from './Filter';
import Rating from '@mui/material/Rating';


const Sidebar:React.FC = () =>{
  return (
    <div>
      <h1 className='text-4xl'>Search Results</h1>

      <Filter filterName='Brand'>
      <span>Mango</span>
      <span>H&M</span>
      </Filter>

      <Filter filterName='Price Range'>
      <span>Under 500</span>
      <span>1000 to 3000</span>
      </Filter>

      <Filter filterName='Ratings'>
      <Rating name="read-only" value={5} readOnly/>
      <Rating name="read-only" value={4} readOnly/>
      <Rating name="read-only" value={3} readOnly/>
      <Rating name="read-only" value={2} readOnly/>
      <Rating name="read-only" value={1} readOnly/>
      </Filter>

    </div>
  )
}

export default Sidebar;