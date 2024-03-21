import aboutGif from "../public/giphy1.gif";
import Image from "next/image";
import Stats from "./stats";
import Home from "./Home";
// import About from "./About";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
// import About from "./About";

export default function Page() {
  return (
    <>
      <nav className="flex items-center justify-between px-4 sticky top-0 bg-white z-10">
        <div className="flex items-center">
          <img src="/gdsclogo.svg" alt="Logo" className="h-20 w-80" />
        </div>
      </nav>
      <Home />
    </>
  );
}
