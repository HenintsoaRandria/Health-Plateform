import React, {useState} from 'react';
import { MenuItems } from './MenuItems';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
// import MenuItems from './MenuItems';

 const Navbar = () => {
    let location = useLocation().pathname;
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick =()=> setClick(!click);
    const closeMobileMenu=()=> setClick(false);

    const onMouseEnter =()=>{
        if(window.innerWidth <960){
            setDropdown(false);
        }else{
            setDropdown(true);
        }
    }

    const onMouseLeave=()=>{
        if(window.innerWidth <960){
            setDropdown(false);
        }else{
            setDropdown(false);
        }
    }

  return(
    <>
    {/* <nav className={location === '/patient' || location === '/userConnected' ? 'hidden' : 'show' +' navbar'}> */}
    <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
             <i className='fas fa-heartbeat'/> E-TSABO
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
        <ul className={click? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>Accueil</Link>
            </li>
            <li className='nav-item'>
                <Link to='/apropos' className='nav-links' onClick={closeMobileMenu}>A propos</Link>
            </li>
            <li className='nav-item'
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}
            >
                <Link to='/connexion' className='nav-links' onClick={closeMobileMenu}>
                    Connexion<i className='fas fa-caret-down'/>
                </Link>
                {dropdown && <Dropdown/>}
            </li>
            <li className='nav-item'>
                <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>Contact</Link>
            </li>
        </ul>

    </nav>

    </>
   )

 }

 export default Navbar