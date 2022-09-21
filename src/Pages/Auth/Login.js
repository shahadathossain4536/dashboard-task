import React from "react";

const Login = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500">
      <div className="flex justify-center items-center py-16">
        <div className="w-[475px]  bg-base-100 shadow-xl rounded-xl p-8">
          <div className="">
            <h2 className="text-3xl lg:text-4xl text-center pl-2 ">
              <span className="border-l-8  border-yellow-300 mr-5"></span> CRUD
              OPERATIONS
            </h2>
            <p className="uppercase text-center text-2xl mt-10 font-semibold">
              Signin
            </p>
            <p className="text-center pt-[9px]">
              Enter your credentials to access your account
            </p>
            <form className="pt-[50px]">
              {/* Email */}
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered rounded-md w-full "
                />
              </div>
              {/* Email */}
              {/* password */}
              <div className="form-control w-full pt-[20px]">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered rounded-md w-full "
                />
              </div>
              {/* password */}
              <button className="btn uppercase btn-warning text-white w-full rounded-md text-xl mt-[30px]">
                Sing in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
