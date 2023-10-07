import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';

const Profile = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.users.userDetails);

  useEffect(() => {
    if (_.isEmpty(user)) {
      localStorage.clear();
      navigate('/login');
    }
  }, [navigate, user]);

  return (
    <div className='mt-16'>
      {_.isEmpty(user) ? (
        'Goto login'
      ) : (
        <div className='bg-slate-100 w-4/12 mx-auto flex flex-col gap-4 rounded-md shadow-lg p-4'>
          <div className='flex justify-center'>
            <img
              src={user.image}
              alt='user'
              className='rounded-full shadow-md'
            />
          </div>
          <h2 className='text-center text-lg font-semibold'>
            {user.firstName}&nbsp;
            {user.lastName}
          </h2>
          <p className='capitalize text-center'>{user.gender}</p>
          <p className='capitalize text-center'>{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
