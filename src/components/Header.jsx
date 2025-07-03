import React from "react";

const Header = () => (
  <header className="flex items-center justify-between bg-[#0057A3] h-[67px] px-8 py-4 ml-[20px]">
    <div />
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gray-300" />
      <div>
        <div className="font-semibold">Ranjeet Sharma</div>
        <div className="text-xs text-gray-500">ranjeet@levnext.com</div>
      </div>
    </div>
  </header>
);

export default Header; 