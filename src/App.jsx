import {Topbar, Portfolio, Works, Testimonials, Intro, Contact} from './components/index.js';
import './app.scss'
import Menu from './components/menu/Menu.jsx';
import {useState} from 'react'

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
     <div className="sections">
      <Intro/>
      <Portfolio/>
      <Works/>
      <Testimonials/>
      <Contact/>
     </div>
    </div>
  );
}

export default App;
