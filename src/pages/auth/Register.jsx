import { useFormik } from "formik";
import LeftSection from "../../components/auth/LeftSection";
import RightSection from "../../components/auth/RightSection";
import PhoneAuth from "./PhoneAuth";
import { useState } from "react";

function Register() {

  const [step, setStep] = useState("register");
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      mobileNumber: "",
    },
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      // Handle form submission here
    },
  });
  return (
    <div className="bg-[#FFFFFF] w-full h-screen flex">
      {/* left section */}
      {step === "register" && (
      <LeftSection
        type={"register"}
        formik={formik}
        heading={"Start your free trial"}
        subHeading={"Get started with a demo account on LevNext"}
        showInputs={[
          "firstName",
          "lastName",
          "email",
          "password",
          "mobileNumber",
        ]}
        buttonText={"Start a free trial"}
        isSocial={true}
        setStep={setStep}
      />
      )}
      {step === "phone" && (
        <PhoneAuth setStep={setStep} type="register" />
      )}
      {/* right section */}
      <RightSection />
    </div>
  );
}
export default Register;
