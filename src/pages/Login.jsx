import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../redux/actions/authAction';

const Login = () => {
  const [formData, setFormData] = useState({
    username: 'kminchelle',
    password: '0lelplR',
  });

  const navigate = useNavigate();

  // username: 'kminchelle',
  //   password: '0lelplR',
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatch signIn action
    dispatch(signIn(formData));
    navigate('/');
  };

  const user = useSelector((state) => state.users.userDetails);
  const token = localStorage.getItem('jwt-token');

  useEffect(() => {
    if (!user || !token) {
      navigate('/login');
    } else {
      navigate('/all-products');
    }
  }, [token, user, navigate]);

  return (
    <section className='text-gray-600 body-font min-h-[80vh] flex justify-center items-center'>
      <div className='flex justify-center items-center'>
        <form
          onSubmit={handleSubmit}
          method='POST'
          className='bg-slate-200 p-6 shadow-lg rounded-md'>
          <h2 className='text-gray-900 text-lg font-medium title-font mb-5'>
            Sign Up
          </h2>
          <div className='relative mb-4'>
            <label
              htmlFor='userName'
              className='leading-7 text-sm text-gray-600'>
              Username
            </label>
            <input
              type='text'
              id='userName'
              name='userName'
              value={formData.username}
              onChange={handleChange}
              className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              required
            />
          </div>
          <div className='relative mb-4'>
            <label
              htmlFor='password'
              className='leading-7 text-sm text-gray-600'>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              required
              className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <button
            type='submit'
            className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-md'>
            Sign in
          </button>
          <p className='text-xs text-gray-500 mt-3'>
            Literally you probably haven't heard of them jean shorts.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
