import React from 'react';
import { Link } from 'react-router-dom';
import { FormFull } from '../components/FormFull';
import { FormHalf } from '../components/FormHalf';
const Apply = () => {
  return (
    <div className="content">
      <div className="content-main">
        <h1>Apply for Leave</h1>
        <div className='content-info'>
          <div className='content-info-type'>
            <div className='leave-types'>
              <div className='leave-par1'>
                02
              </div>
              Pending Leaves

            </div>
            <div className='leave-types'>
              <div className='leave-types-border'>
                <div className='leave-par2'>
                  06
                </div>
                Approved Leaves
              </div>
            </div>
            <div className='leave-types'>
              <div className='leave-par3'>
                03
              </div>
              Rejected Leaves
            </div>
          </div>
        </div>
        <div className='content-form'>
          <h2>Leave Application</h2>
          <div className='form-type'>
            <ul>
              <li><Link to='/apply'>Full Day Leave</Link></li>
              <li><Link to='/apply'>Half Day Leave</Link></li>
            </ul>
          </div>
          <FormFull/>
          <FormHalf/>
        </div>
      </div>
      <div className="content-right">
        <div className="user-profile">
          Sabin Prajapati
        </div>
        <div className="todays-leave">

        </div>
      </div>
    </div>
  );
};

export default Apply;