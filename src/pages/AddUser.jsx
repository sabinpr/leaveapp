import React from 'react';
import UserProfile from '../components/UserProfile';
import Registration from './Registration';
const AddUser = () => {
  return (
    <>
      <div className='content-header'>
        <h1>Add Employee</h1>
        <UserProfile />
      </div>
      <div className="content">
        <div className="content-main">
          <div className='content-form'>
            <Registration />
          </div>
        </div>

      </div>
    </>
  );
};

export default AddUser;