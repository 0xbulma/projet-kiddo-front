export default function Circle({ color, size }) {
  console.log(size);
  return <span className={`p-${size} rounded-full bg-red-300`} />;
}
