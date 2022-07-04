import NavItem from "./NavItem";

export default function Nav({ navigation }) {
  return (
    <ul className="navbar__nav">
      {
        navigation.map((page, index) => {
          return <NavItem page={page} key={index} />
        })
      }
    </ul>
  )
}

// <NavItem key={page.name} page={page} />