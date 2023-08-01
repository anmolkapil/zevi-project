import Filter from './Filter';
import Rating from '@mui/material/Rating';
// import useFilter from '../hooks/useFilter';


const Sidebar:React.FC = () =>{
  // const [filteredProducts, setFilteredProducts] = useState();

  //  // Create separate instances of the custom hook for each filter category
  // const { selectedFilters: selectedBrandFilters, handleCheckboxChange: handleBrandCheckboxChange } = useFilter();
  // const { selectedFilters: selectedPriceRangeFilters, handleCheckboxChange: handlePriceRangeCheckboxChange } = useFilter();
  // const { selectedFilters: selectedRatingsFilters, handleCheckboxChange: handleRatingsCheckboxChange } = useFilter();
  
  // const handleFilter = () => {
  //   // Filter products based on all selected filters
  //   const filteredItems = products.filter((product) => {
  //     // Filter based on brand
  //     const brandFilterPassed = selectedBrandFilters.length === 0 || selectedBrandFilters.includes(product.brand);

  //     // Filter based on ratings
  //     const ratingsFilterPassed = selectedRatingsFilters.length === 0 || selectedRatingsFilters.includes(product.stars);

  //     // Combine all filters with logical AND (&&)
  //     return brandFilterPassed && ratingsFilterPassed;
  //   });

  //   // Update the filtered products state
  //   setFilteredProducts(filteredItems);
  // };
  
  
  return (
    <div className='divide-y'>
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