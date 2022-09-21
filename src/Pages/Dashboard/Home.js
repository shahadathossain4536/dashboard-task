import React from "react";
import {
  HiAcademicCap,
  HiCog,
  HiCurrencyDollar,
  HiOutlineArrowCircleLeft,
  HiOutlineBookmark,
  HiOutlineCurrencyDollar,
  HiOutlineDocumentReport,
  HiOutlineHome,
} from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
const Home = () => {
  return (
    <div className=" mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="w-[255px] h-[157px] bg-[#F0F9FF] rounded-lg">
          <div className="pt-5 pl-5">
            <HiAcademicCap className="w-[48px] h-[38px] text-[#74C1ED]" />
            <p>Students</p>
          </div>
          <p className="font-semibold text-[30px] text-end pr-6 pt-3">243</p>
        </div>
        <div className="w-[255px] h-[157px] bg-[#FEF6FB] rounded-lg">
          <div className="pt-5 pl-5">
            <HiOutlineBookmark className="w-[48px] h-[38px] text-[#EE95C5]" />
            <p>Course</p>
          </div>
          <p className="font-semibold text-[30px] text-end pr-6 pt-3">13</p>
        </div>
        <div className="w-[255px] h-[157px] bg-[#FEFBEC] rounded-lg">
          <div className="pt-5 pl-5">
            <HiCurrencyDollar className="w-[48px] h-[38px] text-[#F6C762]" />
            <p>Payments</p>
          </div>
          <p className="font-semibold text-[30px] text-end pr-6 pt-3">
            <span className="text-xs">INR</span> 556,000
          </p>
        </div>
        <div className="w-[255px] h-[157px] bg-gradient-to-l to-[#FEAF00] from-[#F8D442] rounded-lg">
          <div className="pt-5 pl-5">
            <IoPersonOutline className="w-[48px] h-[38px] text-white" />
            <p className="text-white">Users</p>
          </div>
          <p className="font-semibold text-[30px] text-end pr-6 pt-3">3</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
