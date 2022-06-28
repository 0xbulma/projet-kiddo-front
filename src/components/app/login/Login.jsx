import React from "react";
import { useState } from "react";
import FormLogin from "./FormLogin";
import StepTwoLogin from "./StepTwoLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [step, setStep] = useState(1);
  return (
    <div>
      {step === 1 ? (
        <FormLogin
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          step={step}
          setStep={setStep}
        />
      ) : (
        <StepTwoLogin />
      )}
    </div>
  );
};

export default Login;
