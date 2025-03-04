import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <footer>footer</footer>
    </div>
  );
};
export default RootLayout;
