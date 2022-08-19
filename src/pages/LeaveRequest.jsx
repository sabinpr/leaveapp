import React from 'react'
import RequestsAll from '../components/RequestsAll'
import UserProfile from '../components/UserProfile'


const LeaveRequest = () => {
    return (
        <>
            <div className='content-header'>
                <h1>Leave Requests</h1>
                <UserProfile />
            </div>
            <div className="content">
                <div className="content-main">
                    <ul className='content-main-card'>
                        <li>
                            <RequestsAll />
                        </li>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default LeaveRequest