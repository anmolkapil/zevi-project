import searchIcon from '../assets/search.png';

interface SearchBarProps {
  setSearching: (searching: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({setSearching}) => {

  return (
    <div className='flex mt-8 drop-shadow-2xl px-6 py-3 mx-auto bg-white gap-4 justify-between rounded-xl w-3/5'>
      <input
        onBlur={() => setSearching(false)}
        onFocus={() => setSearching(true)}
        className='w-full text-xl focus:outline-none'
        type="text"
        placeholder="Search"
      />
      <img className='w-[25px] h-[25px]' src={searchIcon} alt='Search Icon'/>
    </div>
  )
}

export default SearchBar;