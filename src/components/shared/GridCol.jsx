export function GridCol3(props) {
  return (
    <div className={`grid grid-cols-3 gap-2 ${props.className}`}>{props.children}</div>
  )
}

export function GridCol2(props) {
  return (
    <div className={`grid grid-cols-2 gap-2 ${props.className}`}>{props.children}</div>
  )
}

export function GridItemSpan1(props) {
  return (
    <div className={`col-span-1 ${props.className}`}>{props.children}</div>
  )
}

export function GridItemSpan2(props) {
  return (
    <div className={`col-span-2 ${props.className}`}>{props.children}</div>
  )
}
