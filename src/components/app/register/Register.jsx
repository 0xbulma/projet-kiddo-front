import { useState } from "react";

import Form from "../register/Form";
import StepTwo from "../register/StepTwo";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [step, setStep] = useState(1);
  return (
    <div>
      {step === 1 ? (
        <Form
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
        <StepTwo />
      )}
    </div>
  );
}

export default Register;
