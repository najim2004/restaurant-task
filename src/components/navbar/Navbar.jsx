import { NavLink } from "react-router-dom";
import { Container } from "../Container";
import logo from "../../assets/logo.svg";

export const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      <Container>
        <nav className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-[60px]">
            <div className="flex items-center space-x-[6px]">
              <img src={logo} alt="Restaurant logo" className="h-10 w-10" />
              <span className="text-white font-semibold text-[28px]">
                Restau<span className="font-normal">rant</span>
              </span>
            </div>

            <div className="hidden md:flex text-sm font-medium items-center space-x-10 text-white">
              <NavLink to="#" isActive>
                Home
              </NavLink>
              <NavLink to="#">About</NavLink>
              <NavLink to="#">Portfolio</NavLink>
              <NavLink to="#">Clients</NavLink>
              <NavLink to="#">Blog</NavLink>
              <NavLink to="#">Contact</NavLink>
            </div>
          </div>

          <button className="bg-primary text-black px-6 py-[10px] flex items-center justify-center font-bold hover:bg-yellow-500 transition-colors">
            BOOK A TABLE
          </button>
        </nav>
      </Container>
    </div>
  );
};
