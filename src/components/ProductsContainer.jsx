import { useLoaderData } from 'react-router-dom';
import ProductList from './ProductList';
import ProductsGrid from './ProductsGrid';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useState } from 'react';
const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState('grid');
  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm transition duration-300 ${
      layout === pattern
        ? 'btn-primary text-primary-content'
        : 'btn-ghost text-base-content'
    }`;
  };
  return (
    <>
      {/* header */}
      <div className='flex justify-between items-center mt-8 border-base-300 pb-5'>
        <h4 className='font-medium text-base'>
          {totalProducts} product{totalProducts > 1 && 's'}
        </h4>
        <div className='flex gap-x-2'>
          <button
            onClick={() => setLayout('grid')}
            className={setActiveStyles('grid')}
          >
            <BsFillGridFill />
          </button>
          <button
            onClick={() => setLayout('list')}
            className={setActiveStyles('list')}
          >
            <BsList />
          </button>
        </div>
      </div>
      {/* products */}
      {totalProducts === 0 ? (
        <h5 className='text-2xl mt-16'>
          sorry, we no products matched your search ...
        </h5>
      ) : layout === 'grid' ? (
        <ProductsGrid />
      ) : (
        <ProductList />
      )}
    </>
  );
};
export default ProductsContainer;
