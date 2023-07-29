import zeviLogo from '../assets/logo.png';

const Header:React.FC = () => {
  return (
  <div className='flex w-full justify-end p-6'>
    <img className='self-end w-[75px]' src={zeviLogo} alt='Zevi Logo'/>
  </div>
  )
}

export default Header;