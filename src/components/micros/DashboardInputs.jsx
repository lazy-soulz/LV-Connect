// InputBox.jsx
import React from "react";

const DashboardInputs = ({ type, placeholder, value, onChange, name, onBlur, label, minWidth = "250px" }) => {
  return (
    <div className="flex flex-col" style={{ minWidth }}>
      {label && (
        <label className="text-[#0D141C] text-[15px] font-inter font-[400] leading-[24px]">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        autoComplete="off"
        onBlur={onBlur}
        className="h-[41px] bg-[#F7FAFC] p-[16px] rounded-[8px] border border-[#CCDBEB] outline-none placeholder:text-[#4575A1] placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[24px] font-inter"
      />
    </div>
  );
};

export default DashboardInputs;
