import React from 'react'
import toggle1 from './Toggle1';
const Popup1 = () => {
    return (
        <>
            <div className='popup-top popup-colors1'>
                <p>Pending Leave<i className='close-details' onClick={toggle1} class='bx bx-x'></i></p>
            </div>
            <div className='popup-content'>
                <div className='leave-type'>Sick Leave</div>
                <div className='leave-name'><i class='bx bx-calendar'></i>07/19/2022</div>
                <div className='leave-name'><i class='bx bx-time-five'></i>Half Day | First Half</div>
                <div className='popup-reason'>
                    <div className='reason-head'>Reason for leave of absence:</div>
                    <div className='reason-details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dgnissim eros commodo vestibulum ullamcorper ut ultricies augue cras eget.</div>                                       
                </div>
                <button type="button" class="button-design">Delete Leave Request</button>
            </div>
        </>
    )
}

export default Popup1