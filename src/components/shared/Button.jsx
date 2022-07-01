export default function button(props) {
  return (
    <button
      className={`rounded-3xl border border-gray-300 p-3 w-80 bg-zinc-100 ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
