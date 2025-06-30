import { useFormik } from "formik";
import LeftSection from "../../components/auth/LeftSection";
import RightSection from "../../components/auth/RightSection";
import { useState } from "react";
import PhoneAuth from "./PhoneAuth";

function Login() {
  const [step, setStep] = useState("login");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    
    },
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      // Handle form submission here
    },
  });
  return (
    <div className="bg-[#FFFFFF] w-full h-screen flex">
      {/* left section */}
      {step === "login" && (
      <LeftSection
        type={"login"}
        formik={formik}
        heading={"Log in to your account"}
        subHeading={"Welcome back! Select a method to sign in"}
        showInputs={[
          "email",
          "password",
        ]}
        isSocial={true}
        buttonText={"Login"}
        setStep={setStep}
      />
      )}
      {step === "phone" && (
        <PhoneAuth setStep={setStep} type="login" />
      )}
      {/* right section */}
      <RightSection />
    </div>
  );
}
export default Login; 