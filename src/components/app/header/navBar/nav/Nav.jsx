import NavItem from "./navItem/NavItem";

export default function Nav({ navigation, isAdmin }) {
  return (
    <div className="Navbar__nav">
      {navigation.pages.map((page) => (
        <NavItem key={page.name} page={page} />
      ))}
    </div>
  );
}
