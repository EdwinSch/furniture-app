import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <footer>&copy; 2025</footer>
    </div>
  );
};
export default RootLayout;
