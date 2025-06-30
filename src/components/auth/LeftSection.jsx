import React from "react";
import { useFormik } from "formik";
import eng from "../../assets/english.svg";
import { FcGoogle } from "react-icons/fc";
import facebook from "../../assets/Facebooklogo.svg";
import phone from "../../assets/phoneIcon.svg";
import InputBox from "../micros/InputBox";
import { Link, useNavigate } from "react-router-dom";

const LeftSection = ({
  formik,
  heading,
  subHeading,
  showInputs,
  isSocial,
  type,
  buttonText,
  setStep = () => {},
}) => {
  const navigate = useNavigate();

  return (
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
            {heading}
          </p>

          <p className=" text-[#7A7E82] font-[400] text-[14px] leading-[24px] font-inter ">
            {subHeading}
          </p>
        </div>
        {/* buttons  */}
        {isSocial && (
          <div className=" w-full flex gap-[9px]">
            <div className="  min-w-[132px] h-[56px] bg-[#E5EDF5] px-[15px] rounded-[8px] flex items-center justify-center gap-[13px]">
              <FcGoogle size={33} />
              <p className=" text-[#4575A1] font-[400] text-[16px] leading-[24px] font-inter">
                Google
              </p>
            </div>

            <div className=" min-w-[132px] h-[56px] bg-[#E5EDF5] px-[15px] rounded-[8px] flex items-center justify-center gap-[13px]">
              <img src={facebook} alt="" />
              <p className=" text-[#4575A1] font-[400] text-[16px] leading-[24px] font-inter">
                Facebook
              </p>
            </div>

            <div onClick={() =>setStep("phone")} className=" min-w-[132px] h-[56px] bg-[#E5EDF5] px-[15px] rounded-[8px] flex items-center justify-center gap-[13px]">
              <img src={phone} alt="" />
              <p className=" text-[#4575A1] font-[400] text-[16px] leading-[24px] font-inter">
                Phone
              </p>
            </div>
          </div>
        )}
        {/* seprator  */}

        <div className=" w-full flex items-center justify-center gap-[10px]">
          <div className="  h-[1px] w-full bg-[#7A7E82]"></div>
          <p className=" text-[#7A7E82] font-[400] text-[14px] leading-[24px] font-inter whitespace-nowrap">
            or sign up with email
          </p>
          <div className="  h-[1px] w-full bg-[#7A7E82]"></div>
        </div>

        {/* form  */}
        <form onSubmit={formik.handleSubmit}>
          <div className=" w-full flex flex-col gap-[26px]">
            {/* first name   and last name */}
            <div className=" w-full flex gap-[16px]">
              {showInputs.includes("firstName") && (
                <InputBox
                  type="text"
                  placeholder="First Name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="firstName"
                />
              )}
              {showInputs.includes("lastName") && (
                <InputBox
                  type="text"
                  placeholder="Last Name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="lastName"
                />
              )}
            </div>
            {/* email  */}
            {showInputs.includes("email") && (
              <InputBox
                type="email"
                placeholder="Business Email Address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="email"
              />
            )}
            {showInputs.includes("password") && (
              <>
                <InputBox
                  type="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="password"
                />

               
                  <div className="w-full flex items-center justify-between whitespace-nowrap">
                    <div className="flex items-center gap-[5px]">
                      <input
                        type="checkbox"
                        className=" bg-[#E5EDF5] rounded-[8px] w-[24px] h-[24px] focus:outline-none focus:ring-0 focus:border-0  transition-colors duration-200"
                        style={{ boxShadow: "none", border: "none" }}
                      />
                      <p className="text-[#4575A1] font-[400] text-[16px] leading-[24px] font-inter">
                        Remember me
                      </p>
                    </div>
                    
                    <p onClick={() => navigate("/forgot-password")} className=" text-[#0057A3] font-[400] text-[16px] leading-[24px] font-inter cursor-pointer">Forgot password?</p>
                  </div>
               
              
              </>
            )}
            {showInputs.includes("mobileNumber") && (
              <InputBox
                type="tel"
                placeholder="Mobile Number"
                value={formik.values.mobileNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="mobileNumber"
              />
            )}
            {type === "register" && (
              <p className=" text-[#7A7E82] font-[400] text-[12px] leading-[20px] font-inter text-center">
                By signing up, you agree to our Terms & Conditions and Privacy
                Policy, and consent to receive promotional messages. Your
                details may be shared with our partners to assist with your
                signup and service experience.
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-[48px] px-[20px] bg-[#0057A3] rounded-[8px]"
            >
              <p className=" text-[16px] leading-[24px] font-[700] font-inter text-[#F7FAFC]">
                {" "}
                {buttonText}
              </p>
            </button>
            {(type === "register"  || type === "login") && (
              <p className=" text-[#000000] font-[400] text-[16px] leading-[24px] font-inter text-center cursor-pointer">
                {" "}
                {type === "register"
                  ? "Already have an account?"
                  : "Don't have an account?"}
                <span
                  onClick={() =>
                    type === "register"
                      ? navigate("/login")
                      : navigate("/register")
                  }
                  className=" text-[#0057A3] underline-none font-[700] ml-[5px]"
                >
                  {type === "register" ? "Sign in" : "Sign up"}
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeftSection;
