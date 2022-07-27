import React from 'react'
import pp1 from '../images/pp1.png'
const UserProfile = () => {
    return (
        <div className="user-profile">
            <div className='user-profile-pic'>
                <img src={pp1}></img>
            </div>
            <div className='user-profile-description'>
                <p className='user-profile-name'>Emma Smith</p>
                <p className='user-profile-post'>Software Engineer</p>
            </div>
        </div>
    )
}

export default UserProfile