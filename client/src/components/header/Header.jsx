import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blogs</span>
      </div>
      <img className='headerImg' src='/assets/cover-min.jpg' alt='header_image' />
    </div>
  )
}

export default Header;