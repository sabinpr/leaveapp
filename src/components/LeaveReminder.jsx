import React from 'react'

const LeaveReminder = () => {
    return (
        <div className='leave-reminder'>
            <h3>Leave Remainder</h3>
            <div className='reminder-type'>
                <ul className='reminder-list'>
                    <li className='reminder-list-components'>
                        <i class='bx bxs-circle bx-orange'></i>
                        <div>
                            <h4>Bereavement Leave</h4>
                            <p className='reminder-date'>07/05/2022 - 09/05/2022</p>
                            <p className='reminder-leave-type'>Full Day</p>
                            <p className='reminder-days-togo'>2 days to go</p>
                        </div>
                    </li>
                    <li className='reminder-list-components'>
                        <i class='bx bxs-circle bx-blue'></i>
                        <div>
                            <h4>Annual Leave</h4>
                            <p className='reminder-date'>07/05/2022 - 09/05/2022</p>
                            <p className='reminder-leave-type'>Full Day</p>
                            <p className='reminder-days-togo'>3 days to go</p>
                        </div>
                    </li>
                    <li className='reminder-list-components'>
                        <i class='bx bxs-circle bx-blue'></i>
                        <div>
                            <h4>Annual Leave</h4>
                            <p className='reminder-date'>07/05/2022 - 09/05/2022</p>
                            <p className='reminder-leave-type'>Full Day</p>
                            <p className='reminder-days-togo'>3 days to go</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default LeaveReminder