import React from 'react'

export const FormFull = () => {
  return (
    <div className='form-container'>
      <form action='#'>
        <div className='leave-form'>
          <div className='input-box'>
            <span className='details'>Leave Type</span>
            <input type={'text'} placeholder='Select Leave Type' required></input>
          </div>
          <div className='input-box'>
            <span className='details'>Project Manager</span>
            <input type={'text'} placeholder='Select Project Manager' required></input>
          </div>
          <div className='input-box'>
            <span className='details'>From</span>
            <input type={'Date'} required></input>
          </div>
          <div className='input-box'>
            <span className='details'>To</span>
            <input type={'date'} required></input>
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
