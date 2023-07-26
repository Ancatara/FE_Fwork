import React, { useState } from "react";
import { Link } from "react-router-dom";

export interface ConfirmRoleProps {}

export default function ConfirmRolePage(props: ConfirmRoleProps) {
  const [title, setTitle] = useState("Create Account");

  const handleClickA = () => {
    setTitle("Join as a customer");
  };
  const handleClickB = () => {
    setTitle("Join as a worker");
  };

  return (
    <div>
      <header className="fixed top-0 left-0 w-full" >
        <div className="container px-4 py-6 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            Fwork
          </Link>
        </div>
      </header>
      <body className="mx-96 my-14 pb-32 rounded-lg border-2 border-green-600 p-1">
        <h3 className="flex justify-center my-10 text-3xl font-bold dark:text-white">
          Join as a customer or worker
        </h3>
        <div className="flex justify-center space-x-2">
          <div className="flex items-center mx-2 px-10 py-10 border border-gray-200 rounded dark:border-gray-700">
            <input
              id="bordered-radio-1"
              type="radio"
              value=""
              name="bordered-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onClick={handleClickA}
            />
            <label
              htmlFor="bordered-radio-1"
              className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I'm a customer, hiring for a job
            </label>
          </div>
          <div className="flex items-center mx-2 px-10 py-10 border border-gray-200 rounded dark:border-gray-700 ">
            <input
              id="bordered-radio-2"
              type="radio"
              value=""
              name="bordered-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onClick={handleClickB}
            />
            <label
              htmlFor="bordered-radio-2"
              className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I'm a worker, looking for work
            </label>
          </div>
        </div>

        <a
          href="/register"
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-3xl text-sm w-2/3 px-5 py-2.5 text-center flex justify-center items-center mx-auto mt-8"
        >
          <button type="button">{title}</button>
        </a>

        <p className="text-center flex justify-center items-center mx-auto mt-10">
          Already have an account?{" "}
          <Link to="/register" className="text-green-500 hover:text-green-700">
            Log In
          </Link>
        </p>
      </body>
    </div>
  );
}
