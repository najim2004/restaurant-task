import { Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
