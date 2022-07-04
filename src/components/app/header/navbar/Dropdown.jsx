import { classNames } from '../../../../utils/lib/classNames';
import NavItem from './NavItem';

export default function Dropdown({ submenu, dropdown }) {
  return (
    <ul className={classNames(
      dropdown ? "show" : "",
      "dropdown"
    )}>
      {
        submenu.map((item, index) => (
          <NavItem page={item} key={index} />
        ))
      }
    </ul>
  )
}