import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <nav>navbar</nav>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
};
export default RootLayout;
