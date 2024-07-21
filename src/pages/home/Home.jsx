import React from "react";
import Aside from "../../components/aside/Aside";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen md:space-x-7 space-y-7 md:space-y-0">
      <Aside />

      <div className="flex flex-1 items-center justify-center bg-[#F4F4F4] py-8 px-4 md:px-7 rounded-2xl">
        <div className="text-center w-full md:w-3/4 lg:w-2/3">
          <h1 className="font-medium text-3xl md:text-4xl">
            Welcome to ToDoPy
          </h1>

          <p className="font-normal text-md md:text-lg mt-6 md:mt-10">
            A to-do app is a simple, user-friendly digital tool designed to help
            individuals and teams organize tasks and manage their daily
            activities efficiently. Users can create, edit, and prioritize
            tasks, set deadlines or reminders, categorize items, and track their
            progress, all within an intuitive and accessible interface. These
            apps are essential for improving productivity, reducing stress, and
            ensuring that important responsibilities are not forgotten.
          </p>

          <button className="px-10 py-2 md:px-16 md:py-3 font-medium text-lg md:text-xl bg-lime-500 rounded-lg mt-6 md:mt-10">
            Go To Tasks
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
