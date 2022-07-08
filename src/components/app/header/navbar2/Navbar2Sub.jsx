import {NavLink} from 'react-router-dom';

export default function Navbar2Sub({toggle}) {
  return (
    <div className={`navbar2sub__container ${toggle && 'navbar2sub__container--shown'}`}>
      <nav className='navbar2sub__innercontainer'>
        <ul className='navbar2sub__linklist'>
          <li>
            <NavLink className='navbar2sub__link' to='/category/culture'>
              Activités culturelles
            </NavLink>
          </li>
          <li>
            <NavLink className='navbar2sub__link' to='/category/manuel'>
              Activités manuelles
            </NavLink>
          </li>
          <li>
            <NavLink className='navbar2sub__link' to='/category/sport'>
              Activités sportives
            </NavLink>
          </li>
          <li>
            <NavLink className='navbar2sub__link' to='/category/art'>
              Activités artistiques
            </NavLink>
          </li>
          <li>
            <NavLink className='navbar2sub__link' to='/category/eveil'>
              Activités d'éveil corporel
            </NavLink>
          </li>
          <li>
            <NavLink className='navbar2sub__link' to='/category/autres'>
              Activités autres
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}