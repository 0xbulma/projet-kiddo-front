import { NavLink } from 'react-router-dom';

export default function Submenu({ item, toggle }) {
  return (
    <div className={`px-56 absolute inset-x-0 z-10 hidden transform shadow-lg md:block top-16 py-4 bg-[rgba(250,250,250,0.8)] ${toggle && 'navbar2sub__container--shown'}`}>
      <nav className='navbar2sub__innercontainer'>
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
