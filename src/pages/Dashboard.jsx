import React from 'react';
import Cards from '../components/Cards';
import toggle1 from '../components/Toggle1';
import toggle2 from '../components/Toggle2';
import toggle3 from '../components/Toggle3';
import toggle4 from '../components/Toggle4';
import toggle5 from '../components/Toggle5';
import toggle6 from '../components/Toggle6';
import UserProfile from '../components/UserProfile';

const Dashboard = () => {
  return (
    <>
      <div className='content-header'>
        <h1>Dashboard</h1>
        <UserProfile />
      </div>
      <div className="content">
        <div className="content-main">
          <div className="content-top">
            <div className="content-main">
              <Cards />
            </div>
          </div>
          <div className="content-bottom">
            <h2>Leave Balance</h2>
            <div className="table-wrapper">
              <table className="table">
                <thead className="thead">
                  <tr>
                    <th scope="col">SN</th>
                    <th scope="col">Leave Type</th>
                    <th scope="col">From</th>
                    <th scope="col">To</th>
                    <th scope="col">Time Range</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr >
                    <th scope="row">1</th>
                    <td>Sick Leave</td>
                    <td>10 July</td>
                    <td>-</td>
                    <td>Full Day</td>
                    <td>Pending</td>
                    <td><a className='view-details' href='/#' onClick={toggle1}>View</a></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Sick Leave</td>
                    <td>10 July</td>
                    <td>12 July</td>
                    <td>Full Day</td>
                    <td>Pending</td>
                    <td><a className='view-details' href='/#' onClick={toggle2}>View</a></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Sick Leave</td>
                    <td>10 July</td>
                    <td>-</td>
                    <td>Full Day</td>
                    <td>Approved</td>
                    <td><a className='view-details' href='/#' onClick={toggle3}>View</a></td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Sick Leave</td>
                    <td>10 July</td>
                    <td>12 July</td>
                    <td>Full Day</td>
                    <td>Approved</td>
                    <td><a className='view-details' href='/#' onClick={toggle4}>View</a></td>
                  </tr>
                  {/* <tr>
                    <th scope="row">5</th>
                    <td>Sick Leave</td>
                    <td>10 July</td>
                    <td>12 July</td>
                    <td>Full Day</td>
                    <td>Approved</td>
                    <td><a className='view-details' href='/#' onClick={toggle5}>View</a></td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Sick Leave</td>
                    <td>10 July</td>
                    <td>12 July</td>
                    <td>Full Day</td>
                    <td>Approved</td>
                    <td><a className='view-details' href='/#' onClick={toggle6}>View</a></td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;