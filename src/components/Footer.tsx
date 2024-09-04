import { NavLink } from "react-router-dom";
import { FaJournalWhills } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";
import { FaMountain } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import Logo from "./framerMotion/Logo";

const activeStyles = {
  color: "#fff",
  fontWeight: "bold",
};

export default function Footer() {
  return (
    <footer className="bg-main fixed bottom-0 w-full p-2">
      <nav className="flex h-full items-center justify-center gap-6 text-base sm:gap-4 sm:text-sm">
        <NavLink
          className="flex flex-col-reverse items-center p-1 transition duration-300 hover:text-white"
          to="/"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Journal
          <span>
            <FaJournalWhills size={22} />
          </span>
        </NavLink>
        <NavLink
          className="flex flex-col-reverse items-center p-1 transition duration-300 hover:text-white"
          to="/progress"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Progress
          <span>
            <FaBarsProgress size={22} />
          </span>
        </NavLink>
        <Logo />
        <NavLink
          className="flex flex-col-reverse items-center p-1 transition duration-300 hover:text-white"
          to="/challanges"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Challanges
          <span>
            <FaMountain size={22} />
          </span>
        </NavLink>
        <NavLink
          className="flex flex-col-reverse items-center p-1 transition duration-300 hover:text-white"
          to="/settings"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Settings
          <span>
            <IoSettingsSharp size={22} />
          </span>
        </NavLink>
      </nav>
    </footer>
  );
}
