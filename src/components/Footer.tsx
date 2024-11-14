import { NavLink } from "react-router-dom";
import { FaJournalWhills } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";
import { FaMountain } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
// import WeekCalendar from "./Journal/WeekCalendar";
import Logo from "./framerMotion/Logo";

const activeStyles = {
  backgroundColor: "#4F4277",
  fontWeight: "bold",
};

export default function Footer() {
  return (
    <footer className="bg-main w-[8vw]">
      <nav className="flex h-full flex-col items-center justify-center gap-6 rounded-3xl bg-babyBlue text-base shadow-[11px_-5px_31px_-12px_rgba(0,_0,_0,_0.35)] sm:gap-4 sm:text-sm">
        <Logo />
        <NavLink
          className="hover:bg-buttonHover flex flex-col-reverse items-center rounded-lg p-4 transition duration-300 hover:text-white"
          to="/"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          <FaJournalWhills size={25} />
        </NavLink>
        <NavLink
          className="hover:bg-buttonHover flex flex-col-reverse items-center rounded-lg p-4 transition duration-300 hover:text-white"
          to="/progress"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          <FaBarsProgress size={25} />
        </NavLink>
        <NavLink
          className="hover:bg-buttonHover flex flex-col-reverse items-center rounded-lg p-4 transition duration-300 hover:text-white"
          to="/challanges"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          <FaMountain size={25} />
        </NavLink>
        <NavLink
          className="hover:bg-buttonHover flex flex-col-reverse items-center rounded-lg p-4 transition duration-300 hover:text-white"
          to="/settings"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          <IoSettingsSharp size={25} />
        </NavLink>
      </nav>
    </footer>
  );
}
