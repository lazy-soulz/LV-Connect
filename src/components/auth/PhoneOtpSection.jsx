import React from 'react'
import InputBox from '../micros/InputBox'
import eng from '../../assets/english.svg'
import { useNavigate } from 'react-router-dom'
const PhoneOtpSection = ({contact, setContact, otp, setOtp, otpSent, handleContactChange, handleOtpChange, handleSendOtp, handleVerifyOtp, heading, subHeading, fromForgotPassword, setStep, type}) => {
    const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col rounded-[8px] px-[38px] py-[24px]">
        <div className="w-[132px] h-[56px] rounded-[8px] bg-[#E5EDF5] flex-shrink-0 flex items-center justify-center gap-[11px]">
          <img src={eng} alt="" />
          <p className="font-inter text-[16px] font-[400] text-[#4575A1] leading-[24px]">English</p>
        </div>

        <div className="flex w-full max-w-[417px] mt-[46px] flex-col gap-[34px] justify-center ml-[90px]">
          <div className="w-fit flex flex-col gap-[5px]">
            <p className="font-inter text-[28px] font-[700] text-[#0D141C] text-center leading-[32px]">{heading}</p>
            <p className="text-[#7A7E82] font-inter text-[16px] font-[400] text-center" style={{ fontFeatureSettings: "'dlig' on" }}>
             {subHeading}
            </p>
          </div>

          <InputBox
            type="text"
            placeholder={fromForgotPassword ? "Enter Registered Number" : "Enter Contact Number"}
            value={contact}
            onChange={handleContactChange}
            name="contact"
          // className="text-[#141414] text-center font-inter text-[16px] font-[400] leading-[24px]"
          />

          <button
            onClick={handleSendOtp}
            className="w-full h-[48px] bg-[#0057A3] rounded-[8px] flex items-center justify-center gap-[10px]"
          >
            <p className="text-[16px] leading-[24px] font-[700] text-[#F7FAFC] font-inter">Send Reset OTP</p>
          </button>

          {/* OTP Section */}
          {otpSent && (
            <div className="w-full  flex flex-col items-center  gap-[34px]">
              <p className="text-[#141414] text-center font-inter text-[16px] font-[400] leading-[24px] mb-3">
                We sent a verification code to +91-XXXX-XXXX
              </p>
              <div className="flex justify-center gap-[19px] mb-4">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    id={`otp-${idx}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(e, idx)}
                    className="w-[51px] h-[64px] bg-[#E5EDF5] rounded-[8px] text-center text-[#141414] font-inter text-[16px] font-[400] focus:outline-none"
                  />
                ))}
              </div>

              <div className="  w-full flex justify-center items-center">
                <button
                  onClick={handleVerifyOtp}
                  className="w-[192px] h-[48px] bg-[#0056A6] text-[#F7FAFC] rounded-[8px] flex items-center justify-center text-[16px] leading-[24px] font-[700] font-inter"
                >
                  Verify OTP
                </button>
              </div>

              <p className="text-[#737373] text-center font-inter text-[14px] font-[400] leading-[21px]">
                Didn't receive the code? Resend code
              </p>
            </div>
          )}

          {/* Registration Link */}

          <p className=" text-[#000000] font-[400] text-[16px] leading-[24px] font-inter text-center cursor-pointer">

          {fromForgotPassword ? "Take me back to login page" : `Take me back to ${type} page`}
            <span
              onClick={() =>
                fromForgotPassword ?
                navigate("/login") :
                setStep(type)

              }
              className=" text-[#0057A3] underline-none font-[700] ml-[5px]"
            >
              {fromForgotPassword ? "Login" : type === "register" ? "Register" : "Login"}
            </span>
          </p>

        </div>
      </div>
  )
}

export default PhoneOtpSection