import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  HiAcademicCap,
  HiCog,
  HiCurrencyDollar,
  HiOutlineArrowCircleLeft,
  HiOutlineBookmark,
  HiOutlineCurrencyDollar,
  HiOutlineDocumentReport,
  HiOutlineHome,
  HiOutlineLogout,
  HiOutlineSearch,
} from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col overflow-ellipsis">
        {/* <!-- Page content here --> */}
        <div className="flex justify-between items-center py-4 px-2">
          <button>
            <HiOutlineArrowCircleLeft className="w-8 h-8" />
          </button>
          <div className="flex justify-center items-center ">
            <div className="flex justify-center items-center input input-bordered mr-[27px]">
              <input className="outline-none" type="text" />
              <HiOutlineSearch className="w-8 h-8" />
            </div>
            <IoNotificationsOutline className="w-8 h-8" />
          </div>
        </div>
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-[#F2EAE1] text-base-content">
          <h2 className="text-xl text-center pl-2 ">
            <span className="border-l-8  border-yellow-300 mr-5"></span> CRUD
            OPERATIONS
          </h2>
          <div>
            <div className="avatar pt-5 lg:pt-10 flex justify-center">
              <div className="w-28 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <p className="text-center text-lg font-semibold pt-7">
              Karthi Madesh
            </p>
            <p className="text-center text-[#FEAF00] pb-8">Admin</p>
          </div>
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link className="my-1" to="/dashboard">
              <HiOutlineHome /> Home
            </Link>
          </li>
          <li>
            <Link className="my-1" to="/dashboard/course">
              <HiOutlineBookmark /> Course
            </Link>
          </li>
          <li>
            <Link className="my-1" to="/dashboard/students">
              {" "}
              <HiAcademicCap /> Students
            </Link>
          </li>
          <li>
            <Link className="my-1" to="/dashboard/payment">
              {" "}
              <HiOutlineCurrencyDollar /> Payment
            </Link>
          </li>
          <li>
            <Link className="my-1" to="/dashboard/report">
              <HiOutlineDocumentReport /> Report
            </Link>
          </li>
          <li>
            <Link className="my-1" to="/dashboard/setting">
              {" "}
              <HiCog /> Settings
            </Link>
          </li>
          <button className="flex justify-evenly  items-center lg:text-lg  lg:pt-5">
            Logout <HiOutlineLogout />
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
