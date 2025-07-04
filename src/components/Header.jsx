import React from "react";

const Header = () => (
  <div className="bg-[#0057A3] h-[67px]  py-[12px] flex justify-between items-center">
      

      {/* Serach input box   */}

      <div className="rounded-[8px] w-[288px] h-[41px]  flex justify-between bg-[#E5EDF5] px-[15px] py-[12px] ml-[49px]">
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


      {/*  */}

      <div className="flex items-center gap-[8px] mr-[49px]">
        <img src="/src/assets/settings_logo.svg" alt="notification" />
        <img src="/src/assets/bell_logo.svg" alt="notification" />
        <img src="/src/assets/user.png" alt="notification" />
       
      </div>

   
  </div>
);

export default Header; 