import { useState } from "react";
import { Link } from "react-router-dom";
import RightSection from "../../components/auth/RightSection";
import eng from "../../assets/english.svg";
import InputBox from "../../components/micros/InputBox";
import { useNavigate } from "react-router-dom";
import PhoneOtpSection from "../../components/auth/PhoneOtpSection";

function ForgotPassword() {
  const navigate = useNavigate();
  const [contact, setContact] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpSent, setOtpSent] = useState(false);

  const handleContactChange = (e) => {
    setContact(e.target.value);
  };

  const handleOtpChange = (e, idx) => {
    const value = e.target.value.replace(/\D/, "");
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[idx] = value;
      setOtp(newOtp);
      if (value && idx < 5) {
        document.getElementById(`otp-${idx + 1}`).focus();
      }
    }
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (contact.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    setOtpSent(true);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    console.log("Verifying OTP:", enteredOtp);
    navigate("/reset-password");
    // Add OTP verification logic here
  };

  return (
    <div className="bg-[#FFFFFF] w-full h-screen flex">

      <PhoneOtpSection contact={contact} 
      setContact={setContact} 
      otp={otp} setOtp={setOtp} 
      otpSent={otpSent} 
      handleContactChange={handleContactChange}
       handleOtpChange={handleOtpChange} 
       handleSendOtp={handleSendOtp} 
       handleVerifyOtp={handleVerifyOtp} 
       heading="Forgot Password"
       subHeading="Enter your registered contact number to get reset password OTP"
       fromForgotPassword={true}
       />
      <RightSection />
    </div>
  );
}

export default ForgotPassword;
