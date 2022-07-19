import React from 'react';

const Dashboard = () => {
  return (
    <div className="content">
      <div className="content-top">
        <div className="content-main">
          <h1>Dashboard</h1>
        </div>
        <div className="content-right">
          <div className="user-profile">
            Sabin Prajapati
          </div>
          <div className="leave-reminder">

          </div>
          <div className="todays-leave">

          </div>
        </div>
      </div>
      <div className="content-bottom">
        <h2>Leave Balance</h2>
        <div className="table-wrapper">
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">SN</th>
                <th scope="col">Leave Type</th>
                <th scope="col">Leave Duration</th>
                <th scope="col">Time Range</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr >
                <th scope="row">1</th>
                <td>Sick Leave</td>
                <td>10 July-12 July</td>
                <td>Full Day</td>
                <td>Approved</td>
                <td>View</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Sick Leave</td>
                <td>10 July-12 July</td>
                <td>Full Day</td>
                <td>Approved</td>
                <td>View</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Sick Leave</td>
                <td>10 July-12 July</td>
                <td>Full Day</td>
                <td>Approved</td>
                <td>View</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Sick Leave</td>
                <td>10 July-12 July</td>
                <td>Full Day</td>
                <td>Approved</td>
                <td>View</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Sick Leave</td>
                <td>10 July-12 July</td>
                <td>Full Day</td>
                <td>Approved</td>
                <td>View</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Sick Leave</td>
                <td>10 July-12 July</td>
                <td>Full Day</td>
                <td>Approved</td>
                <td>View</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;