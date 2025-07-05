import React from "react";
import { IoIosSearch } from "react-icons/io";
import { menuItems } from "../utils/Veriables";
import { useNavigate } from "react-router-dom";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";


const Sidebar = ({ collapse, setCollapse }) => {
  const navigate = useNavigate();
  const [openMenuId, setOpenMenuId] = React.useState(null);
  const [selectedMenuId, setSelectedMenuId] = React.useState("dashboard");


  return (
    <div className={`
      ${collapse ? 'w-[80px]' : 'w-[244px]'} 
      h-screen flex flex-col gap-[25px] items-center bg-[#FFF] px-[22px] transition-all duration-300
    `}>

      {/* Logo  */}
      <div className='flex items-center justify-center mt-[23px]'>
        <img src="/src/assets/dash_logo.png" alt="LevNext Logo" />
        {!collapse && (
          <div>
            <p className='font-[600] font-inter text-[20px] leading-[21px] text-[#0D141C]'>LevNext</p>
            <p className='font-[600] font-inter text-[16px] leading-[21px] text-[#737373]'>Connect</p>
          </div>
        )}
      </div>

      {/* Search  */}
      {!collapse && (
        <div className="rounded-[8px] w-full h-[47px] flex justify-between bg-[#E5EDF5] px-[15px] py-[12px]">
          <div className="w-full flex gap-[32px] items-center">
            <img
              src="/src/assets/search.svg"
              className="w-[24px] h-[24px] cursor-pointer"
            />
            <input
              className="border-none outline-none bg-[#E5EDF5] w-full font-poppins text-[14px] leading-[22px] text-[#A2A2A2]"
              placeholder="Search... "
            />
          </div>
        </div>
      )}

      {/* Menu  */}
      <div className='w-full flex flex-col gap-[22px]'>
        {menuItems.map((item) => {
          const hasChildren = item.children && item.children.length > 0;
          const isOpen = openMenuId === item.id;
          const DashboardIcon = item.icon;
          return (
            <div key={item.id} className="w-full">
              <div
                onClick={() => {
                  setSelectedMenuId(item.id);
                  if (hasChildren) {
                    setOpenMenuId(isOpen ? null : item.id);
                  } else {
                    navigate(item.path);
                  }
                }}
                className={` w-[201px] px-[23px] flex items-center ${collapse ? 'justify-center' : 'gap-[27px]'} cursor-pointer rounded-[8px]  ${selectedMenuId === item.id ? 'bg-[#0057A3] py-[14px]' : ''} `}
              >
              {/* <DashboardIcon className={`${selectedMenuId === item.id ? 'fill-[#FFF]' : 'fill-[#0D141C]'}`} /> */}

                <img src={item.icon} alt={item.label} />
                {!collapse && (
                  <p className={`text-[#0D141C] font-inter text-[15px] leading-[21px] font-[500]  ${selectedMenuId === item.id ? 'text-[#FFF]' : ''}`}>{item.label}</p>
                )}
                {hasChildren && !collapse && (
                  <>
                    {isOpen ? <RiArrowDropUpLine size={20} className="text-[#0D141C]" /> : <RiArrowDropDownLine size={20} className="text-[#0D141C]" /> }
                  </>
                  // <span className={`ml-auto transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
                )}
              </div>

              {/* Child Items */}
              {hasChildren && isOpen && !collapse && (
                <div className=" bg-[#F7FAFC] rounded-[8px] py-[12px] px-[24px] mt-[4px] flex flex-col gap-[12px]">
                  {item.children.map((child) => {
                    const isActive = location.pathname === child.path;
                    const Icon = child.icon;
                    return (
                      <div
                        key={child.id}
                        onClick={() => navigate(child.path)}
                        className=" w-full flex items-center gap-[26px] cursor-pointer  font-inter text-[14px]"
                      
                      >
                        <Icon size={20} className={` ${isActive ? "text-[#0057A3]" : "text-[#0D141C]"}`} />
                        <p className={`${isActive ? "text-[#0057A3]" : "text-[#0D141C]"}`}>{child.label}</p>
                      </div>
                    );
                  })}
                </div>
              )}

            </div>
          );
        })}

      </div>

      {/* Separator */}
      {!collapse && (
        <div className="w-full h-[1px] bg-[#7373734D] mt-[41px]"></div>
      )}

      {/* Logout */}
      <div className={`w-full flex items-center ${collapse ? 'justify-center' : 'gap-[27px]'} px-[16px] cursor-pointer  rounded-[8px] p-[8px]`}>
        <img src="/src/assets/logout.svg" alt="Logout" />
        {!collapse && (
          <p className="text-[#0D141C] font-inter text-[15px] font-[500]">Logout</p>
        )}
      </div>
    </div>
  )
}

export default Sidebar;