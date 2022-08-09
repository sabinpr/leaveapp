import React from 'react'
import MyProfile from '../components/MyProfile'
import UserProfile from '../components/UserProfile'

const Profile = () => {
  return (
    <>
      <div className='content-header'>
        <h1>My Profile</h1>
        <UserProfile />
      </div>
      <div className="content">
        <MyProfile />
      </div>
    </>
  )
}

export default Profile