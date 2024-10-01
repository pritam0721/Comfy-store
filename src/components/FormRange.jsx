import { useState } from 'react';
import { formatPrice } from '../utils';

const FormRange = ({ label, name, size, price }) => {
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);
  return (
    <div className='form-control'>
      <label htmlFor={name} className='label cursor-pointer'>
        {label}
      </label>
      <span>{formatPrice(selectedPrice)}</span>
      <input
        type='range'
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        className={`range range-primary ${size}`}
        step={step}
      />
      <div className='w-full flex justify-between text-xs px-2 mt-2'>
        <div className='font-bold text-base '>0</div>
        <div className='font-bold text-base '>Max :{formatPrice(maxPrice)}</div>
      </div>
    </div>
  );
};
export default FormRange;
