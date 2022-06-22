import NavItem from './NavItem/NavItem';

export default function Nav({ navigation }) {
  return (
    <div className="Navbar__nav">
      {navigation.pages.map((page) => (
        <NavItem key={page.name} page={page} />
      ))}
    </div>
  )
}