import NavItem from './NavItem/NavItem';

export default function Nav({ navigation, isAdmin }) {
  return (
    <div className="Navbar__nav">
      {
        !isAdmin && navigation.pages.map((page) => (
          <NavItem key={page.name} page={page} />
        ))
      }
    </div>
  )
}