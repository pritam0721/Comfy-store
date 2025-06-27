import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductList';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState('grid');
  const selectActiveStyle = (pattern) => {
    return `text-xl btn btn-circle btn-sm${
      pattern === layout
        ? 'btn-primary text-primary-content'
        : 'btn-ghost text-base-content'
    }`;
  };
  return (
    <>
      {/*HEADER*/}
      <div className='flex justify-between items-center mt-8 border-base-300 pb-5'>
        <h4 className='font-medium text-md'>
          {totalProducts} product{totalProducts > 1 && 's'}
        </h4>
        <div className='flex gap-x-2'>
          <button
            onClick={() => setLayout('grid')}
            className={selectActiveStyle('grid')}
          >
            <BsFillGridFill />
          </button>
          <button
            onClick={() => setLayout('list')}
            className={selectActiveStyle('list')}
          >
            <BsList />
          </button>
        </div>
      </div>
      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5 className='text-2xl mt-16'>
            sorry , no products matched your search....
          </h5>
        ) : layout === 'grid' ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
