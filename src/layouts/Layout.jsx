import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row font-poppins">
        <SideBar/>
        <div className="flex flex-col flex-1">
          <NavBar />
          <div className="flex-1 p-4 min-h-0 overflow-auto bg-white" style={{ height: 'calc(100vh - 60px)' }}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
