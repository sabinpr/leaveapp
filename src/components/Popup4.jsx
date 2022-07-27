import React from 'react'
import toggle4 from './Toggle4';
const Popup4 = () => {
    return (
        <div>
            <div className='popup-top popup-colors2'>
                <p>Approved Leave<i className='close-details' onClick={toggle4} class='bx bx-x'></i></p>
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
            </div>
        </div>
    )
}

export default Popup4