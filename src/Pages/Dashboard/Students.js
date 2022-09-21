import React from "react";
import { IoCodeOutline } from "react-icons/io5";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
const Students = () => {
  return (
    <div className="bg-slate-100 h-screen">
      <div className="flex justify-between items-center mt-3 px-3 border-b-2 pb-4">
        <h2 className="text=[22px] font-semibold">Students List</h2>
        <div className="flex justify-around items-center">
          <IoCodeOutline className="mr-10 rotate-90 text-yellow-500 w-6 h-6" />
          <button className="bg-yellow-400 px-4 py-2 text-white font-semibold rounded-md modal-button">
            <label
              htmlFor="my-modal-3"
              className="modal-button  cursor-pointer"
            >
              {" "}
              ADD NEW STUDENT
            </label>
          </button>
        </div>
      </div>
      {/* <!-- The button to open modal --> */}

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      {/* modal */}
      <div className="modal ">
        <div className="modal-box relative bg-[#D9D9D9] ">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-3xl font-bold">Add / Edit Student</h3>
          <form className="py-10">
            <div className="flex justify-between items-center py-1">
              <p className="mr-10 font-semibold">Name</p>
              <input
                className=" bg-transparent border-gray-500 border-[1px] rounded-md py-2"
                type="text"
              />
            </div>
            <div className="flex justify-between items-center py-1">
              <p className="mr-10 font-semibold">Email</p>
              <input
                className=" bg-transparent border-gray-500 border-[1px] rounded-md py-2"
                type="email"
              />
            </div>
            <div className="flex justify-between items-center py-1">
              <p className="mr-10 font-semibold">Phone</p>
              <input
                className=" bg-transparent border-gray-500 border-[1px] rounded-md py-2"
                type="text"
              />
            </div>
            <div className="flex justify-between items-center py-1">
              <p className="mr-10 font-semibold">Enroll Number</p>
              <input
                className=" bg-transparent border-gray-500 border-[1px] rounded-md py-2"
                type="text"
              />
            </div>
            <div className="flex justify-between items-center py-1">
              <p className="mr-10 font-semibold">Date of admission</p>
              <input
                className=" bg-transparent border-gray-500 border-[1px] rounded-md py-2"
                type="text"
              />
            </div>
            <div className="flex justify-between items-center pt-5">
              <p></p>
              <button
                type="Submit"
                className="px-4 py-2 bg-yellow-500 text-white w-full rounded-md "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* modal */}
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* <!-- head --> */}
          <thead>
            <tr className="text-gray-400">
              <th className="py-4">Name</th>
              <th className="py-4">Email</th>
              <th className="py-4">Phone</th>
              <th className="py-4">Enroll Number</th>
              <th className="py-4">Date of admission</th>
              <th className="py-4"></th>
              <th className="py-4"></th>
              <th className="py-4"></th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr className="bg-white text-center border-y-4 border-slate-100">
              <td className="py-6 text-lg">Karthi</td>
              <td className="py-6 text-lg">karthi@gmmail.com</td>
              <td className="py-6 text-lg">7305477760</td>
              <td className="py-6 text-lg">1234567305477760</td>
              <td className="py-6 text-lg">08-Dec, 2021</td>
              <td className="py-6 text-lg text-yellow-500">
                <HiOutlinePencil />
              </td>
              <td className="py-6 text-lg text-yellow-500">
                <HiOutlineTrash />
              </td>
            </tr>
            {/* <!-- row 2 --> */}
            <tr className="bg-white text-center border-y-4 border-slate-100">
              <td className="py-6 text-lg">Karthi</td>
              <td className="py-6 text-lg">karthi@gmmail.com</td>
              <td className="py-6 text-lg">7305477760</td>
              <td className="py-6 text-lg">1234567305477760</td>
              <td className="py-6 text-lg">08-Dec, 2021</td>
              <td className="py-6 text-lg text-yellow-500">
                <HiOutlinePencil />
              </td>
              <td className="py-6 text-lg text-yellow-500">
                <HiOutlineTrash />
              </td>
            </tr>
            {/* <!-- row 3 --> */}
            <tr className="bg-white text-center border-y-4 border-slate-100">
              <td className="py-6 text-lg">Karthi</td>
              <td className="py-6 text-lg">karthi@gmmail.com</td>
              <td className="py-6 text-lg">7305477760</td>
              <td className="py-6 text-lg">1234567305477760</td>
              <td className="py-6 text-lg">08-Dec, 2021</td>
              <td className="py-6 text-lg text-yellow-500">
                <HiOutlinePencil />
              </td>
              <td className="py-6 text-lg text-yellow-500">
                <HiOutlineTrash />
              </td>
            </tr>
            <tr className="bg-white text-center border-y-4 border-slate-100">
              <td className="py-6 text-lg">Karthi</td>
              <td className="py-6 text-lg">karthi@gmmail.com</td>
              <td className="py-6 text-lg">7305477760</td>
              <td className="py-6 text-lg">1234567305477760</td>
              <td className="py-6 text-lg">08-Dec, 2021</td>
              <td className="py-6 text-lg text-yellow-500">
                <HiOutlinePencil />
              </td>
              <td className="py-6 text-lg text-yellow-500">
                <HiOutlineTrash />
              </td>
            </tr>
            <tr className="bg-white text-center border-y-4 border-slate-100">
              <td className="py-6 text-lg">Karthi</td>
              <td className="py-6 text-lg">karthi@gmmail.com</td>
              <td className="py-6 text-lg">7305477760</td>
              <td className="py-6 text-lg">1234567305477760</td>
              <td className="py-6 text-lg">08-Dec, 2021</td>
              <td className="py-6 text-lg text-yellow-500">
                <HiOutlinePencil />
              </td>
              <td className="py-6 text-lg text-yellow-500">
                <HiOutlineTrash />
              </td>
            </tr>
            <tr className="bg-white text-center border-y-4 border-slate-100">
              <td className="py-6 text-lg">Karthi</td>
              <td className="py-6 text-lg">karthi@gmmail.com</td>
              <td className="py-6 text-lg">7305477760</td>
              <td className="py-6 text-lg">1234567305477760</td>
              <td className="py-6 text-lg">08-Dec, 2021</td>
              <td className="py-6 text-lg text-yellow-500">
                <HiOutlinePencil />
              </td>
              <td className="py-6 text-lg text-yellow-500">
                <HiOutlineTrash />
              </td>
            </tr>
            <tr className="bg-white text-center border-y-4 border-slate-100">
              <td className="py-6 text-lg">Karthi</td>
              <td className="py-6 text-lg">karthi@gmmail.com</td>
              <td className="py-6 text-lg">7305477760</td>
              <td className="py-6 text-lg">1234567305477760</td>
              <td className="py-6 text-lg">08-Dec, 2021</td>
              <td className="py-6 text-lg text-yellow-500">
                <HiOutlinePencil />
              </td>
              <td className="py-6 text-lg text-yellow-500">
                <HiOutlineTrash />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
