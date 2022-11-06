import './topbar.scss'
import {Mail, Person} from '@mui/icons-material'


const Topbar = ({menuOpen, setMenuOpen}) => {

  return (
    <div className={menuOpen ? 'topbar active' : 'topbar' } id='topbar'>
      <div className="wrapper">
        <div className="left">
          <a href='#intro' className='logo'><img src="assets/logo.png" alt="logo" className='logoImage' /><span className='brand'>MER</span></a>
          <div className="itemsContainer">
          <Person  className='icon'/>
          <span>+90 541 308 9610</span>
        </div>
        <div className="itemsContainer">
          <Mail className='icon'/>
          <span>mthnakyldz99@gmail.com</span>
        </div>
        </div>
       
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(prev => !prev)}>
             <span className="line1"></span>
             <span className="line2"></span>
             <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar