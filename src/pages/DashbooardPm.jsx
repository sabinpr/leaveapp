import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Cards from '../components/Cards';
import toggle1 from '../components/Toggle1';
import toggle2 from '../components/Toggle2';
import toggle3 from '../components/Toggle3';
import toggle4 from '../components/Toggle4';
import toggle5 from '../components/Toggle5';
import toggle6 from '../components/Toggle6';
import UserProfile from '../components/UserProfile';
import LeaveData from '../Data/LeaveData.json';

const DashboardPm = () => {
    const [datas] = useState(LeaveData.slice(0, 12));
    const [pageNumber, setPageNumber] = useState(0);

    const datasPerPage = 4
    const pagesVisited = pageNumber * datasPerPage

    const displayDatasAll = datas
        .slice(pagesVisited, pagesVisited + datasPerPage)
        .map((data) => {
            let toggle
            if (data.timerange === "Full Day") {
                if (data.status === "Pending") {
                    toggle = toggle2
                }
                else if (data.status === "Approved") {
                    toggle = toggle4
                }
                else {
                    toggle = toggle6
                }
            } else {
                if (data.status === "Pending") {
                    toggle = toggle1
                }
                else if (data.status === "Approved") {
                    toggle = toggle3
                }
                else {
                    toggle = toggle5
                }
            }
            return (

                <tr >
                    <td>{data.sn}</td>
                    <td>Emma</td>
                    <td>Smith</td>
                    <td>07</td>
                    <td><a className='view-details' href='/pm/#' onClick={toggle}>View</a></td>
                </tr>
            );
        });

    const displayDatasLeave = datas
        .slice(pagesVisited, pagesVisited + datasPerPage)
        .map((data) => {
            let statusClass

            if (data.status === "Pending") {
                statusClass = "status-pending"
            }
            else if (data.status === "Approved") {
                statusClass = "status-accepted"
            }
            else {
                statusClass = "status-rejected"
            }

            return (

                <tr >
                    <td>{data.sn}</td>
                    <td>Emma</td>
                    <td>Smith</td>
                    <td>{data.leavetype}</td>
                    <td>{data.from}</td>
                    <td>{data.to}</td>
                    <td><span className={statusClass}>{data.status}</span></td>
                </tr>
            );
        });

    const displayDatasSelf = datas
        .slice(pagesVisited, pagesVisited + datasPerPage)
        .map((data) => {
            let toggle
            let statusClass
            if (data.timerange === "Full Day") {
                if (data.status === "Pending") {
                    toggle = toggle2
                    statusClass = "status-pending"
                }
                else if (data.status === "Approved") {
                    toggle = toggle4
                    statusClass = "status-accepted"
                }
                else {
                    toggle = toggle6
                    statusClass = "status-rejected"
                }
            } else {
                if (data.status === "Pending") {
                    toggle = toggle1
                    statusClass = "status-pending"
                }
                else if (data.status === "Approved") {
                    toggle = toggle3
                    statusClass = "status-accepted"
                }
                else {
                    toggle = toggle5
                    statusClass = "status-rejected"
                }
            }
            return (

                <tr >
                    <td>{data.sn}</td>
                    <td>{data.leavetype}</td>
                    <td>{data.from}</td>
                    <td>{data.to}</td>
                    <td>{data.timerange}</td>
                    <td><span className={statusClass}>{data.status}</span></td>
                    <td><a className='view-details' href='/pm/#' onClick={toggle}>View</a></td>
                </tr>
            );
        });

    const pageCount = Math.ceil(datas.length / datasPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

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
                        <div className='table-toggle'>
                            <ul className="nav nav-tabs" role="tablist">
                                <li role="presentation"><a href="#tab-01" className='active' aria-controls="tab-01" role="tab" data-toggle="tab">All Members</a></li>
                                <li role="presentation"><a href="#tab-02" aria-controls="tab-02" role="tab" data-toggle="tab">Member’s Leaves</a></li>
                                <li role="presentation"><a href="#tab-03" aria-controls="tab-03" role="tab" data-toggle="tab">My Leaves</a></li>
                            </ul>
                        </div>
                        <div class="tab-content">
                            <div role="tabpanel" className="tab-pane active" id="tab-01">
                                <div className="table-wrapper">
                                    <table className="table borderless">
                                        <thead>
                                            <tr>
                                                <th scope="col">SN</th>
                                                <th scope="col">First Name</th>
                                                <th scope="col">Last Name</th>
                                                <th scope="col">Leave Count</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {displayDatasAll}
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
                            <div role="tabpanel" className="tab-pane" id="tab-02">
                                <div className="table-wrapper">
                                    <table className="table borderless">
                                        <thead>
                                            <tr>
                                                <th scope="col">SN</th>
                                                <th scope="col">First Name</th>
                                                <th scope="col">Last Name</th>
                                                <th scope="col">Leave Type</th>
                                                <th scope="col">From</th>
                                                <th scope="col">To</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {displayDatasLeave}

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
                            <div role="tabpanel" className="tab-pane" id="tab-03">
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
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {displayDatasSelf}

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
                </div>
            </div>
        </>
    );
};

export default DashboardPm;