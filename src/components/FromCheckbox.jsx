const FromCheckbox = ({ label, name, defaultValue, size }) => {
  return (
    <div className='form-control flex flex-col items-center justify-center'>
      <label
        htmlFor={name}
        className='label cursor-pointer flex flex-col items-center'
      >
        <span className='label-text font-medium mb-2'>{label}</span>
        <input
          type='checkbox'
          name={name}
          defaultChecked={defaultValue}
          className={`checkbox checkbox-primary ${size}`}
        />
      </label>
    </div>
  );
};

export default FromCheckbox;
