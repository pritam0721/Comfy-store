import { Form, Link, useLoaderData } from 'react-router-dom';
import FromInput from './FromInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckBox from './FormCheckBox';

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, company, category, shipping, price, order } = params;
  return (
    <Form className='bg-base-200 px-8 py-8 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      {/* SEARCH */}
      <FromInput
        type='search'
        label='search product'
        name='search'
        size='input-sm'
        defaultValue={search}
      />
      {/* CATEGORY */}
      <FormSelect
        label='select category'
        name='category'
        list={meta.categories}
        size='select-sm'
        defaultValue={category}
      />
      {/* COMPANY */}
      <FormSelect
        label='select company'
        name='company'
        list={meta.companies}
        size='select-sm'
        defaultValue={company}
      />
      {/* ORDER  */}
      <FormSelect
        label='sort by'
        name='order'
        list={['a-z', 'z-a', 'high', 'low']}
        size='select-sm'
        defaultValue={order}
      />
      {/* PRICE RANGE */}
      <FormRange
        name='price'
        label='select price'
        size='range-sm'
        price={price}
      />

      {/* SHIPPING */}
      <FormCheckBox
        name='shipping'
        label='free shipping'
        size='checkbox-sm'
        defaultValue={shipping}
      />

      {/* BUTTONS */}

      <button type='submit' className='btn btn-primary btn-sm capitalize'>
        search
      </button>
      <Link to={`/products`} className='btn btn-accent btn-sm capitalize'>
        reset
      </Link>
    </Form>
  );
};
export default Filters;
