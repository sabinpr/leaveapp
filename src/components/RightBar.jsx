import React from 'react'
import LeaveReminder from './LeaveReminder'
import LeaveToday from './LeaveToday'

const RightBar = () => {
  return (
    <>
      <div className="content-right">
        <LeaveReminder />
        <LeaveToday />
      </div>
    </>
  )
}

export default RightBar