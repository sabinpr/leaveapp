import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Cards from "../components/Cards";
import toggle1 from "../components/Toggle1";
import toggle2 from "../components/Toggle2";
import toggle3 from "../components/Toggle3";
import toggle4 from "../components/Toggle4";
import toggle5 from "../components/Toggle5";
import toggle6 from "../components/Toggle6";
import UserProfile from "../components/UserProfile";
import LeaveData from "../Data/LeaveData.json";
import { getLeaveBalance } from "../components/auth/leaveApi";

const Dashboard = () => {
  const [datas] = useState(LeaveData.slice(0, 12));
  const [pageNumber, setPageNumber] = useState(0);

  const datasPerPage = 4;
  const pagesVisited = pageNumber * datasPerPage;

  const [leaveBalance, setLeaveBalance] = useState([]);

  useEffect(async () => {
    const result = await getLeaveBalance();
    //  console.log(result);
    setLeaveBalance(result);
  }, []);
  const displayDatas = datas
    .slice(pagesVisited, pagesVisited + datasPerPage)
    .map((data) => {
      let toggle;
      let statusClass;
      if (data.timerange === "Full Day") {
        if (data.status === "Pending") {
          toggle = toggle2;
          statusClass = "status-pending";
        } else if (data.status === "Approved") {
          toggle = toggle4;
          statusClass = "status-accepted";
        } else {
          toggle = toggle6;
          statusClass = "status-rejected";
        }
      } else {
        if (data.status === "Pending") {
          toggle = toggle1;
          statusClass = "status-pending";
        } else if (data.status === "Approved") {
          toggle = toggle3;
          statusClass = "status-accepted";
        } else {
          toggle = toggle5;
          statusClass = "status-rejected";
        }
      }
      return (
        <tr>
          <td>{data.sn}</td>
          <td>{data.leavetype}</td>
          <td>{data.from}</td>
          <td>{data.to}</td>
          <td>{data.timerange}</td>
          <td>
            <span className={statusClass}>{data.status}</span>
          </td>
          <td>
            <a className="view-details" href="/#" onClick={toggle}>
              View
            </a>
          </td>
        </tr>
      );
    });

  const pageCount = Math.ceil(datas.length / datasPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="content-header">
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
              <table className="table borderless">
                <thead>
                  <tr>
                    <th scope="col">SN</th>
                    <th scope="col">Leave Type</th>
                    <th scope="col">From</th>
                    <th scope="col">To</th>
                    <th scope="col">Time Range</th>
                    <th scope="col">Status</th>
                    {/* <th scope="col">Action</th> */}
                  </tr>
                </thead>
                <tbody>
                  {leaveBalance.length > 0 &&
                    leaveBalance.map((item, i) => {
                      return (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{item.leaveType}</td>
                          <td>
                            {new Date(item.startDate).toLocaleDateString()}
                          </td>
                          <td>{new Date(item.endDate).toLocaleDateString()}</td>
                          <td>
                            {Math.round(
                              (new Date(item.endDate) -
                                new Date(item.startDate)) /
                                (1000 * 60 * 60 * 24)
                            )}
                          </td>
                          <td>{item.status}</td>
                        </tr>
                      );
                    })}
                  {/* {displayDatas} */}
                </tbody>
              </table>
              <ReactPaginate
                previousLabel={"< Prev"}
                nextLabel={"Next >"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"pagination-bttns"}
                previousLinkClassName={"previous-bttn"}
                nextLinkClassName={"next-bttn"}
                disabledClassName={"pagination-disabled"}
                activeClassName={"pagination-active"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
