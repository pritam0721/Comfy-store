const CartItem = ({ cartItem }) => {
  const { cartId, image, title, amount, company, productColor } = cartItem;
  return (
    <article
      key={cartId}
      className='mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0'
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover'
      />
      {/* INFO */}
      <div className='sm:ml-16 sm:w-48'>
        {/* TITLE */}
        <h3 className='capitalize font-medium whitespace-nowrap'>{title}</h3>
        {/* COMPANY */}
        <h4 className='mt-2 capitalize text-sm text-neutral-content '>
          {company}
        </h4>
        {/* COLOR */}
        <p className='mt-4 text-sm capitalize flex items-center gap-x-2'>
          color :
          <span
            className='badge badge-sm'
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className='sm:ml-12'>
        {/* Amount */}
        <div className='form-control max-w-xs'>
          <label htmlFor='amount' className='label p-0'>
            <span className='label-text'>Amount</span>
          </label>
          <select name='amount' id='amount' className=''></select>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
