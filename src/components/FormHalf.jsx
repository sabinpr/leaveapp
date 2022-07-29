import React from 'react'

export const FormHalf = () => {
  return (
    <div className='form-container'>
      <form action='#'>
        <div className='leave-form'>
          <div className='input-box'>
            <span className='details'>Leave Type</span>
            <input type={'text'} placeholder='Select Leave Type' required></input>
          </div>
          <div className='select-time'>
            <input type={'radio'} name='time' id='dot-1'></input>
            <input type={'radio'} name='time' id='dot-2'></input>
            <span className='time-range'>Time Range</span>
            <div className='time-category'>
              <label for="dot-1">
                <span className='dot one'></span>
                <span className='Select-half'>First Half</span>
              </label>
              <label for="dot-2">
                <span className='dot two'></span>
                <span className='Select-half'>Second Half</span>
              </label>
            </div>
          </div>
          <div className='input-box'>
            <span className='details'>Project Manager</span>
            <input type={'text'} placeholder='Select Project Manager' required></input>
          </div>
          <div className='input-box'>
            <span className='details'>Date</span>
            <input type={'Date'} placeholder='Select Leave Type' required></input>
          </div>
          <div className='reason-field'>
            <span className='details'>Reason</span>
            <textarea required></textarea>
          </div>
        </div>
        <div className='button1'>
          <input className='apply' type={'submit'} value='Apply'></input>
          <input className='cancel' type={'reset'} value='Cancel'></input>
        </div>
      </form>
    </div>
  )
}
