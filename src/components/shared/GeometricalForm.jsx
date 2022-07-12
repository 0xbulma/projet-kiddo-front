export default function Circle({ color, size }) {
  return <span className={`p-[${size}] rounded-full bg-${color}`} />;
}
