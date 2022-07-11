import { NavLink } from 'react-router-dom';

export default function Submenu({ item, toggle }) {
  return (
    <div className={`px-56 absolute inset-x-0 z-10 hidden transform bg-white shadow-lg md:block top-24 pb-7 ${toggle && 'navbar2sub__container--shown'}`}>
      <nav className='bg-white navbar2sub__innercontainer'>
        <ul className='navbar2sub__linklist sm:flex sm:space-y-0'>
          {item.submenu.map((category) => (
            <li key={category.name} className='flow-root'>
              <NavLink
                to={`/category/${category.category}`}
                className='navbar2sub__link'>
                {category.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
