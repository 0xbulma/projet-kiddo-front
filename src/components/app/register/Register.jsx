import { useState } from "react";

import FormRegister from "./FormRegister";
import StepTwoRegister from "./StepTwoRegister";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [step, setStep] = useState(1);
  return (
    <div>
      {step === 1 ? (
        <FormRegister
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          verifyPassword={verifyPassword}
          setVerifyPassword={setVerifyPassword}
          step={step}
          setStep={setStep}
        />
      ) : (
        <StepTwoRegister />
      )}
    </div>
  );
}

export default Register;
