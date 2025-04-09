import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleToggle = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const pages = [
    {
      label: "User Profile",
      key: "user",
      subItems: ["Overview", "Projects", "Campaigns", "Documents", "Followers"]
    },
    {
      label: "Account",
      key: "account",
      subItems: []
    },
    {
      label: "Corporate",
      key: "corporate",
      subItems: []
    },
    {
      label: "Blog",
      key: "blog",
      subItems: []
    },
    {
      label: "Social",
      key: "social",
      subItems: []
    }
  ];

  return (
    <div className="w-[200px] border-r-1  border-r-gray-200 h-screen bg-gray-50">
      
      <div className="h-[80px] w-full px-5 py-5 flex items-center gap-2.5">
        <img className="h-full" src="/pfp.png" alt="profile pic" />
        <p className="text-zinc-800 font-semibold text-sm">Byewind</p>
      </div>

      <div className="flex justify-around px-2 py-1">
        <h4 className="text-center text-zinc-600 font-bold scale-105 cursor-pointer">
          Favourite
        </h4>
        <h4 className="text-center text-zinc-400 cursor-pointer">Recently</h4>
      </div>

      <div className="w-full flex flex-col py-4 px-4 gap-2">
        {["Overview", "Projects"].map((ele) => (
          <NavLink
            key={ele}
            
            className="flex items-center h-8 px-3.5 gap-2 text-zinc-700 hover:text-black"
          >
            <img className="h-2 opacity-40" src="/greydot.png" alt="" />
            {ele}
          </NavLink>
        ))}
      </div>

      <div className="px-4 mt-4 flex flex-col gap-2">
        <h4 className="text-zinc-400 font-semibold mb-2">Dashboards</h4>
        {
            ["Overview", "eCommerce", "Projects"].map(ele => (
            <NavLink
                key={ele}
                className="flex items-center gap-2 px-3 py-1.5 hover:bg-zinc-300 rounded-md transition duration-200 text-sm text-zinc-700">
                <svg viewBox="0 0 66.91 122.88" fill="currentColor" className="w-3 h-3 text-zinc-300">
                    <g>
                        <path d="M1.95,111.2c-2.65,2.72-2.59,7.08,0.14,9.73c2.72,2.65,7.08,2.59,9.73-0.14L64.94,66l-4.93-4.79l4.95,4.8
                        c2.65-2.74,2.59-7.11-0.15-9.76c-0.08-0.08-0.16-0.15-0.24-0.22L11.81,2.09c-2.65-2.73-7-2.79-9.73-0.14
                        C-0.64,4.6-0.7,8.95,1.95,11.68l48.46,49.55L1.95,111.2z" />
                    </g>
                </svg>
                <img className="h-5 w-5" src={`/${ele}.png`} alt="" />{ele}</NavLink>
            ))
        }
      </div>

      <div className="px-4 mt-4 flex flex-col gap-2">
        <h4 className="text-zinc-400 font-semibold mb-2">Pages</h4>
        {
          pages.map((menu) => (
            <div key={menu.key}>
              <div onClick={() => handleToggle(menu.key)} className="flex items-center gap-2 px-3 py-1.5 hover:bg-zinc-300 rounded-md cursor-pointer transition duration-200 text-sm text-zinc-700">
                <svg viewBox="0 0 66.91 122.88" fill="currentColor" className="w-3 h-3 text-zinc-300">
                  <g>
                    <path d="M1.95,111.2c-2.65,2.72-2.59,7.08,0.14,9.73c2.72,2.65,7.08,2.59,9.73-0.14L64.94,66l-4.93-4.79l4.95,4.8
                    c2.65-2.74,2.59-7.11-0.15-9.76c-0.08-0.08-0.16-0.15-0.24-0.22L11.81,2.09c-2.65-2.73-7-2.79-9.73-0.14
                    C-0.64,4.6-0.7,8.95,1.95,11.68l48.46,49.55L1.95,111.2z" />
                  </g>
                </svg>
                {menu.label}
              </div>
              {
                openMenu === menu.key && menu.subItems.length > 0 && (
                  <div className="ml-7 mt-1 flex flex-col gap-1">
                    {
                      menu.subItems.map((sub, i) => (
                        <NavLink key={i} className="ml-3.5 py-1.5 text-zinc-500 hover:text-black cursor-pointer">{sub}</NavLink>
                      ))
                    }
                  </div>
                )
              }
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Header;
