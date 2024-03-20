import React from "react";
import PastEvents from "./PastEvents";

const Stats = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 justify-items-center mt-40 mb-40">
        {/* Red Circle */}
        <div className="flex flex-col items-center gap-8">
          <div className="w-40 h-40 rounded-full bg-red-500 flex items-center justify-center text-white text-6xl font-bold hover:border-2 hover:border-white hover:outline-offset-4 transition duration-300">
            5+
          </div>
          <p className="mt-2 text-red-500 text-2xl font-bold">Years</p>
        </div>

        {/* Blue Circle */}
        <div className="flex flex-col items-center gap-8">
          <div className="w-40 h-40 rounded-full bg-blue-500 flex items-center justify-center text-white text-6xl font-bold hover:border-2 hover:border-white hover:outline-offset-2 transition duration-300">
            20+
          </div>
          <p className="mt-2 text-blue-500 text-2xl font-bold">Events</p>
        </div>

        {/* Green Circle */}
        <div className="flex flex-col items-center gap-8">
          <div className="w-40 h-40 rounded-full bg-green-500 flex items-center justify-center text-white text-6xl font-bold hover:border-2 hover:outline-offset-2 hover:border-white transition duration-300">
            1K+
          </div>
          <p className="mt-2 text-green-500 text-2xl font-bold">Community</p>
        </div>

        {/* Yellow Circle */}
        <div className="flex flex-col items-center gap-8">
          <div className="w-40 h-40 rounded-full bg-yellow-500 flex items-center justify-center text-white text-6xl font-bold hover:border-2 hover:outline-offset-2 hover:border-white hover:p-8 transition duration-300">
            10+
          </div>
          <p className="mt-2 text-yellow-500 text-2xl font-bold">
            Partnerships
          </p>
        </div>
      </div>
      <PastEvents />
    </>
  );
};

export default Stats;
