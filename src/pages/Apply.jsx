import React from 'react';
import { FormFull } from '../components/FormFull';
import { FormHalf } from '../components/FormHalf';
import UserProfile from '../components/UserProfile';
const Apply = () => {
  return (
    <>
      <div className='content-header'>
        <h1>Apply for Leave</h1>
        <UserProfile />
      </div>
      <div className="content">
        <div className="content-main">
          <div className='content-form'>
            <div className='form-type'>
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation"><a href="#tab-01" className='active' aria-controls="tab-01" role="tab" data-toggle="tab">Full Day Leave</a></li>
                <li role="presentation"><a href="#tab-02" aria-controls="tab-02" role="tab" data-toggle="tab">Half Day Leave</a></li>
              </ul>
            </div>
            <div class="tab-content">
              <div role="tabpanel" className="tab-pane active" id="tab-01">
                <FormFull />
              </div>
              <div role="tabpanel" className="tab-pane" id="tab-02">
                <FormHalf />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Apply;