import Filter from './Filter';
import Rating from '@mui/material/Rating';

const Sidebar:React.FC = () =>{
  return (
    <div className='divide-y -mt-3 md:w-[175px] lg:w-[270px]'>
      <Filter filterName='Brand'>
      <span>Mango</span>
      <span>H&M</span>
      </Filter>

      <Filter filterName='Price Range'>
      <span >Under 500</span>
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