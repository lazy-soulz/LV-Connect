import React from "react";
import { IoIosSearch } from "react-icons/io";
import { menuItems } from "../utils/Veriables";

const Sidebar = () => {

  return (
    <div className='w-[244px] h-full flex flex-col gap-[25px]  items-center bg-[#FFF] px-[21px] rounded-[10px] '>

      {/* Logo  */}
      <div className='flex items-center justify-center  mt-[23px]'>
        <img src="/src/assets/dash_logo.png" alt="LevNext Logo" />
        <div>
          <p className=' font-[600] font-inter text-[20px] leading-[21px] text-[#0D141C]'>LevNext</p>
          <p className=' font-[600] font-inter text-[16px] leading-[21px] text-[#737373]'>Connect</p>
        </div>
      </div>

      {/* Search  */}
      <div className="rounded-[8px] w-full h-[47px]  flex justify-between bg-[#E5EDF5] px-[15px] py-[12px]">
        <div className="w-full flex gap-[32px] items-center ">
          <img
            src="/src/assets/search.svg"
            className="w-[24px] h-[24px]  cursor-pointer"
          />

          <input
            className="border-none outline-none bg-[#E5EDF5] w-full font-poppins text-[14px] leading-[22px] text-[#A2A2A2]"
            placeholder="Search... "
          />
        </div>


      </div>

      {/* Menu  */}
      <div className=' w-full flex flex-col gap-[32px]  px-[16px]'>
        {menuItems.map((item) => (
          <div key={item.id} className='flex items-center gap-[27px] cursor-pointer'>
            <img src={item.icon} alt={item.label} />
            <p className=" text-[#0D141C] font-inter text-[15px]font-[500]">{item.label}</p>
          </div>
        ))}
      </div>

      {/* seprator */}
      <div className="w-full h-[1px] bg-[#7373734D] mt-[41px] "></div>

      {/* Logout */}
      <div className="w-full flex items-center gap-[27px] px-[16px] cursor-pointer">
        <img src="/src/assets/logout.svg" alt="Logout" />
        <p className=" text-[#0D141C] font-inter text-[15px]font-[500]">Logout</p>
      </div>

      {/* seprator */}

    </div>
  )
}


export default Sidebar; 