import React from "react";
import { IoIosSearch } from "react-icons/io";
import { menuItems } from "../utils/Veriables";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ collapse, setCollapse }) => {
  const navigate = useNavigate();

  return (
    <div className={`
      ${collapse ? 'w-[80px]' : 'w-[244px]'} 
      h-screen flex flex-col gap-[25px] items-center bg-[#FFF] px-[21px] transition-all duration-300
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
      <div className='w-full flex flex-col gap-[32px] px-[16px]'>
        {menuItems.map((item) => (
          <div 
            onClick={() => navigate(item.path)} 
            key={item.id} 
            className={`flex items-center ${collapse ? 'justify-center' : 'gap-[27px]'} cursor-pointer hover:bg-[#E5EDF5] rounded-[8px] p-[8px]`}
          >
            <img src={item.icon} alt={item.label} />
            {!collapse && (
              <p className="text-[#0D141C] font-inter text-[15px] font-[500]">{item.label}</p>
            )}
          </div>
        ))}
      </div>

      {/* Separator */}
      {!collapse && (
        <div className="w-full h-[1px] bg-[#7373734D] mt-[41px]"></div>
      )}

      {/* Logout */}
      <div className={`w-full flex items-center ${collapse ? 'justify-center' : 'gap-[27px]'} px-[16px] cursor-pointer hover:bg-[#E5EDF5] rounded-[8px] p-[8px]`}>
        <img src="/src/assets/logout.svg" alt="Logout" />
        {!collapse && (
          <p className="text-[#0D141C] font-inter text-[15px] font-[500]">Logout</p>
        )}
      </div>
    </div>
  )
}

export default Sidebar;