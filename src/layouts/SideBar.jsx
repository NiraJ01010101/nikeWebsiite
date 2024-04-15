import {
  MoreVertical,
  ChevronLast,
  ChevronFirst,
  Home,
  ShoppingCart,
  Contact,
  Award,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { headerLogo } from "../assets/images";
export default function SideBar() {
  const [expanded, setExpanded] = useState(true);
  const sidebarList = [
    {
      label: "Home",
      url: "",
      icon: <Home size={20} />,
      show: true,
    },
    {
      label: "Shoping",
      url: "/shoping",
      icon: <ShoppingCart size={20} />,
      show: true,
    },
    {
      label: "Reviews",
      url: "/reviews",
      icon: <Award size={20} />,
      show: true,
    },
    {
      label: "Contact Us",
      url: "/contactUs",
      icon: <Contact size={20} />,
      show: false,
    },
  ];
  return (
    <aside className={`h-full flex flex-col bg-white border-r shadow-sm`}>
      <div className="p-4 pb-2 flex justify-between items-center">
        <img
          src={headerLogo}
          className={`overflow-hidden transition-all ${
            !expanded ? "w-32" : "w-0 "
          }`}
          alt=""
        />
        <button
          onClick={() => setExpanded((curr) => !curr)}
          className="p-1.5 rounded-lg bg-gray-50 hover:bg-orange-100 hover:transition-all "
        >
          {!expanded ? <ChevronFirst /> : <ChevronLast />}
        </button>
      </div>
      <ul className="flex-1 px-3 ">
        {sidebarList?.map((sideList, i) => {
          const { label, url, icon, show } = sideList;
          return (
            <>
              {show && (
                <NavLink
                  key={i}
                  to={url}
                  className={({ isActive }) =>
                    `relative flex items-center py-2 px-3 my-2 font-medium rounded-md cursor-pointer transition-colors group
                 ${
                   isActive
                     ? "bg-gradient-to-tr from-orange-200 to-orange-100 text-orange-800"
                     : "hover:bg-orange-50 text-gray-600"
                 }`
                  }
                >
                  <li className="flex items-center ">
                    {icon}
                    <span
                      className={`overflow-hidden transition-all ${
                        !expanded ? "w-52 ml-3" : "w-0"
                      }`}
                    >
                      {label}
                    </span>
                    {expanded && (
                      <div
                        className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-orange-100 text-orange-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 z-30
      `}
                      >
                        {label}
                      </div>
                    )}
                  </li>
                </NavLink>
              )}
            </>
          );
        })}
      </ul>

      <div className="border-t flex p-3">
        <img
          src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
          alt=""
          className="w-10 h-10 rounded-md"
        />
        <div
          className={`
              flex justify-between items-center
              overflow-hidden transition-all ${!expanded ? "w-52 ml-3" : "w-0"}
          `}
        >
          <div className="leading-4">
            <h4 className="font-semibold">John Doe</h4>
            <span className="text-xs text-gray-600">johndoe@gmail.com</span>
          </div>
          <MoreVertical size={20} />
        </div>
      </div>
    </aside>
  );
}
