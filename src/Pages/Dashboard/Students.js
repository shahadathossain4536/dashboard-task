import React, { useState } from "react";
import { IoCodeOutline } from "react-icons/io5";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import { useEffect } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
const Students = () => {
  const [students, setStudents] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const formattedDate = format(startDate, "PP");
  const [isReload, setIsReload] = useState(false);
  const [oneStudent, setOneStudent] = useState([]);
  console.log(formattedDate);
  useEffect(() => {
    fetch("https://aqueous-cliffs-52735.herokuapp.com/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, [isReload]);

  const handleAddStudent = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const phoneNumber = event.target.phoneNumber.value;
    const enrollNumber = event.target.enrollNumber.value;
    // const dateOfAdmission = event.target.dateOfAdmission.value;

    console.log(name, email, phoneNumber, enrollNumber, formattedDate);

    fetch("https://aqueous-cliffs-52735.herokuapp.com/students", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        phoneNumber,
        enrollNumber,
        dateOfAdmission: formattedDate,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setIsReload(!isReload);
      });

    event.target.reset();
  };
  // handleDelete
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      const url = ` https://aqueous-cliffs-52735.herokuapp.com/students/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = students.filter((item) => item._id !== id);
            setStudents(remaining);
          }
        });
    }
  };
  // handleDelete

  // -----------------------------------------------------handleUpdate----------------------------------------------------------------
  const handleUpdate = (id) => {
    console.log(id);
  };
  // -----------------------------------------------------handleUpdate----------------------------------------------------------------
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
          <form className="py-10" onSubmit={handleAddStudent}>
            <div className="flex justify-between items-center py-1">
              <p className="mr-10 font-semibold">Name</p>
              <input
                className=" bg-transparent border-gray-500 border-[1px] rounded-md py-2"
                name="name"
                type="text"
              />
            </div>
            <div className="flex justify-between items-center py-1">
              <p className="mr-10 font-semibold">Email</p>
              <input
                className=" bg-transparent border-gray-500 border-[1px] rounded-md py-2"
                name="email"
                type="email"
              />
            </div>
            <div className="flex justify-between items-center py-1">
              <p className="mr-10 font-semibold">Phone</p>
              <input
                className=" bg-transparent border-gray-500 border-[1px] rounded-md py-2"
                name="phoneNumber"
                type="text"
              />
            </div>
            <div className="flex justify-between items-center py-1">
              <p className="mr-10 font-semibold">Enroll Number</p>
              <input
                className=" bg-transparent border-gray-500 border-[1px] rounded-md py-2"
                name="enrollNumber"
                type="text"
              />
            </div>
            <div className="flex justify-between items-center py-1">
              <p className="mr-10 font-semibold">Date of admission</p>

              <DatePicker
                className="bg-transparent border-gray-500 border-[1px] rounded-md py-2"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
              {/* <input
                className=" bg-transparent border-gray-500 border-[1px] rounded-md py-2"
                name="dateOfAdmission"
                type="text"
              /> */}
            </div>
            <div className="flex justify-between items-center pt-5">
              <p></p>
            </div>
            <div className="modal-action">
              <button type="Submit">
                {" "}
                <label
                  htmlFor="my-modal-3"
                  className="px-4 py-2 bg-yellow-500 text-white w-full rounded-md cursor-pointer"
                >
                  Submit
                </label>
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* modal */}

      {/* update modal */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box relative bg-[#D9D9D9] ">
          <label
            htmlFor="my-modal-4"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-3xl font-bold">Edit Student Data</h3>
          <form className="py-10" onSubmit={handleAddStudent}>
            <div className="flex justify-between items-center py-1">
              <p className="mr-10 font-semibold">Name</p>
              <input
                className=" bg-transparent border-gray-500 border-[1px] rounded-md py-2"
                name="name"
                type="text"
              />
            </div>
            <div className="flex justify-between items-center py-1">
              <p className="mr-10 font-semibold">Email</p>
              <input
                className=" bg-transparent border-gray-500 border-[1px] rounded-md py-2"
                name="email"
                type="email"
              />
            </div>
            <div className="flex justify-between items-center py-1">
              <p className="mr-10 font-semibold">Phone</p>
              <input
                className=" bg-transparent border-gray-500 border-[1px] rounded-md py-2"
                name="phoneNumber"
                type="text"
              />
            </div>
            <div className="flex justify-between items-center py-1">
              <p className="mr-10 font-semibold">Enroll Number</p>
              <input
                className=" bg-transparent border-gray-500 border-[1px] rounded-md py-2"
                name="enrollNumber"
                type="text"
              />
            </div>
            <div className="flex justify-between items-center py-1">
              <p className="mr-10 font-semibold">Date of admission</p>

              <DatePicker
                className="bg-transparent border-gray-500 border-[1px] rounded-md py-2 "
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
              {/* <input
                className=" bg-transparent border-gray-500 border-[1px] rounded-md py-2"
                name="dateOfAdmission"
                type="text"
              /> */}
            </div>
            <div className="flex justify-between items-center pt-5">
              <p></p>
            </div>
            <div className="modal-action">
              <button type="Submit">
                {" "}
                <label
                  htmlFor="my-modal-4"
                  className="px-4 py-2 bg-yellow-500 text-white w-full rounded-md cursor-pointer"
                >
                  Update
                </label>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* update modal */}
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
            {students.map((student) => (
              <tr className="bg-white text-center border-y-4 border-slate-100">
                <td className="py-6 text-lg">{student.name}</td>
                <td className="py-6 text-lg">{student.email}</td>
                <td className="py-6 text-lg">{student.phoneNumber}</td>
                <td className="py-6 text-lg">{student.enrollNumber}</td>
                <td className="py-6 text-lg">{student.dateOfAdmission}</td>
                <td
                  htmlFor="my-modal-4"
                  onClick={() => handleUpdate(student._id)}
                  className="py-6 text-lg text-yellow-500 cursor-pointer"
                >
                  <Link to={`/update/${student._id}`} className="">
                    <button className=" btn btn-info mx-auto w-100 text-white">
                      <HiOutlinePencil />
                    </button>
                  </Link>
                </td>
                <td
                  onClick={() => handleDelete(student._id)}
                  className="py-6 text-lg text-yellow-500 cursor-pointer"
                >
                  <HiOutlineTrash />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
