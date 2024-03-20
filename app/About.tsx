import aboutGif from "../public/giphy1.gif";
import Image from "next/image";
import Stats from "./stats";

export default function About() {
  return (
    <>
      {/* Team2 image for mobile */}
      <div className="hidden md:flex justify-center absolute top-1/2 left-60 z-10">
        <Image src="/team2.svg" alt="Small Image" width={320} height={320} />
      </div>

      {/* Blue container */}
      <div className="flex flex-col justify-center items-center h-screen gap-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl mt-2">About Us</h1>
        </div>
        <div className="flex justify-center">
          <div className="bg-blue-500 rounded-2xl px-4 md:p-20 max-w-screen-lg w-full text-center relative">
            {/* Text appears above on mobile */}
            <div className="md:flex md:flex-col md:items-center md:gap-8">
              <h1 className="text-white text-start md:text-5xl ml-8 mb-4">
                Our mission involves community engagement, leadership
                development, building strong tech foundation, while enabling all
                tech enthusiasts to contribute to the global society.
              </h1>
              {/* GIF displays below text on mobile */}
              <div className="md:hidden">
                <Image
                  src={aboutGif}
                  alt="About GIF"
                  width={200}
                  height={200}
                />
              </div>
            </div>

            {/* GIF displays below text on larger screens */}
            <div className="hidden md:block absolute bottom-2 right-2">
              <img src={aboutGif.src} alt="Small Image" className="h-48 w-48" />
            </div>
          </div>
        </div>
      </div>

      {/* Team2 image for mobile */}
      <div className="md:hidden flex justify-center absolute top-60 w-full z-10">
        <Image src="/team2.svg" alt="Small Image" width={200} height={200} />
      </div>

      {/* <Stats /> */}
    </>
  );
}
