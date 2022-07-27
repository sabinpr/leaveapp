import React from 'react'
import toggle3 from './Toggle3';
const Popup3 = () => {
    return (
        <div>
            <div className='popup-top popup-colors2'>
                <p>Approved Leave<i className='close-details' onClick={toggle3} class='bx bx-x'></i></p>
            </div>
            <div className='popup-content'>
                <div className='leave-type'>Sick Leave</div>
                <div className='leave-name'><i class='bx bx-calendar'></i>07/19/2022</div>
                <div className='leave-name'><i class='bx bx-time-five'></i>Half Day | First Half</div>
                <div className='popup-reason'>
                    <div className='reason-head'>Reason for leave of absence:</div>
                    <div className='reason-details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dgnissim eros commodo vestibulum ullamcorper ut ultricies augue cras eget.</div>                                       
                </div>
            </div>
        </div>
    )
}

export default Popup3