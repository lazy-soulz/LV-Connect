import React from "react";

const InputBox = ({ type, placeholder, value, onChange, name, onBlur }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        autoComplete="off"
        onBlur={onBlur}

        className=" w-full h-[56px] bg-[#E5EDF5] p-[16px] rounded-[8px] border-none outline-none placeholder:text-[#7A7E82] placeholder:text-[16px] placeholder:font-[400] placeholder:leading-[24px] placeholder:font-inter  placeholder:text-[#4575A1]"
      />
    </div>
  );
};

export default InputBox;
