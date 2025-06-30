import React, { useState } from 'react'
import PhoneOtpSection from '../../components/auth/PhoneOtpSection'


const PhoneAuth = ({setStep, type}) => {
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
        // Add OTP verification logic here
      };
  return (
    <PhoneOtpSection contact={contact} 
    setContact={setContact} 
    otp={otp} setOtp={setOtp} 
    otpSent={otpSent} 
    handleContactChange={handleContactChange}
     handleOtpChange={handleOtpChange} 
     handleSendOtp={handleSendOtp} 
     handleVerifyOtp={handleVerifyOtp} 
     heading="Enter your number"
     subHeading="Enter your number to get it registered in LevNext"
     fromForgotPassword={false}
     setStep={setStep}
     type={type}
     />
 
  )
}

export default PhoneAuth;
