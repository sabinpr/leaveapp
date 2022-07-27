import React from 'react'
import pp1 from '../images/pp1.png'
import pp2 from '../images/pp2.png'
import pp3 from '../images/pp3.png'
import pp4 from '../images/pp4.png'

const LeaveToday = () => {
    return (
        <div className='leave-today'>
            <h3>Who’s on leave today?</h3>
            <div className='leave-profile-lists'>
                <ul>
                    <li>
                        <div className='user-profile-pic'>
                            <img src={pp1} alt='user'></img>
                        </div>
                        <div className='user-profile-description'>
                            <p className='user-profile-name'>Emma Smith</p>
                            <p className='user-profile-post'>Software Engineer</p>
                        </div>
                    </li>
                    <li>
                        <div className='user-profile-pic'>
                            <img src={pp2} alt='user'></img>
                        </div>
                        <div className='user-profile-description'>
                            <p className='user-profile-name'>Emma Smith</p>
                            <p className='user-profile-post'>Software Engineer</p>
                        </div>
                    </li>
                    <li>
                        <div className='user-profile-pic'>
                            <img src={pp3} alt='user'></img>
                        </div>
                        <div className='user-profile-description'>
                            <p className='user-profile-name'>Emma Smith</p>
                            <p className='user-profile-post'>Software Engineer</p>
                        </div>
                    </li>
                    <li>
                        <div className='user-profile-pic'>
                            <img src={pp4}  alt='user'></img>
                        </div>
                        <div className='user-profile-description'>
                            <p className='user-profile-name'>Emma Smith</p>
                            <p className='user-profile-post'>Software Engineer</p>
                        </div>
                    </li>
                    <li>
                        <div className='user-profile-pic'>
                            <img src={pp1}  alt='user'></img>
                        </div>
                        <div className='user-profile-description'>
                            <p className='user-profile-name'>Emma Smith</p>
                            <p className='user-profile-post'>Software Engineer</p>
                        </div>
                    </li>
                    <li>
                        <div className='user-profile-pic'>
                            <img src={pp2} alt='user'></img>
                        </div>
                        <div className='user-profile-description'>
                            <p className='user-profile-name'>Emma Smith</p>
                            <p className='user-profile-post'>Software Engineer</p>
                        </div>
                    </li>
                    <li>
                        <div className='user-profile-pic'>
                            <img src={pp3} alt='user'></img>
                        </div>
                        <div className='user-profile-description'>
                            <p className='user-profile-name'>Emma Smith</p>
                            <p className='user-profile-post'>Software Engineer</p>
                        </div>
                    </li>
                    <li>
                        <div className='user-profile-pic'>
                            <img src={pp4} alt='user'></img>
                        </div>
                        <div className='user-profile-description'>
                            <p className='user-profile-name'>Emma Smith</p>
                            <p className='user-profile-post'>Software Engineer</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LeaveToday