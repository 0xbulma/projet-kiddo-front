import './_customInput.css';

export default function CustomInput({ label, setState, customWidth }) {
  return (
    <div className={`relative mt-8 mx-3 ${customWidth}`}>
      <input
        className={`input-text rounded-md shadow-md shadow-slate-500 ${customWidth}`}
        type='text'
        required
        onChange={(e) => setState(e.currentTarget.value)}
      />
      <label className='absolute left-0 top-1/4 pl-2 transition-all'>{label}</label>
    </div>
  );
}
