import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import CBSlogo from "../Assets/CBS-logo-white.png";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activitiesOpen, setActivitiesOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#" },
    {
      name: "Activities",
      href: "#",
      subItems: [
        { name: "Biznation", href: "#" },
        { name: "Career Expo", href: "#" },
        { name: "Intern", href: "#" },
        { name: "NeoTalk", href: "#" },
      ],
    },
    { name: "Hall of Fame", href: "#" },
    { name: "Publications", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Team", href: "#" },
  ];

  const openSideBar = () => {
    setSidebarOpen(true);
  };

  const closeSideBar = () => {
    setSidebarOpen(false);
    setActivitiesOpen(false); // Close sub-items when sidebar is closed
  };

  const toggleActivities = () => {
    setActivitiesOpen(!activitiesOpen);
  };

  return (
    <div>
      {/* Desktop Navbar */}
      <nav className="flex h-16 justify-between items-center p-4 bg-[#800000] shadow-md text-white">
        <img className="w-10 cursor-pointer" src={CBSlogo} alt="logo" />
        <ul className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group">
              <a
                className="hover:text-gray-200 hover:border-b-2 hover:border-gray-200 py-2 px-4 transition duration-300"
                href={item.href}
              >
                {item.name}
              </a>
              {item.subItems && (
                <ul className="absolute z-50 left-0 w-48 mt-4 bg-white shadow-lg rounded-sm py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.name}>
                      <a
                        href={subItem.href}
                        className="text-gray-800 hover:bg-[#800000] hover:text-white py-1 px-4 block"
                      >
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <MenuIcon
            className="w-6 h-6 cursor-pointer text-white"
            onClick={openSideBar}
          />
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-[#800000] shadow-md transform z-50 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col items-start p-4 space-y-4">
          <li onClick={closeSideBar}>
            <XIcon className="w-6 h-6 cursor-pointer text-white" />
          </li>
          {menuItems.map((item) => (
            <li key={item.name} className="relative">
              <a
                className="text-white hover:text-gray-200 py-2 px-4 transition duration-300 flex justify-between items-center w-full"
                href={item.subItems ? "#" : item.href}
                onClick={item.subItems ? toggleActivities : undefined}
              >
                {item.name}
                {item.subItems && (
                  <span
                    className={`ml-2 text-xs transform transition-transform ${
                      activitiesOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                )}
              </a>
              {item.subItems && activitiesOpen && (
                <ul className="pl-4 mt-2 space-y-2">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.name}>
                      <a
                        href={subItem.href}
                        className="text-white hover:text-gray-200 py-1 px-4 block"
                      >
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
