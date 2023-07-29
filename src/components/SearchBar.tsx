import searchIcon from '../assets/search.png';

const SearchBar: React.FC = () => {

  return (
    <div className='flex px-6 py-3 gap-4 justify-between rounded-xl w-3/4'>
      <input
        className='w-full text-xl focus:outline-none'
        type="text"
        placeholder="Search"
      />
      <img className='w-[25px] h-[25px]' src={searchIcon} alt='Search Icon'/>
    </div>
  )
}

export default SearchBar;