import React from 'react'

export const FormFull = () => {
  return (
    <div className='form-container'>
      <form action='#'>
        <div className='leave-form'>
        <div className="select-type">
            <input type={"radio"} name="type" id="dot-1"></input>
            <input type={"radio"} name="type" id="dot-2"></input>
            <input type={"radio"} name="type" id="dot-3"></input>
            <input type={"radio"} name="type" id="dot-4"></input>
            <input type={"radio"} name="type" id="dot-5"></input>
            <input type={"radio"} name="type" id="dot-6"></input>
            <span className="details">Leave Type</span>
            <div className="type-category">
              <label for="dot-1">
                <span className="dot one"></span>
                <span className="select-leave">Annual Leave</span>
              </label>
              <label for="dot-2">
                <span className="dot two"></span>
                <span className="select-leave">Sick Leave</span>
              </label>
              <label for="dot-3">
                <span className="dot three"></span>
                <span className="select-leave">Emergency Leave</span>
              </label>
            </div>
            <div className="type-category">
              <label for="dot-4">
                <span className="dot four"></span>
                <span className="select-leave">Bereavement Leave</span>
              </label>
              <label for="dot-5">
                <span className="dot five"></span>
                <span className="select-leave">Personal Leave</span>
              </label>
              <label for="dot-6">
                <span className="dot six"></span>
                <span className="select-leave">Casual Leave</span>
              </label>
            </div>
          </div>
          <div className='input-box'>
            <span className='details'>From</span>
            <input type={'date'} required></input>
          </div>
          <div className='input-box'>
            <span className='details'>To</span>
            <input type={'date'}></input>
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
