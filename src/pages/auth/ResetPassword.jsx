import { useState } from "react";
import RightSection from "../../components/auth/RightSection";
import eng from "../../assets/english.svg";
import { useFormik } from "formik";
import InputBox from "../../components/micros/InputBox";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      // Handle form submission here
    },
  });
  return (
    <div className="bg-[#FFFFFF] w-full h-screen flex">
      {/* left section */}
      <div className=" w-full flex flex-col  rounded-[8px] flex flex-col px-[38px] py-[24px]">
      {/* language  */}
      <div className="w-[132px] h-[56px] rounded-[8px] bg-[#E5EDF5] flex-shrink-0 flex items-center justify-center gap-[11px]">
        <img src={eng} alt="" />
        <p className=" font-inter text-[16px] font-[400] text-[#4575A1] leading-[24px]">
          English
        </p>
      </div>

      <div className=" flex w-full max-w-[417px] mt-[46px] flex-col gap-[34px] justify-center ml-[90px] ">
        {/* title  */}
        <div className=" w-fit flex flex-col gap-[5px]">
          <p className=" font-inter text-[28px] leading-[35px] font-[700] text-[#0D141C] leading-[32px]">
            Create New Password
          </p>

          <p className=" text-[#7A7E82] font-[400] text-[14px] leading-[24px] font-inter ">
          Enter your new password to reset your account
          </p>
        </div>
    
       
        {/* form  */}
        <form onSubmit={formik.handleSubmit}>
          <div className=" w-full flex flex-col gap-[26px]">
         
                <InputBox
                  type="password"
                  placeholder="New Password"
                  value={formik.values.newPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="newPassword"
                />
              
           
                <InputBox
                  type="password"
                  placeholder="Confirm Password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="confirmPassword"
                />
              
          
      
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-[48px] px-[20px] bg-[#0057A3] rounded-[8px]"
            >
              <p className=" text-[16px] leading-[24px] font-[700] font-inter text-[#F7FAFC]">
                {" "}
                Reset Password
              </p>
            </button>
           
              <p className=" text-[#000000] font-[400] text-[16px] leading-[24px] font-inter text-center cursor-pointer">
                {" "}
                Take me back to login page 
                <span
                  onClick={() =>
                    navigate("/login")
                  }
                  className=" text-[#0057A3] underline-none font-[700] ml-[5px]"
                >
                  Login
                </span>
              </p>
            
          </div>
        </form>
      </div>
    </div>
      
      {/* right section */}
      <RightSection />
    </div>
  );
}
export default ResetPassword; 