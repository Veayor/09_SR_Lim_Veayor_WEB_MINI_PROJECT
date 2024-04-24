import React from "react";
import Image from "next/image";

const RegisterPage = () => {
  return (
    <div className="max-w-[1400px] mx-auto  my-">
       {/* Logo */}
       <div className="flex justify-between pt-12 mx-8">
       <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
       <Image src={"/assets/icons/arrow.svg"} width={25} height={30} />
     </div>
      <div className="flex ">
        <div className="w-[800px]">
          
          <div className=" mt-10  0 rounded-lg">
            <div className="p-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="my-2">
                  <label htmlFor=""> First Name: </label>
                  <input
                    type="Name"
                    name="firstName"
                    className="mt-1 block w-full rounded-md border border-slate-300 bg-slate-200 px-3 py-4 placeholder-slate-600 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                    placeholder="Enter your name.."
                  />
                </div>
                <div className="my-2">
                  <label htmlFor=""> Last Name: </label>
                  <input
                    type="name"
                    name="lastName"
                    className="mt-1 block w-full rounded-md border border-slate-300 bg-slate-200 px-3 py-4 placeholder-slate-600 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                    placeholder="Enter your name.."
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="my-2">
                  <label htmlFor=""> Email: </label>
                  <input
                    type="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border border-slate-300 bg-slate-200 px-3 py-4 placeholder-slate-600 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                    placeholder="info@gmail.com"
                  />
                </div>
                <div className="my-2">
                  <label htmlFor=""> Mobile No: </label>
                  <input
                    type="mobile"
                    name="mobileNumber"
                    className="mt-1 block w-full rounded-md border border-slate-300 bg-slate-200 px-3 py-4 placeholder-slate-600 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                    placeholder=" +97 98769 54320"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="my-2">
                  <label htmlFor=""> Password: </label>
                  <input
                    type="password"
                    name="password"
                    className="mt-1 block w-full rounded-md border border-slate-300 bg-slate-200 px-3 py-4 placeholder-slate-600 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                    placeholder="xxxxxxxxx"
                  />
                </div>
                <div className="my-2">
                  <label htmlFor=""> Confirm Password: </label>
                  <input
                    type="password"
                    name="comfirmPassword"
                    className="mt-1 block w-full rounded-md border border-slate-300 bg-slate-200 px-3 py-4 placeholder-slate-600 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                    placeholder="xxxxxxxxx"
                  />
                </div>
              </div>
              <div className="my-4">
                <button className="cursor-pointer rounded-xl bg-blue-700 px-8 py-2 ">
                  <a className="text-sm font-semibold text-white">
                    Sign Up 
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[600px] px-4 my-4">
            <img src="/assets/icons/sign-up.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;