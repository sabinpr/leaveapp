import React from 'react'
import pp1 from '../images/pp1.png'

const RequestsAll = () => {
    return (
        <>

            <div className='popup-content'>
                <div className='popup-top-request'>
                    <div className="user-profiles">
                        <div className='user-profile-pic'>
                            <img src={pp1} alt='user'></img>
                        </div>
                        <div className='user-profile-description'>
                            <p className='user-profile-name'>Emma Smith</p>
                            <p className='user-profile-post'>Software Engineer</p>
                        </div>
                    </div>
                </div>
                <div className='leave-type'>Sick Leave</div>
                <div className='leave-name'><i class='bx bx-calendar'></i>07/19/2022</div>
                <div className='leave-name'><i class='bx bx-time-five'></i>Half Day | First Half</div>
                <div className='popup-reason'>
                    <div className='reason-head'>Reason for leave of absence:</div>
                    <div className='reason-details'>Lorem ipsum dolor sit amet.</div>
                </div>
                <div className='button-align-design'>
                    <button type="button" class="button-design-all button-design-approve">Approve</button>
                    <button type="button" class="button-design-all button-design-reject">Reject</button>
                </div>
            </div>
        </>
    )
}

export default RequestsAll