import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
const Update = () => {
  const [startDate, setStartDate] = useState(new Date());
  const formattedDate = format(startDate, "PP");

  const { id } = useParams();
  const [student, setStudent] = useState({});
  console.log(student);

  useEffect(() => {
    const url = `https://aqueous-cliffs-52735.herokuapp.com/students/${id}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setStudent(data));
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phoneNumber = event.target.phoneNumber.value;
    const enrollNumber = event.target.enrollNumber.value;
    // const dateOfAdmission = event.target.dateOfAdmission.value;

    console.log(name, email, phoneNumber, enrollNumber, formattedDate);

    fetch(`https://aqueous-cliffs-52735.herokuapp.com/students/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        name,
        email,
        phoneNumber,
        enrollNumber,
        formattedDate,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  return (
    <div className="">
      <div className=" w-96 mx-auto py-10 bg-gray-200 rounded-lg my-5">
        <h1 className="text-center text-4xl">Update Student Data</h1>
        <form className="p-10 " onSubmit={handleUpdate}>
          <div className="flex justify-between items-center py-1">
            <p className="mr-10 font-semibold">Name</p>
            <input
              className=" bg-transparent border-gray-500 border-[1px] rounded-md py-2"
              name="name"
              type="text"
              defaultValue={student.name}
            />
          </div>
          <div className="flex justify-between items-center py-1">
            <p className="mr-10 font-semibold">Email</p>
            <input
              className=" bg-transparent border-gray-500 border-[1px] rounded-md py-2"
              name="email"
              type="email"
              defaultValue={student.email}
            />
          </div>
          <div className="flex justify-between items-center py-1">
            <p className="mr-10 font-semibold">Phone</p>
            <input
              className=" bg-transparent border-gray-500 border-[1px] rounded-md py-2"
              name="phoneNumber"
              type="text"
              defaultValue={student.phoneNumber}
            />
          </div>
          <div className="flex justify-between items-center py-1">
            <p className="mr-10 font-semibold">Enroll Number</p>
            <input
              className=" bg-transparent border-gray-500 border-[1px] rounded-md py-2"
              name="enrollNumber"
              type="text"
              defaultValue={student.enrollNumber}
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
          <button
            type="Submit"
            className="px-4 py-2 bg-yellow-500 text-white w-full rounded-md cursor-pointer"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
