export default function NavItemAdmin({ page }) {
  return (
    <a href={page.path} className="nav-link">
      {page.name}
    </a>
  )
}