const FormInput = ({ label, name, type, defaultValue, size, className }) => {
  return (
    <div className='form-control w-full'>
      <label htmlFor={name} className={`label mb-2`}>
        <span className={`label-text ${className}`}>{label}</span>
      </label>
      <input
        id={name}
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered w-full ${size}`}
      />
    </div>
  );
};
export default FormInput;
