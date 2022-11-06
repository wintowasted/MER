import './menu.scss';

const Menu = ({menuOpen, setMenuOpen}) => {
  
    const clickHandler = () => {
        setMenuOpen(prev => !prev);
    }

  return (
    <div className={menuOpen ? 'menu active' : 'menu'}>
        <ul>
            <li onClick={clickHandler}>
                <a href='#intro'>Home</a>
            </li>
            <li onClick={clickHandler}>
                <a href='#portfolio'>Portfolio</a>
            </li>
            <li onClick={clickHandler}>
                <a href='#works'>Works</a>
            </li>
            <li onClick={clickHandler}>
                <a href='#testimonials'>Testimonials</a>
            </li>
            <li onClick={clickHandler}>
                <a href='#contact'>Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu