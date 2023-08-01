import zeviLogo from '../assets/logo.png';

const Header:React.FC = () => {
  return (
    <div className='flex w-full justify-end p-6'>
      <a href='/'>
      <img className='self-end w-[75px]' src={zeviLogo} alt='Zevi Logo'/>
      </a>
    </div>
  )
}

export default Header;