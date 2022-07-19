import React from 'react';
const Apply = () => {
  return (
    <div className="content">
      <div className="content-main">
        <h1>Apply for Leave</h1>
        <div className='content-info'>
          <div className='content-info-type'>
            <div className='leave-types'>
              Pending Leaves
            </div>
            <div className='leave-types'>
              <div className='leave-types-border'>Approved Leaves</div>
            </div>
            <div className='leave-types'>
              Rejected Leaves
            </div>
          </div>
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