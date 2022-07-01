export default function Nav({ navigation }) {
  return (
    <div className="Navbar__nav">
      {
        navigation.map((page) => (
          <a href={page.href} className="nav-link">
            {page.name}
          </a>
        ))
      }
    </div>
  )
}

// <NavItem key={page.name} page={page} />