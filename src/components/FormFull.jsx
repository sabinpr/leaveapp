import React from 'react'

export const FormFull = () => {
  return (
    <div className='form-elements'>
      <form className='form-apply'>
        <label>Leave Type</label>
        <select>
          <option>sick</option>
          <option>paid</option>
        </select>
        <div>
          <label>From</label>
          <input type={'date'} />
          <label>To</label>
          <input type={'date'} />
        </div>
        <div>
          <label>Reason</label>
          <input type={'text'}/>
        </div>
        <button>Cancel</button>
        <button>Submit</button>
      </form>
    </div>
  )
}
