// import React from "react";
// import Stats from "./stats";

// export default function Home() {
//   return (
//     <>
//       <div className="">
//         <div className="flex flex-col text-center m-8 gap-12">
//           <img src="/gdsc.svg" alt="TEXT" className="h-20 w-100" />
//           <p className="text-6xl">RCOEM CHAPTER</p>
//           <div className="mx-auto border-2 rounder-xl p-8">
//             <img src="/team.svg" alt="TEAM" className="h-120 w-120" />
//           </div>
//           <p className="mx-auto w-1/2">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Reprehenderit vel officia, neque expedita aliquid reiciendis est.
//             Distinctio ratione ut saepe, inventore officia esse obcaecati
//             voluptas? Iusto tenetur corporis quis. Culpa blanditiis, eveniet
//             earum iste aperiam quas cumque dolor ut. Possimus.
//           </p>
//         </div>
//         <div className="flex w-full justify-center gap-32">
//           <div className="flex-2/3 rounded-xl border-2 p-12">
//             <p className="text-6xl mb-4">Join GDSC RCOEM</p>
//             <p className="text-2xl mb-4">
//               Catch this year's keynotes, technical sessions, and on-demand
//               learning sessions.
//             </p>
//             <button className="bg-green-600 rounded-lg p-4 text-xl border-2 rounded-sm border-black text-black">
//               Join Community
//             </button>
//           </div>
//           <div className="flex-1/3 rounded-xl border-2 p-12 bg-white text-black">
//             <p className="text-4xl mb-4">
//               Get to the know <br /> the Team
//             </p>
//             <button className="bg-blue-600 rounded-lg p-4 text-xl border-2 rounded-sm border-black">
//               Explore Team
//             </button>
//           </div>
//         </div>
//       </div>
//       <Stats />
//     </>
//   );
// }

import React from "react";
import Stats from "./stats";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="flex flex-col text-center m-8 gap-12">
        <img src="/gdsc.svg" alt="TEXT" className="h-20 w-100 mx-auto" />
        <p className="text-4xl sm:text-6xl mx-auto">RCOEM CHAPTER</p>
        <div className="mx-auto border-2 rounded-xl p-4 sm:p-8">
          <img
            src="/team.svg"
            alt="TEAM"
            className="h-120 w-120 sm:h-120 sm:w-120 mx-auto"
          />
        </div>
        <p className="mx-auto w-full sm:w-4/5 text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          vel officia, neque expedita aliquid reiciendis est. Distinctio ratione
          ut saepe, inventore officia esse obcaecati voluptas? Iusto tenetur
          corporis quis. Culpa blanditiis, eveniet earum iste aperiam quas
          cumque dolor ut. Possimus.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row w-full justify-center gap-4 sm:gap-32">
        <div className="flex-1 sm:flex-2/3 rounded-xl border-2 p-4 sm:p-12">
          <p className="text-4xl sm:text-6xl mb-2 sm:mb-4">Join GDSC RCOEM</p>
          <p className="text-lg sm:text-2xl mb-2 sm:mb-4">
            Catch this year's keynotes, technical sessions, and on-demand
            learning sessions.
          </p>
          <button className="bg-green-600 rounded-lg p-2 sm:p-4 text-lg sm:text-xl border-2 rounded-sm border-black text-black">
            Join Community
          </button>
        </div>
        <div className="flex-1 sm:flex-1/3 rounded-xl border-2 p-4 sm:p-12 bg-white text-black">
          <p className="text-2xl sm:text-4xl mb-2 sm:mb-4">
            Get to know <br className="sm:hidden" /> the Team
          </p>
          <button className="bg-blue-600 rounded-lg p-2 sm:p-4 text-lg sm:text-xl border-2 rounded-sm border-black">
            Explore Team
          </button>
        </div>
      </div>
      <Stats />
    </div>
  );
}
