import { Form, Link } from 'react-router-dom';
import { FromInput, SubmitBtn } from '../components';

const Register = () => {
  return (
    <section className='h-screen grid place-items-center '>
      <Form
        method='POST'
        className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
      >
        <h4 className='text-center text-3xl font-bold'>Register</h4>
        <FromInput type='text' label='username' name='name' />
        <FromInput type='email' label='email' name='identifier' />
        <FromInput type='password' label='password' name='password' />
        <div className='mt-4'>
          <SubmitBtn text='Register' />
        </div>
        <p className='text-center'>
          Already a member?
          <Link
            to='/login'
            className='ml-2 link link-hover link-primary capitalize'
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
