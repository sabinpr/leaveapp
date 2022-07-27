import React from 'react'
import toggle2 from './Toggle2';
const Popup2 = () => {
    return (
        <div>
            <div className='popup-top popup-colors1'>
                <p>Pending Leave<i className='close-details' onClick={toggle2} class='bx bx-x'></i></p>
            </div>
            <div className='popup-content'>
                <div className='leave-type'>Sick Leave</div>
                <div className='leave-name'><i class='bx bx-calendar'></i>07/19/2022-07/23/2022</div>
                <div className='leave-name'><i class='bx bx-calendar-check'></i>4 Days</div>
                <div className='leave-name'><i class='bx bx-time-five'></i>Full Day</div>
                <div className='popup-reason'>
                    <div className='reason-head'>Reason for leave of absence:</div>
                    <div className='reason-details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dgnissim eros commodo vestibulum ullamcorper ut ultricies augue cras eget.</div>                                       
                </div>
                <button type="button" class="button-design">Delete Leave Request</button>
            </div>
        </div>
    )
}

export default Popup2