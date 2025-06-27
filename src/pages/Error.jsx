import { useRouteError, Link } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <main className='grid min-h-[100vh] place-items-center px-8'>
        <div className='text-center'>
          {/* This might be required change later */}
          <p className='text-9xl font-semibold text-secondary'>404</p>
          <h1 className='text-3xl font-semibold tracking-tight sm:text-5xl'>
            Page Not Found
          </h1>
          <p className='mt-6 text-lg leading-7'>
            The page you are looking for does not exist.
          </p>
          <div className='mt-10'>
            <Link to='/' className='btn btn-secondary'>
              Go to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className='gird min-h-[100vh] place-items-center px-8'>
      <div className='text-center'></div>
    </main>
  );
};

export default Error;
