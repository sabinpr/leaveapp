import React from 'react'

const Cards = () => {
  return (
    <div className='container-properties'>
      <div className='card-container'>
        <ul>
          <li>
            <div className='card'>
              <ul>
                <li className='card-left'>
                  <i class='bx bx-calendar bx1'></i>
                  <div className='total-leave'>Total : 12 Days</div>
                </li>
                <li className='card-right'>
                  <div className='days-no'>06</div>
                  <div className='leave-type-card'>Annual Leave</div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className='card'>
              <ul>
                <li className='card-left'>
                  <i class='bx bx-calendar bx2'></i>
                  <div className='total-leave'>Total : 12 Days</div>
                </li>
                <li className='card-right'>
                  <div className='days-no'>03</div>
                  <div className='leave-type-card'>Sick Leave</div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className='card'>
              <ul>
                <li className='card-left'>
                  <i class='bx bx-calendar bx3'></i>
                </li>
                <li className='card-right'>
                  <div className='days-no'>02</div>
                  <div className='leave-type-card'>Emergency Leave</div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div className='card'>
              <ul>
                <li className='card-left'>
                  <i class='bx bx-calendar bx4'></i>
                </li>
                <li className='card-right'>
                  <div className='days-no'>01</div>
                  <div className='leave-type-card'>Bereavement Leave</div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className='card'>
              <ul>
                <li className='card-left'>
                  <i class='bx bx-calendar bx5'></i>
                  <div className='total-leave'>Total : 12 Days</div>
                </li>
                <li className='card-right'>
                  <div className='days-no'>02</div>
                  <div className='leave-type-card'>Personal Leave</div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className='card'>
              <ul>
                <li className='card-left'>
                  <i class='bx bx-calendar bx6'></i>
                  <div className='total-leave'>Total : 12 Days</div>
                </li>
                <li className='card-right'>
                  <div className='days-no'>04</div>
                  <div className='leave-type-card'>Casual Leave</div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Cards