import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const handelPageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  return (
    <div className='mt-16 flex justify-end'>
      <div className='join'>
        <button
          className='bnt btn-xs sm:btn-md join-item'
          onClick={() => {
            let prevPageNO = page - 1;

            handelPageChange('prev');
          }}
        >
          Prev
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              onClick={() => handelPageChange(pageNumber)}
              className={`btn btn-xs sm:btn-md border-none join-item ${
                pageNumber === page ? 'btn-active' : ''
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className='bnt btn-xs sm:btn-md join-item'
          onClick={() => handelPageChange('next')}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default PaginationContainer;
