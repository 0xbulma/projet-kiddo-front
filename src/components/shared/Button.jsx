
export default function button(props) {
  return (
    <button className={props.className} onClick={props.onClick}>{props.children}</button>
  )
}
