export default function NavItem({ page }) {
  return (
    <a href={page.path} className="nav-link">
      {page.name}
    </a>
  )
}